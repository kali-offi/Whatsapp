import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../../assets/Images/Avatar-10.jpeg'
import './chatbox.css'
import { Data } from '../../assets/Data'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../assets/firebase'
import { chatContext } from '../../App'



const ChatBox = () => {

  const { setSelectedId } = useContext(chatContext)

  ///Theme Logics

  const [theme, setTheme] = useState('dark');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    setDark((prev) => !prev)
  }

  ///Search Logics
  const [query, setQuery] = useState('');


  const navigate = useNavigate()

  const handleContactClick = (id) => {
    navigate(`/contact/${id}`)
    setSelectedId(id)
  }

  //scroll logics

  const scrollRef=useRef()
  useEffect(()=>{
    const container=scrollRef.current;
    let timeout;

    const handleScroll=()=>{
      container.classList.add('scrolling');
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
          container.classList.remove('scrolling');

        },1000)
    }
    container.addEventListener('scroll',handleScroll)
    return ()=> container.removeEventListener('scroll',handleScroll)
  },[])



  return (
    <>
      <header className='w-100'>
        <div ref={scrollRef} className='navee w-100 p-0 pe-1'>
          <div className="header">
            <div className="py-2 d-flex justify-content-between align-items-center">
              <div className="img ">
                <img src={Logo} className='rounded-5' style={{ height: '40px', width: '44px' }} alt="" />

              </div>
              <div className="options d-flex justify-content-between align-items-center">
                <div className="themes px-2">
                  <button className='border-0 bg-transparent' onClick={toggleTheme} >
                    {dark ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                  </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" fill="white" class="bi bi-sun-fill" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                      </svg>
                    }</button>
                </div>
                <div className="unread me-3 ms-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                  </svg>
                </div>
                <div className="moree" style={{ cursor: 'pointer' }} onClick={() => { logout() }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="input rounded-3 mt-1  d-flex align-items-center w-100 px-2 py-1 px-lg-4 py-lg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input  type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='w-100 mx-3   ps-2 ' placeholder='Search or start new chat' />
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div className="chats">
            <div className="chat-lists">
              {Data.filter(user => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((item) => (
                <div key={item.id} onClick={() => handleContactClick(item.id)} className="contacts py-2 d-flex justify-content-between align-items-center">
                  <div  className="img d-flex align-items-center" >
                    <img src={item.image} alt="" style={{ height: '40px', width: '40px' }} className='rounded-5 img-fluid' />
                    <div className="msg ms-2">
                      <h4 className='m-0 contact-name'>{item.name}</h4>
                      <p className='m-0 contact-desc'>{item.desc}</p>
                    </div>
                  </div>
                  <div className="date ">
                    <p className='date'>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
     
    </>
  )
}

export default ChatBox
