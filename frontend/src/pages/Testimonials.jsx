export default function Testimonials() {
  const testimonials = [
    {
      name: "Corporate Executive",
      company: "Fortune 500 Company",
      rating: 5,
      text: "Shadow Force provided exceptional security for our corporate event. Professional, discreet, and highly effective. Their tactical approach exceeded all expectations.",
      service: "Event Security"
    },
    {
      name: "Facility Manager",
      company: "High-Tech Manufacturing",
      rating: 5,
      text: "Their rapid response and tactical expertise saved our facility from a serious security breach. 15-minute response time as promised!",
      service: "Property Security"
    },
    {
      name: "VIP Client",
      company: "Entertainment Industry",
      rating: 5,
      text: "Unmatched professionalism in personal protection. The team's military background shows in every operation. Highly recommended.",
      service: "Personal Protection"
    },
    {
      name: "Event Coordinator",
      company: "Luxury Events",
      rating: 5,
      text: "Shadow Force handled security for our high-profile gala flawlessly. Invisible yet omnipresent - exactly what we needed.",
      service: "Event Security"
    },
    {
      name: "Business Owner",
      company: "Private Corporation",
      rating: 5,
      text: "24/7 monitoring service is exceptional. Their tactical operators provide peace of mind that's invaluable for our operations.",
      service: "Property Security"
    },
    {
      name: "Government Official",
      company: "Public Sector",
      rating: 5,
      text: "Elite level protection with absolute discretion. The Shadow Force team's expertise is unmatched in the security industry.",
      service: "VIP Transport"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900 to-stone-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)'}}></div>
              <img src="/logo5.png" alt="Shadow Force" className="h-24 w-24 rounded-full object-cover animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-fox-orange via-yellow-400 to-red-500 bg-clip-text text-transparent">
            CLIENT TESTIMONIALS
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with Shadow Force Security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20 hover:border-fox-orange/50 transition-all transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-fox-orange text-2xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <p className="text-fox-orange font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
                <p className="text-security-blue font-semibold text-sm mt-2">
                  Service: {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-fox-orange to-orange-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Satisfied Clients?</h2>
            <p className="text-xl text-white/90 mb-6">Experience elite security services that exceed expectations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919999934589"
                className="bg-white text-fox-orange px-8 py-3 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                📞 CALL NOW: 9999934589
              </a>
              <a 
                href="/book"
                className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-lg text-xl font-bold hover:from-black hover:to-gray-900 transition-all transform hover:scale-105 shadow-xl border border-white"
              >
📝 BOOK ONLINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}