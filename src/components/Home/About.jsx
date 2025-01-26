import React from 'react'
import AboutImg1 from '../assets/restaurant chef B.jpg'
import AboutImg2 from '../assets/restaurant.jpg'
import './css/About.css'


export default function About() {
  return (
    <section className='about'>
      <div className='about-intro'>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo consectetur sit eos, explicabo.</p>
      </div>
      <img src={AboutImg1} className='img1'/>
    </section>
  )
}
