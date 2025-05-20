import React, { useEffect, useState } from 'react'

const Useismobile = () => {
    const[isMobile,setIsmobile]=useState(window.innerWidth<768)
    useEffect(()=>{
        const handleResize=()=>{
            setIsmobile(window.innerWidth<768)
        }
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[])
  return isMobile;
}

export default Useismobile
