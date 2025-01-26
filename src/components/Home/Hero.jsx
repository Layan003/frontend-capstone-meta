import React from 'react'
import HeroImg from '../assets/lemon dessert.jpg'
import './css/Hero.css'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis delectus architecto minima qui atque non cumque. Perferendis suscipit maiores ad numquam recusandae praesentium sequi, reprehenderit mollitia excepturi dolorum expedita.</p>
        <Link to='/booking'>Reserve a Table</Link>
      </div>
    <img src={HeroImg}/>
    </section>
  )
}
