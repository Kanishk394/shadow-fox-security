export default function Contact() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-black/93 via-stone-900/75 to-black/88">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)'}}></div>
              <img src="/logo5.png" alt="Shadow Force" className="h-24 w-24 rounded-full object-cover animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            CONTACT US
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Get in touch with Shadow Force Security - We're here 24/7 for your protection needs
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40 text-center">
            <div className="text-6xl mb-6">📞</div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">CALL US</h2>
            <a href="tel:+919999934589" className="text-2xl text-white hover:text-yellow-400 transition-colors font-semibold">
              +91 9999934589
            </a>
            <p className="text-gray-400 mt-4">Direct hotline for immediate assistance</p>
          </div>

          {/* Email */}
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40 text-center">
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">EMAIL US</h2>
            <a href="mailto:infoshadowforce777@gmail.com" className="text-xl text-white hover:text-yellow-400 transition-colors font-semibold break-all">
              infoshadowforce777@gmail.com
            </a>
            <p className="text-gray-400 mt-4">Professional inquiries and consultations</p>
          </div>

          {/* Availability */}
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40 text-center">
            <div className="text-6xl mb-6">🕐</div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">AVAILABILITY</h2>
            <p className="text-2xl text-white font-semibold mb-2">24/7</p>
            <p className="text-lg text-yellow-400 font-semibold">Always Available</p>
            <p className="text-gray-400 mt-4">Round-the-clock security services</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-900/80 to-red-800/80 backdrop-blur-sm p-8 rounded-xl border border-red-600/40 mb-16">
          <div className="text-center">
            <div className="text-6xl mb-4">🚨</div>
            <h2 className="text-4xl font-bold text-red-400 mb-4">EMERGENCY HOTLINE</h2>
            <a href="tel:+919999934589" className="text-3xl text-white hover:text-red-300 transition-colors font-bold">
              +91 9999934589
            </a>
            <p className="text-red-200 mt-4 text-lg">For immediate security emergencies and rapid response deployment</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Quick Contact */}
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">QUICK CONTACT</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <p className="text-white font-semibold">Mobile/WhatsApp</p>
                  <a href="tel:+919999934589" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    +91 9999934589
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-3xl mr-4">💼</div>
                <div>
                  <p className="text-white font-semibold">Business Email</p>
                  <a href="mailto:infoshadowforce777@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors break-all">
                    infoshadowforce777@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-3xl mr-4">⚡</div>
                <div>
                  <p className="text-white font-semibold">Response Time</p>
                  <p className="text-yellow-400">15 minutes deployment guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">SERVICE COVERAGE</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-2xl mr-3">🏙️</div>
                <p className="text-white">Delhi NCR Region</p>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-3">🚁</div>
                <p className="text-white">Rapid Deployment Nationwide</p>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-3">🌐</div>
                <p className="text-white">International Operations Available</p>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-3">🛡️</div>
                <p className="text-white">Elite Tactical Response Teams</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-black/60 backdrop-blur-sm p-12 rounded-xl border border-stone-600/40">
          <h2 className="text-5xl font-bold text-yellow-400 mb-8">READY TO SECURE YOUR FUTURE?</h2>
          <p className="text-2xl text-gray-300 mb-8">Contact Shadow Force Security today for professional consultation</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+919999934589"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
            >
              📞 CALL NOW
            </a>
            <a 
              href="mailto:infoshadowforce777@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              📧 EMAIL US
            </a>
            <a 
              href="/book"
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-yellow-700 hover:to-yellow-800 transition-all transform hover:scale-105 shadow-lg"
            >
              📝 BOOK ONLINE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}