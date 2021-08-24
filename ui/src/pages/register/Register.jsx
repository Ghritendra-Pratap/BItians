import React from 'react'
import './register.css'
import { useRef  } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register = () => {
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const username = useRef()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password.current.value !== confirmPassword.current.value) {
            password.current.setCustomValidity('Password does not match') 
        }
        else {
            const user = {
                email: email.current.value,
                password: password.current.value,
                username: username.current.value,
            }
            try{
            await axios.post('/auth/register' , user)
            history.push('/auth/login')
            }catch(err){
                console.log(err)
            }
            }
        }

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">BItians</h3>
                    <span className="registerDesc">
                        Connect with Friends and the world around you on BItians
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                    <input type="text" placeholder="Username" ref = {username} className="registerInput" />
                        <input type="Email" placeholder="Email" ref= {email}className="registerInput" />
                        <input type="Password" placeholder="Password" ref = {password} className="registerInput" />
                        <input type="Password" placeholder="Confirm Password" ref = {confirmPassword} className="registerInput" />

                        <button onClick = {handleSubmit} className="registerButton">Signup</button>
                        <Link to='/auth/login'>
                         <button className="loginAccount">Login to Account</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
