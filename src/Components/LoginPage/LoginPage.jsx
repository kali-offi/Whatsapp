import React, { useState } from 'react'
import { login, signup } from '../../assets/firebase';
import Loading from './Loading';
import './loginPage.css'

const Login = () => {
    const [signState, setSignState] = useState("Sign In")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const user_auth = async (event) => {
        event.preventDefault();
        setLoading(true)
        if (signState === "Sign In") {
            await login(email, password)
        } else {
            await signup(name, email, password)
        }
        setLoading(false)
    }


    return (
        <>
            {loading ? <div className="login-spinner">
                <Loading />
            </div> :
                <div className='login-bg d-flex justify-content-center align-items-center flex-column view-size' >
                    <h1 className='text-white mb-4'>{signState}</h1>
                    <form action="POST" className=''>
                        <div className="d-flex justify-content-center align-items-center flex-column ">
                            {signState === 'Sign Up' ?
                            <input type="text" value={name} onChange={(e) => {  setName(e.target.value) }} style={{ width: '300px' }} placeholder='Your Name' className='my-2  inputy  py-1 px-2' /> : <></>}
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ width: '300px' }} placeholder='Email' className='my-4 py-1 px-2   inputy' />
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ width: '300px' }} placeholder=' Password' className='my-2 inputy py-1 px-2 ' />
                            <button type='submit' variant='primary' className='signin my-2 px-4 py-1 rounded-5  border-0 shadow' onClick={user_auth}>{signState === "Sign In" ? "Sign In" : "Sign Up"}</button>

                        </div>
                       
                    </form>
                    <div className="mt-2 ">
                        {signState === 'Sign In' ? <p className='acc'style={{cursor:'pointer'}} onClick={(() => setSignState("Sign Up"))}>Create an New account </p> :
                            <p className='acc' style={{cursor:'pointer'}} onClick={(() => setSignState("Sign In"))}>Already have Account ?</p>
                        }
                    </div>
                </div >
            }
        </>
    )
}

export default Login