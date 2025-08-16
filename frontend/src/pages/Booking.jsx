import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [services, setServices] = useState([])
  const [selectedServicePrice, setSelectedServicePrice] = useState('')
  const [paymentOption, setPaymentOption] = useState('book')

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    const { data } = await supabase
      .from('services')
      .select('name, price')
      .order('name', { ascending: true })
    
    if (data && data.length > 0) {
      setServices(data)
    } else {
      // Fallback services
      const fallbackServices = [
        { name: 'Personal Protection', price: '₹15,000/day' },
        { name: 'Party Protection', price: '₹8,000/event' },
        { name: 'Event Security', price: '₹12,000/day' },
        { name: 'Property Security', price: '₹5,000/day' },
        { name: 'VIP Transport', price: '₹20,000/trip' },
        { name: 'Corporate Security', price: '₹25,000/day' },
        { name: 'Wedding Security', price: '₹10,000/event' },
        { name: 'Cyber Security Consultation', price: '₹3,000/hour' },
        { name: 'Investigation Services', price: '₹2,500/hour' },
        { name: 'Security Training', price: '₹5,000/session' },
        { name: 'Residential Security', price: '₹4,000/day' },
        { name: 'Celebrity Protection', price: '₹30,000/day' }
      ]
      setServices(fallbackServices)
    }
  }

  const handleServiceChange = (serviceName) => {
    const selectedService = services.find(s => s.name === serviceName)
    setFormData({...formData, service: serviceName})
    setSelectedServicePrice(selectedService ? selectedService.price : '')
  }

  const handlePayNow = () => {
    const upiId = 'shadowforce@paytm' // Replace with actual UPI ID
    const amount = selectedServicePrice.match(/₹([0-9,]+)/)?.[1]?.replace(',', '') || '5000'
    const upiUrl = `upi://pay?pa=${upiId}&pn=Shadow Force Security&am=${amount}&cu=INR&tn=Security Service Payment`
    window.open(upiUrl, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          message: formData.message,
          status: 'pending'
        }])

      if (error) throw error
      
      setSuccess(true)
      setFormData({ name: '', phone: '', service: '', date: '', message: '' })
    } catch (error) {
      alert('Error submitting booking: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-fox-orange mb-4">Booking Submitted!</h2>
          <p className="text-gray-300 mb-6">We'll contact you within 24 hours.</p>
          <button 
            onClick={() => setSuccess(false)}
            className="bg-fox-orange text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Book Another Service
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-black/93 via-stone-900/75 to-black/88">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)'}}></div>
              <img src="/logo5.png" alt="Shadow Force" className="h-20 w-20 rounded-full object-cover animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fox-orange via-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">BOOK SERVICES</h1>
          <p className="text-xl text-gray-300">Professional Security Solutions</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-black/88 backdrop-blur-sm p-8 rounded-xl border border-stone-600/40 shadow-2xl">
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-fox-orange"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-fox-orange"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Service</label>
            <select
              required
              value={formData.service}
              onChange={(e) => handleServiceChange(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-fox-orange"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service.name}>{service.name} - {service.price}</option>
              ))}
            </select>
            {selectedServicePrice && (
              <p className="text-fox-orange font-bold mt-2 text-lg">Price: {selectedServicePrice}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Date</label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-fox-orange"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-fox-orange"
              placeholder="Additional details about your security needs..."
            />
          </div>
          
          {/* Payment Options */}
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-4">Payment Option</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="book"
                  checked={paymentOption === 'book'}
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="mr-2"
                />
                <span className="text-white">Book Now (Pay Later)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="pay"
                  checked={paymentOption === 'pay'}
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="mr-2"
                />
                <span className="text-white">Pay Now (UPI)</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-fox-orange to-orange-600 text-white py-4 rounded-lg text-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none"
            >
              {loading ? 'SUBMITTING...' : '📝 SUBMIT BOOKING'}
            </button>
            
            {paymentOption === 'pay' && selectedServicePrice && (
              <button
                type="button"
                onClick={handlePayNow}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg text-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
              >
                💳 PAY NOW
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}