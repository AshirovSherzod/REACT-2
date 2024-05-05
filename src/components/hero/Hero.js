import React from 'react'
import './hero.css'
import img from '../../assets/images/CSmJnTefxM 1.png'

const Hero = () => {
  return (
    <section className='hero container row'>
        <div className="hero__left">
            <h1>Making time a good time <br /> by making food the good <br /> food.</h1>
            <p>There are many things are needed to start the Fast Food Business. You need <br /> not only Just Food Stalls with Persons but also specialized equipment,</p>
            <div className="hero__left__btns">
                <button>Order Now</button>
                <button>Food Details</button>
            </div>
        </div>
        <div className="hero__right">
            <img src={img} alt="" />
        </div>
    </section>
  )
}

export default Hero