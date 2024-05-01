import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Register'
import Login from './pages/Login'
import Psmsc from './SubCouncils/PSMSC'
import Ascpc from './SubCouncils/ASCPC'
import Hobby from './SubCouncils/Hobby'
import Cultural from './SubCouncils/Cultural'
import NSS from './SubCouncils/NSS'
import Photography from './SubCouncils/Photography'
import Literary from './SubCouncils/Literary'
import Yoga from './SubCouncils/Yoga'
import Sports from './SubCouncils/Sports'
import ContactForm from './pages/ContactForm'
import NotFound from './components/404'
import About from './pages/About'
import Notes from './pages/Notes'
import TimeCapsule from './components/Hero'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/PSMSC" element={<Psmsc />} />
        <Route path="/ASCPC" element={<Ascpc />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Hobby" element={<Hobby />} />
        <Route path="/Cultural" element={<Cultural />} />
        <Route path="/Literary" element={<Literary/>} />
        <Route path="/Yoga" element={<Yoga/>} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/NSS" element={<NSS/>} />
        <Route path="/Sports" element={<Sports/>} />
        <Route path="/Notes" element={<Notes/>} />
       
      </Routes>
    </BrowserRouter>
  )
}


export default App
