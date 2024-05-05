import React from 'react'
import './about.css'
import aboutImg  from '../../assets/images/about-img.png'

const About = () => {
    return (
        <section className='about container '>
            <div className="about__left">
                <img src={aboutImg} alt="" />
            </div>
            <div className="about__right">
                <h4>About US</h4>
                <h1>Food Stalls with Persons but  to <br />  Product marketing plane <br />catlogues etc to. </h1>
                <p>There are many things are needed to start the Fast Food Business. <br /> You need not only Just Food Stalls with Persons but also <br /> equipment  make your marketing plane Effective.</p>
                <button className='about__right__btn'>Read More</button>
            </div>
        </section>
    )
}

export default About