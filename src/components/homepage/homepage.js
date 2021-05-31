import React from 'react'
import img1 from '../../assets/images/working-girl.png'
import img2 from '../../assets/images/office.png'
import { Link } from 'react-router-dom'

import './homepage.scss'

const Homepage = () => {

    return (
        <div className='main-container'>
            <div id='navbar' className='card-shadow'>
                <h2>STATE OF MIND.</h2>
                <div id='menu'>
                    <div><p><Link to='/login'>Chat</Link></p></div>
                    <div><p><a href='#intro-body'>About Us</a></p></div>
                    <div><p id='reg-btn'><Link to='/register'>Register</Link></p></div>
                </div>
            </div>
            <div id='main-body'>
                <div id='headings'>
                    <h1 id='h1'>Welcome to State of Mind.</h1>
                    <h4 id='h4'>The mental Health Counselling System.</h4>
                    <h4 id='h4'>Login for using the chat system.</h4>
                    <div><p id='reg-btn'><Link to='/login'>Login</Link></p></div>
                </div>
                <div id='image1'>
                    <img src={img1} alt="Logo" />
                </div>
            </div>
            <div id='intro-body'>
                <div id='headings'>
                    <h2 id='h2'>The best Mental Health Counselling from the best Therapists</h2>
                    
                    <p className="p">We at STATE OF MIND care about our patients and keep their information safe, and make sure they get the best treatment from the best therapists in the country.</p><br></br><br></br>

                    <p className="p1">We make sure that the STATE OF MIND of our clients is at their best state, and make sure they get good consultation from the therapists thorugh our online chatting system between the doctors and the clients.</p><br></br>

                </div>
                <div id='image2'>
                    <img src={img2} alt="Logo" />
                </div>
            </div>
            <div id="footer">
                <div id='headings'>
                    <h2 id='h2'>We can help you overcome.</h2>
                    <h2 id='h21'>Your mental health is important.</h2>
                    
                </div>
                
                <div id="copyright">
                <h1>Copyright ©  2021  STATE OF MIND</h1>
                </div>

                <div id="developers">
                <h2>Developers :</h2>
                <h2>Debodyuti Biswas <br></br>
                    Advait Anand<br></br>
                    Ankit Mishra <br></br>
                </h2>
                </div>
                
            </div>
        </div>
    );
}

export default Homepage