import React from 'react'
import Wooden_home from './pages/home/Wooden_home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop/shop'
import { Sign_in } from './pages/shop/Sign_in'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Wooden_home/>}></Route> */}
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/sign in' element={<Sign_in/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App