import UserContextProvider from './context/UseContextProvider'
// import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <UserContextProvider>
        <div className='hero! dark:bg-gray-700'>
          <Navbar />
          <Main />
          <Footer />
        </div >

      </UserContextProvider>



    </>
  )
}

export default App
