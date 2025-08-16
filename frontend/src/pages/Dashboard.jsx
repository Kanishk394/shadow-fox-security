import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [bookings, setBookings] = useState([])
  const [services, setServices] = useState([])
  const [newService, setNewService] = useState({ name: '', price: '', description: '' })
  const [editingService, setEditingService] = useState(null)
  const [stats, setStats] = useState({ total: 0, pending: 0, confirmed: 0, cancelled: 0 })

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    if (user) {
      fetchBookings()
      fetchServices()
    }
  }, [user])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || user.email !== 'infoshadowforce777@gmail.com') {
      window.location.href = '/admin'
      return
    }
    setUser(user)
  }

  const fetchBookings = async () => {
    const { data } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) {
      setBookings(data)
      setStats({
        total: data.length,
        pending: data.filter(b => b.status === 'pending').length,
        confirmed: data.filter(b => b.status === 'confirmed').length,
        cancelled: data.filter(b => b.status === 'cancelled').length
      })
    }
  }

  const fetchServices = async () => {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setServices(data)
  }

  const addService = async (e) => {
    e.preventDefault()
    console.log('Adding service:', newService)
    
    const { data, error } = await supabase
      .from('services')
      .insert([newService])
      .select()
    
    if (error) {
      console.error('Error adding service:', error)
      alert('Error adding service: ' + error.message)
    } else {
      console.log('Service added successfully:', data)
      setNewService({ name: '', price: '', description: '' })
      fetchServices()
    }
  }

  const updateService = async (id, updates) => {
    console.log('Updating service:', id, updates)
    
    const { data, error } = await supabase
      .from('services')
      .update(updates)
      .eq('id', id)
      .select()
    
    if (error) {
      console.error('Error updating service:', error)
      alert('Error updating service: ' + error.message)
    } else {
      console.log('Service updated successfully:', data)
      setEditingService(null)
      fetchServices()
    }
  }

  const deleteService = async (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      console.log('Deleting service:', id)
      
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id)
      
      if (error) {
        console.error('Error deleting service:', error)
        alert('Error deleting service: ' + error.message)
      } else {
        console.log('Service deleted successfully')
        fetchServices()
      }
    }
  }

  const updateBookingStatus = async (id, status) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)
    
    if (!error) fetchBookings()
  }

  const deleteBooking = async (id) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id)
      
      if (!error) fetchBookings()
    }
  }

  if (!user) return <div className="min-h-screen bg-shadow-dark flex items-center justify-center">
    <div className="text-white text-xl">Access Denied</div>
  </div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-shadow-dark via-gray-900 to-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fox-orange via-yellow-400 to-red-500 bg-clip-text text-transparent">OWNER DASHBOARD</h1>
          <div className="text-right">
            <p className="text-gray-400">Welcome back, Owner</p>
            <p className="text-fox-orange font-semibold">{user?.email}</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'overview' 
                ? 'bg-gradient-to-r from-fox-orange to-orange-600 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'bookings' 
                ? 'bg-gradient-to-r from-fox-orange to-orange-600 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            📝 Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'services' 
                ? 'bg-gradient-to-r from-fox-orange to-orange-600 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            ⚔️ Services ({services.length})
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200">Total Bookings</p>
                    <p className="text-3xl font-bold">{stats.total}</p>
                  </div>
                  <div className="text-4xl opacity-80">📊</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-200">Pending</p>
                    <p className="text-3xl font-bold">{stats.pending}</p>
                  </div>
                  <div className="text-4xl opacity-80">⏳</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-200">Confirmed</p>
                    <p className="text-3xl font-bold">{stats.confirmed}</p>
                  </div>
                  <div className="text-4xl opacity-80">✅</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-200">Cancelled</p>
                    <p className="text-3xl font-bold">{stats.cancelled}</p>
                  </div>
                  <div className="text-4xl opacity-80">❌</div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Recent Bookings</h2>
              <div className="space-y-4">
                {bookings.slice(0, 5).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-white font-semibold">{booking.name}</p>
                      <p className="text-gray-400 text-sm">{booking.service} - {booking.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === 'confirmed' ? 'bg-green-600 text-white' :
                      booking.status === 'cancelled' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-700">
              <h2 className="text-2xl font-bold text-white">Booking Management</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-fox-orange">Name</th>
                    <th className="px-6 py-3 text-left text-fox-orange">Phone</th>
                    <th className="px-6 py-3 text-left text-fox-orange">Service</th>
                    <th className="px-6 py-3 text-left text-fox-orange">Date</th>
                    <th className="px-6 py-3 text-left text-fox-orange">Status</th>
                    <th className="px-6 py-3 text-left text-fox-orange">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-700">
                      <td className="px-6 py-4 text-white">{booking.name}</td>
                      <td className="px-6 py-4 text-white">{booking.phone}</td>
                      <td className="px-6 py-4 text-white">{booking.service}</td>
                      <td className="px-6 py-4 text-white">{booking.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-sm ${
                          booking.status === 'confirmed' ? 'bg-green-600' :
                          booking.status === 'cancelled' ? 'bg-red-600' : 'bg-yellow-600'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <select
                            value={booking.status}
                            onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                            className="bg-gray-700 text-white px-2 py-1 rounded"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <button
                            onClick={() => deleteBooking(booking.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                            title="Delete Booking"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div>
            {/* Add Service Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-8 border border-fox-orange/20">
              <h2 className="text-3xl font-bold text-fox-orange mb-6">➕ Add New Service</h2>
              <form onSubmit={addService} className="grid md:grid-cols-4 gap-6">
                <input
                  type="text"
                  placeholder="Service Name"
                  value={newService.name}
                  onChange={(e) => setNewService({...newService, name: e.target.value})}
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Price (e.g., $200/day)"
                  value={newService.price}
                  onChange={(e) => setNewService({...newService, price: e.target.value})}
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-fox-orange to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  ➕ Add Service
                </button>
              </form>
            </div>

            {/* Services List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-fox-orange/20 hover:border-fox-orange/50 transition-all">
                  {editingService === service.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={service.name}
                        onChange={(e) => setServices(services.map(s => 
                          s.id === service.id ? {...s, name: e.target.value} : s
                        ))}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
                      />
                      <input
                        type="text"
                        value={service.price}
                        onChange={(e) => setServices(services.map(s => 
                          s.id === service.id ? {...s, price: e.target.value} : s
                        ))}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
                      />
                      <textarea
                        value={service.description}
                        onChange={(e) => setServices(services.map(s => 
                          s.id === service.id ? {...s, description: e.target.value} : s
                        ))}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
                        rows="3"
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={() => updateService(service.id, {
                            name: service.name,
                            price: service.price,
                            description: service.description
                          })}
                          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all"
                        >
                          ✅ Save
                        </button>
                        <button
                          onClick={() => setEditingService(null)}
                          className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all"
                        >
                          ❌ Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-4xl mb-4">
                        {service.name.includes('Personal') ? '🛡️' :
                         service.name.includes('Event') ? '🎯' :
                         service.name.includes('Property') ? '🏢' :
                         service.name.includes('Transport') ? '🚗' : '⚔️'}
                      </div>
                      <h3 className="text-2xl font-bold text-fox-orange mb-3">{service.name}</h3>
                      <p className="text-security-blue text-xl font-bold mb-3">{service.price}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setEditingService(service.id)}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => deleteService(service.id)}
                          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}