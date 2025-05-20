import React from 'react'
import './welcomechat.css'
import msg from '../../assets/Images/msg.jpeg'

const Welcomechat = () => {
  return (
    <>
      <section  className='view-size  welcome-body d-flex flex-column justify-content-center align-items-center'>
        <img style={{height:'200px'}}  className='img-fluid' src={msg} alt="" />
        <div className="contents mt-4 text-center">
          <h4 className=''>Whatsapp Web Clone</h4>
          <p className='intro_paray'>Send and receive messages without keeping your phone online <br />
            Use Whatsapp on up to 4 Linked devices and 1 phone at the once time
          </p>
        </div>
      </section>
    </>
  )
}

export default Welcomechat
