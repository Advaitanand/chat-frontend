import React, { useState } from 'react'
import loginImage from '../../assets/images/login.svg'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/auth'

import './Auth.scss'

const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('john.doe@gmail.com')
    const [password, setPassword] = useState('password')

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(login({ email, password }, history))
    }

    return (
        <div id='auth-container'>
        <div id='auth-card'>
          <div className='card-shadow2'>

            <div id='form-section'>
              <h1 className='mb-2'>Welcome to State of Mind.</h1>
              <form onSubmit={submitForm}>
                  <div className='input-field mb-1'>
                    <input
                      onChange={e => setEmail(e.target.value)} 
                      value={email}
                      required='required'
                      type='text'
                      placeholder='Email'/>
                  </div>
                  <div className='input-field mb-2'>
                    <input 
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      required='required'
                      type='password'
                      placeholder='Password'/>
                  </div>

                  <button>LOGIN</button>
                  <p>Don't have an account? <Link to='/register'>Register</Link></p>
              </form>
            </div>
          </div>
          
        </div>

      </div>
    );
}

export default Login