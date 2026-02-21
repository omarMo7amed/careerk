function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-br from-primary via-[#0466c8] to-[#4895ef] rounded-xl p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome Back, Shahd!
          </h1>
          <p className="text-white">Ready to find your dream job?</p>
        </div>

        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
          <span className="text-2xl font-bold text-white">S</span>
        </div>
      </div>
    </div>
  );
}

export { WelcomeBanner };
