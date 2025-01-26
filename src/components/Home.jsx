import React from 'react'
import Testimonials from './Home/Testimonials'
import Hero from './Home/Hero'
import Specials from './Home/Specials'
import About from './Home/About'
import Footer from './Layout/Footer';
import Header from './Layout/Header';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
