import React from 'react'
import './CSS/Login.css'

function Login() {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Name' />
          <input type="emsil" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="login-login">Already Have an account ? <span> Login Here</span></p>
        <div className="login-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing ,i agree to the terms of usse & privacy policy</p>
        </div>

      </div>

    </div>
  )
}

export default Login