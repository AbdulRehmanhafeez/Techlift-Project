import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
     <BrowserRouter>
  
      <div className='container'>
      <Header/>
    
  
<Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/about" element={<About/>}/>


  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>


</Routes>
      </div>

      <ToastContainer />
     <Footer/>

      </BrowserRouter>  
        </>
  )
}

export default App
