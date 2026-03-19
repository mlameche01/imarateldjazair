const BitrefillPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <iframe
        src="https://www.bitrefill.com/us/en/"
        title="Bitrefill"
        className="w-full border-0"
        style={{ height: "calc(100vh - 4rem)" }}
        allow="payment; clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default BitrefillPage;
