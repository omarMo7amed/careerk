export function Banner() {
  return (
    <div
      className="h-40 w-full relative"
      style={{
        background:
          "linear-gradient(135deg, #0353a4 0%, #023e8a 40%, #03045e 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-8 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute bottom-4 right-12 w-16 h-16 rounded-full bg-white/10" />
        <div className="absolute top-8 right-32 w-8 h-8 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
