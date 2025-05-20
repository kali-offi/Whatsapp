import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcomechat from '../welcomePage/Welcomechat'
import MessageView from '../Message/MessageView'
import Login from '../LoginPage/LoginPage'

const Display = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcomechat />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact/:id' element={<MessageView />} />
      </Routes>
    </>
  )
}

export default Display
