import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Wooden_home from './pages/home/Wooden_home'
import Shop from './pages/shop/shop'

const App = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wooden_home/>}></Route>
         <Route path='/shop' element={<Shop/>}></Route>
        {/* <Route path='/sign in' element={<Sign_in/>}></Route>  */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App