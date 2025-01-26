import React from 'react'
import ProfileImg from '../assets/profile-icon-9.png'
import './css/Testimonials.css'
export default function Testimonials() {
  return (
    <section className='testimonials'>
      <h1>Testimonials</h1>
      <div className="cards-container">
        <div className="card">
          <p>Rating</p>
          <img src={ProfileImg}/>
        </div>
        <div className="card">
          <p>Rating</p>
          <img src={ProfileImg}/>
        </div>
        <div className="card">
          <p>Rating</p>
          <img src={ProfileImg}/>
        </div>
        <div className="card">
          <p>Rating</p>
          <img src={ProfileImg}/>
        </div>
      </div>
    </section>
  )
}
