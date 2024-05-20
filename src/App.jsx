import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SignIn from './components/signIn/SignIn'
import Dashboard from './components/dashboard/Dashboard'

function App() {


  return (
   <Router>
    {/* <Navbar/> */}
    <Routes>

      <Route path='/' element={<SignIn/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/dashboard/upload' element={<Dashboard/>} />
      <Route path='/dashboard/invoice' element={<Dashboard/>} />
      <Route path='/dashboard/schedule' element={<Dashboard/>} />
      <Route path='/dashboard/calendar' element={<Dashboard/>} />


    </Routes>
      {/* <Footer/>  */}
   </Router>
  )
}

export default App
