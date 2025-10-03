import React from 'react'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Footer from './component/Footer'
import Product from './page/Product'
import Contact from './page/Contact'





const App = () => {
  return (
    <div>
      <nav>

      <Navbar/>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
       <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App