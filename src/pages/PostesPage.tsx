const PostesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <iframe
        src="https://mounirlechoy.tangled.com"
        title="Postes"
        className="w-full border-0"
        style={{ height: "calc(100vh - 4rem)" }}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default PostesPage;
