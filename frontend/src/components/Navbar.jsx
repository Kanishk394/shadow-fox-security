import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-shadow-dark/95 backdrop-blur-sm border-b-2 border-fox-orange sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/logo5.png" alt="Shadow Force" className="h-12 w-auto" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">SHADOW FORCE</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-white hover:text-fox-orange font-semibold text-sm transition-all transform hover:scale-105 hover:drop-shadow-lg">🏠 HOME</Link>
            <Link to="/about" className="text-white hover:text-fox-orange font-semibold text-sm transition-all transform hover:scale-105 hover:drop-shadow-lg">📜 ABOUT</Link>
            <Link to="/services" className="text-white hover:text-fox-orange font-semibold text-sm transition-all transform hover:scale-105 hover:drop-shadow-lg">⚔️ SERVICES</Link>
            <Link to="/testimonials" className="text-white hover:text-fox-orange font-semibold text-sm transition-all transform hover:scale-105 hover:drop-shadow-lg">⭐ TESTIMONIALS</Link>
            <Link to="/contact" className="text-white hover:text-fox-orange font-semibold text-sm transition-all transform hover:scale-105 hover:drop-shadow-lg">📞 CONTACT</Link>
            <Link to="/admin" className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 py-1 rounded-md font-semibold text-sm hover:from-fox-orange hover:to-orange-600 transition-all transform hover:scale-105 shadow-md border border-gray-600 hover:border-fox-orange">🔐 ADMIN</Link>
            <Link to="/book" className="bg-gradient-to-r from-fox-orange via-red-500 to-pink-600 text-white px-4 py-2 rounded-md font-semibold text-sm hover:from-red-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-md animate-pulse hover:animate-bounce border border-yellow-400 hover:border-white">
              📝 BOOK SERVICES
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}