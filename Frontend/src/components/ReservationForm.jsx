import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { backendURL } from '../App'

function ReservationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const payload = { name, email, phone, date, time, guests }
      const response = await axios.post(`${backendURL}/api/reservation/create`, payload)

      if (response.data && response.data.success) {
        toast.success('Reservation created')
        setName('')
        setEmail('')
        setPhone('')
        setDate('')
        setTime('')
        setGuests(1)
      } else {
        toast.error(response.data.message || 'Failed to create reservation')
      }
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.message || err.message || 'Reservation failed')
    }
  }

  function timeSlots() {
    const slots = []
    for (let hour = 9; hour < 21; hour++) {
      const starthour = hour % 12 === 0 ? 12 : hour % 12
      const startPeriod = hour < 12 ? 'am' : 'pm'
      const endhour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12
      const endperiod = hour + 1 < 12 ? 'am' : 'pm'

      slots.push(`${starthour}:00 ${startPeriod} - ${endhour}:00 ${endperiod}`)
    }
    return slots
  }

  return (
    <div className="min-h-screen bg p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <form onSubmit={onSubmitHandler} className="md:col-span-2 p-8 shadow-md bg-slate-900 rounded-xl">
          <h2 className="text-xl font-semibold text-amber-500 uppercase tracking-wider">Online reservation</h2>
          <h1 className="text-3xl font-bold mb-4">
            Dine with us - <span>Online Reservation</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="name">Full name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="full name" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" required />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email">Email address</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@gmail.com" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" required />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="phone">Contact no</label>
              <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder='+XX XXXXXXXXXX' className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" required />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="date">Reservation Date</label>
              <input id="date" value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" required />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="time">Time of Reservation</label>
              <select id="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" required>
                <option value="">Select time</option>
                {timeSlots().map((slot, index) => (
                  <option value={slot} key={index}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="guests">Number of guests</label>
              <select id="guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300">
                {Array.from({ length: 10 }, (_, i) => (
                  <option value={i + 1} key={i + 1}>
                    {i + 1} guests
                  </option>
                ))}
              </select>
            </div>
            <button type='submit' className="w-full p-3 mt-4 bg-amber-500 text-white hover:bg-amber-600">
              Book a table
            </button>
          </div>
        </form>
        <div className="bg3 text-gray-300 p-8 shadow-md space-y-10 text-center rounded-xl">
          <div>
            <h3 className="text-3xl font-bold">Address</h3>
            <p>Kadavathu(h) njayappilly(po) thattekadu</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Call us</h3>
            <p>+91 9207505581</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Open time</h3>
            <p>MON - FRI 9.30AM - 10.00 PM</p>
            <p>SAT - SUN 9.00AM - 11.00 PM</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">Stay Connected</h3>
            <div className="flex justify-center gap-4">
              <FaFacebook className="text-4xl text-white" />
              <FaTwitter className="text-4xl text-white" />
              <FaInstagram className="text-4xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm
