import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login__container'>

        <h1 className="login__title">
            Login
        </h1>
        <div className="login__section">

            <form className="login__form">
                <input type="text" id='username' className="login__username" placeholder='Username'/>
                <div className="line"></div>
                 <br></br>
                <input type="password" id='password' className="login__password" placeholder='Password'/>
                <div className="line"></div>
                <button className="login">Sign in</button> 
            </form>

            <p className="description">
                    Or login with
            </p>

        <div className="social__container">

            <ul class="socials">
                <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <span><i class="uil uil-facebook-f"></i></span>
                </li>
                <li class="icon twitter">
                    <span class="tooltip">Twitter</span>
                    <span><i class="uil uil-twitter"></i></span>
                </li>
            </ul>
            </div>
            <div className="register__section">
            Not a member?
            <a href="/register" className="register"> register here</a>
            </div>
        </div>
    </div>
  )
}

export default Login