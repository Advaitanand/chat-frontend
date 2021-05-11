import React from 'react'
import img from '../../assets/images/working-girl.png'
import { Link } from 'react-router-dom'

import './homepage.scss'

const Homepage = () => {

    return (
        <div className='main-container'>
            <div id='navbar' className='card-shadow'>
                <h2>STATE OF MIND.</h2>
                <div id='menu'>
                    <div><p><Link to='/login'>Chat</Link></p></div>
                    <div><p><a href=''>About Us</a></p></div>
                    <div><p id='reg-btn'><Link to='/register'>Register</Link></p></div>
                </div>
            </div>
            <div id='main-body'>
                <div id='headings'>
                    <h1 id='h1'>Welcome to State of Mind.</h1>
                    <h4 id='h4'>The mental Health Counselling System.</h4>
                    <div><p id='reg-btn'><Link to='/login'>Login</Link></p></div>
                </div>
                <div id='image'>
                    <img src={img} alt="Logo" />
                </div>
            </div>

        </div>
    );
}

export default Homepage