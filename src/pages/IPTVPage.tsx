const IPTVPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="w-full h-[calc(100vh-4rem)]">
        <iframe
          src="https://www.imarateldjazair.xyz/iptv"
          className="w-full h-full border-none"
          title="IPTV"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default IPTVPage;
