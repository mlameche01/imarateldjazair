import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// Numéro WhatsApp au format international, sans "+" ni espaces (ex. "213550123456")
const WHATSAPP_NUMBER = "213XXXXXXXXX";
const DEFAULT_MESSAGE = "Bonjour, j'ai une question sur Imarat El Djazair.";

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const send = () => {
    const text = message.trim() || DEFAULT_MESSAGE;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(20rem,calc(100vw-2rem))] rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-[#128C7E] text-white">
            <div>
              <p className="text-sm font-semibold">Discuter sur WhatsApp</p>
              <p className="text-xs opacity-90">Nous répondons dès que possible</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="p-1 rounded hover:bg-white/15">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <div className="rounded-xl rounded-tl-none bg-secondary px-3 py-2 text-sm text-foreground w-fit max-w-[90%]">
              Salam 👋 Comment pouvons-nous vous aider ?
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Votre message…"
            />
            <button
              onClick={send}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-black font-semibold text-sm py-2.5 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" /> Ouvrir WhatsApp
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Discuter sur WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};

export default WhatsAppChat;
