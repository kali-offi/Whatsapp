import React, { useContext, useEffect, useState } from 'react'
import './messageview.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '../..//assets/Data.js'
import send from '../../assets/Images/send-btn.png'
import Useismobile from '../Others/Useismobile'
import { chatContext } from '../../App'

const MessageView = () => {
  const { selected } = useContext(chatContext)

  ///Last seen
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const time = `${hour}:${minutes}`
  const Timee = hour >= 12 ? 'Am' : 'PM';

  ///Navigation
  const { id } = useParams()
  const Datas = Data[id]

  //Navigation
  const navigate = useNavigate()
  const navigateBackToChatList = () => {
    navigate('/')
  }
  const isMobile = Useismobile();
  const isChatRoute = location.pathname.startsWith('/contact/');

  ///chat Dynamically

  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});

  const handleSend = () => {
    if (!selectedContact || message.trim() === "") return;

    const newMessage = {
      text: message,
      timestamp: new Date().toLocaleTimeString(),
      fromMe: true,
    };

    const updatedHistory = {
      ...chatHistory,
      [selectedContact.id]: [
        ...(chatHistory[selectedContact.id] || []),
        newMessage,
      ],
    };

    setChatHistory(updatedHistory);
    setMessage("");
  };
  useEffect(() => {
    if (Datas) {
      setSelectedContact(Datas);
    }
  }, [Datas]);




  return (
    <>
      <section style={{ height: '100vh' }} className=" view d-lg-block ">
        <header className="message-header   ">
          <div className="py-2 container-fluid d-flex justify-content-between align-items-center">
            <div className="righty d-flex align-items-center">
              {isMobile && isChatRoute && (
                <button onClick={navigateBackToChatList} className="border-0 me-2 bg-transparent pe-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill='currentcolor' style={{ color: 'rgba(11, 113, 93, 0.95)' }} class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                </button>
              )} <div className="img d-flex align-items-center">
                <img src={Datas.image} className='rounded-5' style={{ height: '35px' }} alt="" />
              </div>


              <div className="details msg ms-2 ">
                <h4 className='m-0 contact-name'>{Datas.name}</h4>
                <p className='m-0'>Last seen {time} {Timee}</p>
              </div>
            </div>
            <div className="more d-flex align-items-center">
              <div className="vc me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className="call me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </div>
              <div className="moree">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </div>

            </div>
          </div>
        </header>
        <section className='new-message'>
          <div className="container-fluid">
            <span className='d-inline-block'>
              {selected?.messages.map((msg,index) => (
                <div key={msg.id} className="msg-receive my-2 py-2 px-3 d-flex  align-items-baseline">
                  <h6 className='m-0 chat-name'>{msg.text}</h6>
                  <p className='time ps-1 m-0'>{Data.date}</p>
                </div>
              ))}
            </span>
            {selectedContact && (chatHistory[selectedContact.id] || []).map((msg, index) => (
              <span className='d-flex justify-content-end align-items-baseline'>
                <div className="msg-back my-2 py-2 px-3 d-flex  align-items-baseline">
                  <h6 className='m-0'>{msg.text}</h6>
                  <p className='timestamp ps-1 m-0'>{msg.timestamp}</p>
                  <div className="check ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-check2-all" viewBox="0 0 16 16">
                      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                    </svg>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </section>
        <footer className="footer px-2 my-2 ">
          <div className="">
            <div className="img d-flex align-items-center w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
              </svg>
              <div className=" w-100 message-type border-0  ">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className='w-100 message-type border-0'
                />
              </div>
              <button className='ms-1 p-0 message-type border-0' onClick={handleSend} style={{ padding: "10px 20px" }}>
                <img src={send} alt="" style={{ height: '25px', width: '25px' }} />
              </button>
            </div>
          </div>
        </footer>

      </section>
    </>
  )
}

export default MessageView
