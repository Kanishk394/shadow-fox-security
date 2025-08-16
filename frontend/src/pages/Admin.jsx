import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Admin() {
  const [bookings, setBookings] = useState([])
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    checkUser()
    if (user) fetchBookings()
  }, [user])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (data) setBookings(data)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) {
      alert('Login failed: ' + error.message)
    } else {
      const { data: { user } } = await supabase.auth.getUser()
      if (user && user.email === 'infoshadowforce777@gmail.com') {
        window.location.href = '/dashboard'
      } else {
        checkUser()
      }
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setBookings([])
  }

  const updateStatus = async (id, status) => {
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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-shadow-dark via-gray-900 to-black">
        <form onSubmit={handleLogin} className="bg-gray-800/90 backdrop-blur-sm p-10 rounded-xl w-96 border border-fox-orange/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🦊</div>
            <h2 className="text-3xl font-bold text-fox-orange mb-2">ADMIN ACCESS</h2>
            <p className="text-gray-400">Shadow Force Security</p>
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-fox-orange focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-fox-orange to-orange-600 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
          >
            {loading ? 'ACCESSING...' : '🔒 ACCESS DASHBOARD'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-fox-orange">Admin Dashboard</h1>
          <div className="flex gap-4">
            {user.email === 'infoshadowforce777@gmail.com' && (
              <Link
                to="/dashboard"
                className="bg-fox-orange text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Owner Dashboard
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg overflow-hidden">
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
                        onChange={(e) => updateStatus(booking.id, e.target.value)}
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
    </div>
  )
}