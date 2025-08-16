import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo5.png" alt="Shadow Force" className="h-10 w-10 rounded-full mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                SHADOW FORCE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elite security professionals delivering uncompromising protection and tactical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-400 transition">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-yellow-400 transition">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Personal Protection</li>
              <li>Event Security</li>
              <li>Corporate Security</li>
              <li>VIP Transport</li>
              <li>Investigation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">CONTACT</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 <a href="tel:+919999934589" className="hover:text-yellow-400 transition">+91 9999934589</a></p>
              <p>📧 <a href="mailto:infoshadowforce777@gmail.com" className="hover:text-yellow-400 transition break-all">infoshadowforce777@gmail.com</a></p>
              <p>🕐 24/7 Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Shadow Force Security. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition text-sm">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}