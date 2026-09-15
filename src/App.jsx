import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Test from './Pages/Test'
import Profile from './Pages/Profile'
import FlashCard from './Pages/FlashCard'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <div>
      <Header/>
      <main className='pt-15 '>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/test' element={<Test />} />
        <Route path='/flash' element={<FlashCard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </main>

      <Footer />
      
    </div>
  )
}

export default App