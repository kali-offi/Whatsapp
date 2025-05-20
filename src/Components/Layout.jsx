import React from 'react'
import Useismobile from './Others/Useismobile'
import { Route, Routes, useLocation } from 'react-router-dom'
import ChatBox from './Chat/ChatBox'
import Welcomechat from './welcomePage/Welcomechat'
import MessageView from './Message/MessageView'

const Layout = () => {
  const location = useLocation()
  const isMobile = Useismobile()
  const isChatRoute = location.pathname.startsWith('/contact/')

  const isLoginPage = location.pathname === '/login';



  return (
    <>
    
      <section className=''>
        <div className="d-lg-flex  d-md-flex">
          <div className={` col-12 col-md-4 ${!isLoginPage && isMobile && isChatRoute ? 'd-none' : ''}`}>
            <ChatBox />
          </div>
          <div className={`col-12 col-md-8 ${isMobile && !isChatRoute ? 'd-none' : ''}`}>
            <Routes>
              <Route path='/' element={<Welcomechat />} />
              <Route path='/contact/:id' element={<MessageView />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
