// 

import { useState } from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminSignup from './Component/Login/AdminSignup'
import AdminLogin from './Component/Login/AdminLogin'
// import Login from './Component/Login/Login'
import Signup from './Component/Login/Signup'
import Teams from './Component/Teams/Teams'
import Cskteam from './Component/Teams/Cskteam'
import Miteam from './Component/Teams/Miteam'
import Dcteam from './Component/Teams/Dcteam'
import Gteam from './Component/Teams/Gteam'
import Kkrteam from './Component/Teams/Kkrteam'
import Lsgteam from './Component/Teams/Lsgteam'
import Pkteam from './Component/Teams/Pkteam'
import Rrteam from './Component/Teams/Rrteam'
import Rcbteam from './Component/Teams/Rcbteam'
import Shteam from './Component/Teams/Shteam'
import Search from './Component/Home/Search/Search'
import News from './Component/News/News'
import Videos from './Component/Home/Videos/Video'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AdminSignup' element={<AdminSignup />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/Signup' element={<Signup  />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/Teams' element={<Teams />} />
          <Route path='/Csk' element={<Cskteam />} />
          <Route path='/Mi' element={<Miteam />} />
          <Route path='/Dc' element={<Dcteam/>} />
          <Route path='/Gt' element={<Gteam/>} />
          <Route path='/Kkr' element={<Kkrteam/>} />
          <Route path='/Lsg' element={<Lsgteam/>} />
          <Route path='/pk' element={<Pkteam/>} />
          <Route path='/Rr' element={<Rrteam/>} />
          <Route path='/Rcb' element={<Rcbteam/>} />
          <Route path='/sh' element={<Shteam/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/News' element={<News/>} />
          <Route path='/video' element={<Videos/>} />




        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
