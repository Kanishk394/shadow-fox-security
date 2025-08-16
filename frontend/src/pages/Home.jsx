import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(101,67,33,0.7)), url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/93 via-stone-900/75 to-black/88"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
          <div className="text-center w-full">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)'}}></div>
                <img src="/logo5.png" alt="Shadow Force" className="h-32 w-32 rounded-full object-cover animate-pulse" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-8 tracking-tight drop-shadow-2xl animate-pulse bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              SHADOW FORCE
            </h1>
            <h2 className="text-5xl font-bold mb-6 drop-shadow-lg animate-pulse bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              PROFESSIONAL SECURITY SOLUTIONS
            </h2>

            <p className="text-2xl mb-8 max-w-5xl mx-auto leading-relaxed drop-shadow-lg font-semibold bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent animate-pulse">
              Elite military-grade security operations. Ex-Special Forces operators delivering precision protection for high-value assets, VIP personnel, and critical infrastructure.
            </p>
            <p className="text-xl mb-16 max-w-4xl mx-auto drop-shadow-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              ⚡ Rapid Deployment • 🎯 Tactical Excellence • 🛡️ Zero Compromise • 🔒 Maximum Discretion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book" 
                className="bg-transparent text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all transform hover:scale-105 border-2 border-white hover:border-yellow-300"
              >
                📝 BOOK SERVICES
              </Link>
              <a 
                href="tel:+919999934589"
                className="bg-transparent text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-all transform hover:scale-105 border-2 border-white hover:border-yellow-300"
              >
                📞 CALL US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gradient-to-br from-black via-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">TACTICAL SERVICES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20 hover:border-fox-orange/50 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-fox-orange mb-4">Personal Protection</h3>
              <p className="text-gray-300 mb-4">Elite bodyguard services with military-trained operators for VIP protection.</p>
              <div className="text-security-blue font-bold text-lg">From $200/day</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20 hover:border-fox-orange/50 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-fox-orange mb-4">Event Security</h3>
              <p className="text-gray-300 mb-4">Comprehensive security operations for high-profile events and gatherings.</p>
              <div className="text-security-blue font-bold text-lg">From $150/hour</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20 hover:border-fox-orange/50 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-fox-orange mb-4">Property Security</h3>
              <p className="text-gray-300 mb-4">24/7 tactical monitoring and rapid response for critical facilities.</p>
              <div className="text-security-blue font-bold text-lg">From $100/day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-black via-stone-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">WHY SHADOW FORCE?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">RAPID RESPONSE</h3>
              <p className="text-gray-300">15-minute deployment anywhere in the city</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">ELITE OPERATORS</h3>
              <p className="text-gray-300">Ex-military and law enforcement professionals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">TOTAL DISCRETION</h3>
              <p className="text-gray-300">Confidential operations with zero compromise</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">24/7 SUPPORT</h3>
              <p className="text-gray-300">Always available when you need us most</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-black via-stone-800 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">ELITE OPERATORS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-fox-orange to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">👤</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">ALPHA TEAM</h3>
              <p className="text-gray-300">Ex-Special Forces operators specializing in VIP protection and tactical response.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-fox-orange to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">👤</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">BRAVO TEAM</h3>
              <p className="text-gray-300">Intelligence and surveillance specialists with advanced technical capabilities.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-fox-orange to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">👤</div>
              <h3 className="text-xl font-bold text-fox-orange mb-2">CHARLIE TEAM</h3>
              <p className="text-gray-300">Rapid response unit for emergency situations and threat neutralization.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-br from-black via-stone-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-fox-orange mb-2">500+</div>
              <p className="text-gray-300 text-lg">Successful Operations</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-fox-orange mb-2">24/7</div>
              <p className="text-gray-300 text-lg">Emergency Response</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-fox-orange mb-2">100%</div>
              <p className="text-gray-300 text-lg">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-fox-orange mb-2">15min</div>
              <p className="text-gray-300 text-lg">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-black via-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">CLIENT TESTIMONIALS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20">
              <div className="text-fox-orange text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">"Shadow Force provided exceptional security for our corporate event. Professional, discreet, and highly effective."</p>
              <p className="text-fox-orange font-bold">- Corporate Executive</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20">
              <div className="text-fox-orange text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">"Their rapid response and tactical expertise saved our facility from a serious security breach."</p>
              <p className="text-fox-orange font-bold">- Facility Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-stone-800 via-stone-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">READY TO SECURE YOUR ASSETS?</h2>
          <p className="text-2xl text-white/90 mb-12">Don't wait until it's too late. Contact Shadow Force Security now.</p>
          <Link 
            to="/book" 
            className="bg-white text-fox-orange px-16 py-6 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            📝 BOOK SERVICES NOW
          </Link>
        </div>
      </div>
    </div>
  )
}