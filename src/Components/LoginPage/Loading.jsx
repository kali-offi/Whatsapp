import React from 'react'
import Spinner from '../../assets/Images/netflix_spinner.gif'

const Loading = () => {
  return (
    <>
      <section className='d-flex  justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: 'black' }}>
        <img src={Spinner} alt="" style={{ height: '50px', }} />
      </section>
    </>
  )
}

export default Loading
