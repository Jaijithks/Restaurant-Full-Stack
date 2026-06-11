import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Menu from './components/Menu'
import MenuContextProvider from './Context/MenuContext'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify'

export const backendURL = "http://localhost:4000"


function App() {
  return (
    <div>
      <ToastContainer />
      <MenuContextProvider>
        <Hero />
        <Service />
        <Menu />
        <ReservationForm />
        <Footer />
      </MenuContextProvider>
    </div>
  )
}

export default App
