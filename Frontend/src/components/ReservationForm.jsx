import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function ReservationForm() {
  function timeSlots() {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const starthour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "am" : "pm";
      const endhour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endperiod = hour + 1 < 12 ? "am" : "pm";

      slots.push(`${starthour}:00 ${startPeriod} - ${endhour}:00 ${endperiod}`);
    }
    return slots;
  }

  return (
    <div className="min-h-screen bg p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <form action="" className="md:col-span-2 p-8 shadow-md bg-slate-900 rounded-xl">
          <h2 className="text-xl font-semibold text-amber-500 uppercase tracking-wider">Online reservation</h2>
          <h1 className="text-3xl font-bold mb-4">
            Dine with us - <span>Online Reservation</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="">Full name</label>
              <input type="text" placeholder="full name" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="">Email address</label>
              <input type="email" placeholder="you@gmail.com" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="">Contact no</label>
              <input type="tel" placeholder='+XX XXXXXXXXXX' className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="">Reservation Date</label>
              <input type="date" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="">Time of Reservation</label>
              <select name="" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300">
                <option value="">Select time</option>
                {timeSlots().map((slot, index) => (
                  <option value={slot} key={index}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="">Number of guests</label>
              <select name="" className="w-full p-3 mb-3 border bg-black text-white focus:ring focus:ring-gray-300">
                {Array.from({ length: 10 }, (_, i) => (
                  <option value={i + 1} key={i + 1}>
                    {i + 1} guests
                  </option>
                ))}
              </select>
            </div>
            <button className="w-full p-3 mt-4 bg-amber-500 text-white hover:bg-amber-600">
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
  );
}

export default ReservationForm