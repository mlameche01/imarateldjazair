import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import LiveHlsPlayer from "./LiveHlsPlayer";

const instances = vi.hoisted(() => [] as Array<{ handlers: Record<string, (...args: any[]) => void>; destroy: ReturnType<typeof vi.fn>; source?: string }>);
vi.mock("hls.js", () => {
  class MockHls {
    static isSupported = () => true;
    static Events = { MANIFEST_PARSED: "manifest", ERROR: "error" };
    handlers: Record<string, (...args: any[]) => void> = {};
    destroy = vi.fn();
    source?: string;
    constructor() { instances.push(this); }
    on(event: string, callback: (...args: any[]) => void) { this.handlers[event] = callback; }
    loadSource(src: string) { this.source = src; }
    attachMedia() {}
  }
  return { default: MockHls };
});

afterEach(() => { instances.length = 0; vi.restoreAllMocks(); });

describe("IPTV playback recovery", () => {
  it("releases the previous stream when switching channels", () => {
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
    const { rerender, unmount } = render(<LiveHlsPlayer src="https://example.org/rt.m3u8" name="RT France" />);
    const previous = instances[0];
    rerender(<LiveHlsPlayer src="https://example.org/tv5.m3u8" name="TV5 Monde" />);
    expect(previous.destroy).toHaveBeenCalledOnce();
    expect(instances[1].source).toBe("https://example.org/tv5.m3u8");
    unmount();
  });

  it("allows a new playback attempt after a fatal network failure", () => {
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
    const { unmount } = render(<LiveHlsPlayer src="https://example.org/live.m3u8" name="France 24" />);
    act(() => instances[0].handlers.error("error", { fatal: true }));
    expect(screen.getByRole("alert")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Réessayer" }));
    expect(instances).toHaveLength(2);
    expect(instances[1].source).toBe("https://example.org/live.m3u8");
    unmount();
  });
});