import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { backendURL } from '../App'

const Admintable = () => {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/reservation/view`)
        if (response.data.success) {
          setReservations(response.data.message || [])
        } else {
          setError(response.data.message || 'Unable to load reservations')
        }
      } catch (err) {
        console.error(err)
        setError(err.response?.data?.message || err.message || 'Error fetching reservations')
      } finally {
        setLoading(false)
      }
    }

    fetchReservation()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this reservation?')) {
      return
    }

    try {
      const response = await axios.post(`${backendURL}/api/reservation/delete/${id}`)
      if (response.data.success) {
        toast.success('Reservation deleted')
        setReservations((current) => current.filter((reservation) => reservation._id !== id))
      } else {
        toast.error(response.data.message || 'Unable to delete reservation')
      }
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.message || err.message || 'Delete failed')
    }
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Reservations</h1>

      {loading ? (
        <p>Loading reservations...</p>
      ) : error ? (
        <p className='text-red-600'>{error}</p>
      ) : reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full border-collapse border border-gray-200'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border px-3 py-2 text-left'>Name</th>
                <th className='border px-3 py-2 text-left'>Email</th>
                <th className='border px-3 py-2 text-left'>Phone</th>
                <th className='border px-3 py-2 text-left'>Date</th>
                <th className='border px-3 py-2 text-left'>Time</th>
                <th className='border px-3 py-2 text-left'>Guests</th>
                <th className='border px-3 py-2 text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation._id} className='even:bg-gray-50'>
                  <td className='border px-3 py-2'>{reservation.name}</td>
                  <td className='border px-3 py-2'>{reservation.email}</td>
                  <td className='border px-3 py-2'>{reservation.phone}</td>
                  <td className='border px-3 py-2'>{reservation.date}</td>
                  <td className='border px-3 py-2'>{reservation.time}</td>
                  <td className='border px-3 py-2'>{reservation.guests}</td>
                  <td className='border px-3 py-2'>
                    <button
                      onClick={() => handleDelete(reservation._id)}
                      className='px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Admintable
