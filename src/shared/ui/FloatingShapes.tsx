export function FloatingShapes() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-[#4186F6]/20 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-[15%] left-[25%] w-80 h-80 bg-white/15 rounded-full blur-3xl animate-float-medium" />
    </div>
  );
}
