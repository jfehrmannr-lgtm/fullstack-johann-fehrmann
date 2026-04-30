import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from '../components/Card/Card'

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default React.memo(PublicRoutes)