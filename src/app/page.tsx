export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-900">FUTURE MEDIA</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Beranda</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Tentang</a>
                <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Layanan</a>
                <a href="#portfolio" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Portfolio</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-blue-900">Transformasi Digital</span>
              <br />
              untuk Bisnis Anda
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              PT FUTURE MEDIA DIGITAL adalah mitra terpercaya untuk pengelolaan website, 
              pemasaran digital, dan produksi konten berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Konsultasi Gratis Sekarang
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Lihat Portfolio
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600">Klien Puas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">1000+</div>
                <div className="text-sm text-gray-600">Project Selesai</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Tentang PT FUTURE MEDIA DIGITAL</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perusahaan profesional terpercaya yang berkomitmen untuk memberikan solusi digital terbaik untuk pertumbuhan bisnis Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Visi Kami</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Menjadi leader dalam industri solusi digital di Indonesia dengan memberikan inovasi teknologi 
                yang membantu bisnis berkembang dan bersaing di era digital. Kami percaya bahwa transformasi digital 
                adalah kunci kesuksesan bisnis masa depan.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Misi Kami</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memberikan solusi digital berkualitas tinggi yang disesuaikan dengan kebutuhan klien
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membangun kemitraan jangka panjang berbasis kepercayaan dan hasil nyata
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Terus berinovasi dan mengikuti perkembangan teknologi terkini
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memberikan edukasi dan dukungan penuh untuk kesuksesan klien
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Pengalaman & Keahlian</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Tahun Pengalaman</div>
                    <div className="text-sm text-gray-600">Dalam industri digital</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    500+
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Klien Puas</div>
                    <div className="text-sm text-gray-600">Dari berbagai industri</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1000+
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Project Selesai</div>
                    <div className="text-sm text-gray-600">Dengan hasil maksimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Sertifikasi & Legalitas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">SIUP</span>
                </div>
                <p className="font-semibold text-gray-900">Surat Izin Usaha Perdagangan</p>
                <p className="text-sm text-gray-600">Terdaftar resmi</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">NPWP</span>
                </div>
                <p className="font-semibold text-gray-900">Nomor Pokok Wajib Pajak</p>
                <p className="text-sm text-gray-600">Badan usaha terdaftar</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">ISO</span>
                </div>
                <p className="font-semibold text-gray-900">Sertifikasi ISO 9001</p>
                <p className="text-sm text-gray-600">Manajemen mutu terstandar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Layanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solusi digital terintegrasi untuk membantu bisnis Anda berkembang di era modern
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Pengelolaan & Pengembangan Website</h3>
              <p className="text-gray-600 mb-6">
                Kami menyediakan layanan pengembangan website profesional yang responsif, 
                modern, dan dioptimalkan untuk SEO. Dari website company profile hingga e-commerce kompleks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Website Company Profile
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  E-Commerce Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Website Custom & API Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Maintenance & Support 24/7
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Pemasaran Digital</h3>
              <p className="text-gray-600 mb-6">
                Strategi pemasaran digital yang komprehensif untuk meningkatkan brand awareness 
                dan menghasilkan leads berkualitas untuk bisnis Anda.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Search Engine Optimization (SEO)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Social Media Marketing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Google Ads & Facebook Ads
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Email Marketing & Analytics
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Produksi Konten</h3>
              <p className="text-gray-600 mb-6">
                Pembuatan konten berkualitas tinggi yang menarik dan relevan untuk audiens target Anda, 
                meningkatkan engagement dan brand loyalty.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Video Production & Editing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Photography & Product Shots
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Content Writing & Copywriting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Graphic Design & Branding
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Ajukan Penawaran Terbaik
            </button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Project Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik kami yang telah membantu ratusan klien mencapai kesuksesan digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    <p className="font-semibold">E-Commerce Platform</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2">Lihat Detail</p>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">TokoKu E-Commerce</h3>
              <p className="text-gray-600 text-sm mb-2">Platform e-commerce modern dengan fitur lengkap untuk retail fashion</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">MongoDB</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <p className="font-semibold">Company Profile</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2">Lihat Detail</p>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">PT Maju Bersama</h3>
              <p className="text-gray-600 text-sm mb-2">Website company profile profesional untuk perusahaan kontraktor</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Tailwind</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">CMS</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <p className="font-semibold">Dashboard Analytics</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2">Lihat Detail</p>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Sales Dashboard</h3>
              <p className="text-gray-600 text-sm mb-2">Dashboard analytics real-time untuk monitoring penjualan</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Vue.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Chart.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">API</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <p className="font-semibold">Learning Platform</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2">Lihat Detail</p>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">EduTech Platform</h3>
              <p className="text-gray-600 text-sm mb-2">Platform pembelajaran online dengan video streaming dan quiz</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Laravel</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">MySQL</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">WebRTC</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <p className="font-semibold">Social Media</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2">Lihat Detail</p>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">ConnectSpace</h3>
              <p className="text-gray-600 text-sm mb-2">Social media platform untuk komunitas profesional</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">GraphQL</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">PostgreSQL</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                    </svg>
                    <p className="font-semibold">Mobile Banking</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2">Lihat Detail</p>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Bank Digital App</h3>
              <p className="text-gray-600 text-sm mb-2">Aplikasi mobile banking dengan fitur transfer dan payment</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Flutter</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Blockchain</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Lihat Semua Project
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Hubungi Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Siap membantu mewujudkan transformasi digital untuk bisnis Anda. 
              Hubungi kami hari ini untuk konsultasi gratis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-900">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="PT Example"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                    <option value="">Pilih Layanan</option>
                    <option value="website">Pengelolaan & Pengembangan Website</option>
                    <option value="marketing">Pemasaran Digital</option>
                    <option value="production">Produksi Konten</option>
                    <option value="all">Semua Layanan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Ceritakan tentang project Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-900">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Menara Cakrawala, Jl. M.H. Thamrin No.9 12th floor, RT.2/RW.1, 
                        Kebon Sirih, Menteng, Central Jakarta City, Jakarta 10340
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600">0877-2988-7794</p>
                      <p className="text-sm text-gray-500">Senin - Jumat: 09:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@futuremediadigital.com</p>
                      <p className="text-gray-600">support@futuremediadigital.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                    <p className="text-blue-900 font-semibold">Peta Lokasi</p>
                    <p className="text-sm text-gray-600 mt-2">Menara Cakrawala, Jakarta Pusat</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PT FUTURE MEDIA DIGITAL</h3>
              <p className="text-blue-200 mb-4">
                Mitra terpercaya untuk transformasi digital bisnis Anda. 
                Solusi lengkap website, marketing, dan produksi konten.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Pengembangan Website</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pemasaran Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Produksi Konten</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi IT</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-blue-200">
                <li>0877-2988-7794</li>
                <li>info@futuremediadigital.com</li>
                <li>Menara Cakrawala, Jakarta Pusat</li>
                <li>Senin - Jumat: 09:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 PT FUTURE MEDIA DIGITAL. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}