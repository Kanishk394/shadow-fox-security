import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: true })
    
    if (data && data.length > 0) {
      setServices(data)
    } else {
      // Fallback services if database is empty
      const fallbackServices = [
        { name: 'Personal Protection', price: '₹15,000/day', description: 'Elite bodyguard services with ex-military trained operators for VIP protection and personal security.' },
        { name: 'Party Protection', price: '₹8,000/event', description: 'Comprehensive security coverage for private parties, celebrations, and social gatherings.' },
        { name: 'Event Security', price: '₹12,000/day', description: 'Professional security operations for corporate events, conferences, and public gatherings.' },
        { name: 'Property Security', price: '₹5,000/day', description: '24/7 tactical monitoring and rapid response for residential and commercial properties.' },
        { name: 'VIP Transport', price: '₹20,000/trip', description: 'Secure transportation services with armored vehicles and trained security escorts.' },
        { name: 'Corporate Security', price: '₹25,000/day', description: 'Executive protection and corporate facility security for high-profile business operations.' },
        { name: 'Wedding Security', price: '₹10,000/event', description: 'Discreet security services for wedding ceremonies and receptions ensuring guest safety.' },
        { name: 'Cyber Security Consultation', price: '₹3,000/hour', description: 'Digital security assessment and protection strategies for personal and business data.' },
        { name: 'Investigation Services', price: '₹2,500/hour', description: 'Professional investigation services for personal, corporate, and legal matters.' },
        { name: 'Security Training', price: '₹5,000/session', description: 'Personal safety and security awareness training for individuals and corporate teams.' },
        { name: 'Residential Security', price: '₹4,000/day', description: 'Home security services including surveillance and access control for residential properties.' },
        { name: 'Celebrity Protection', price: '₹30,000/day', description: 'Specialized protection services for celebrities, politicians, and high-profile personalities.' }
      ]
      setServices(fallbackServices)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-black via-stone-900 to-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)'}}></div>
              <img src="/logo5.png" alt="Shadow Force" className="h-24 w-24 rounded-full object-cover animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-fox-orange via-yellow-400 to-red-500 bg-clip-text text-transparent">TACTICAL SERVICES</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Professional security solutions tailored to your specific needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-fox-orange/20 hover:border-fox-orange/50 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">
                {service.name.includes('Personal') ? '🛡️' :
                 service.name.includes('Party') ? '🎉' :
                 service.name.includes('Event') ? '🎯' :
                 service.name.includes('Property') ? '🏢' :
                 service.name.includes('Transport') ? '🚗' :
                 service.name.includes('Corporate') ? '🏢' :
                 service.name.includes('Wedding') ? '💍' :
                 service.name.includes('Cyber') ? '💻' :
                 service.name.includes('Investigation') ? '🔍' :
                 service.name.includes('Training') ? '🎯' :
                 service.name.includes('Residential') ? '🏠' :
                 service.name.includes('Celebrity') ? '⭐' : '🛡️'}
              </div>
              <h3 className="text-2xl font-bold text-fox-orange mb-4">{service.name}</h3>
              <p className="text-security-blue text-xl font-semibold mb-4">{service.price}</p>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <a href="tel:+919999934589" className="bg-fox-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}