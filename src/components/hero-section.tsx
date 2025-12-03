'use client'

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            PT FUTURE MEDIA DIGITAL
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Solusi Digital Terpercaya untuk Bisnis Anda
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection