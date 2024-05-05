import React from 'react'
import './features.css'
import img1 from '../../assets/icons/features/quality.svg'
import img2 from '../../assets/icons/features/delivery.svg'
import img3 from '../../assets/icons/features//taste.svg'

const Features = () => {
  return (
    <section className='features container'>
        <div className="features__top">
            <h4>Features</h4>
            <h1>Food with a New Passion</h1>
        </div>
        <div className="features__bottom">
            <div className="features__bottom__card">
                <div className="features__bottom__card__img">
                <img src={img1} alt="" />
                </div>
                <h1>Quality Food</h1>
                <p>It can be a very secure path to earn good <br /> money and make you very successful <br /> creative entrepreneur.</p>
            </div>
            <div className="features__bottom__card">
            <div className="features__bottom__card__img">
                <img src={img2} alt="" />
                </div>
                <h1>Food Delivery</h1>
                <p>It can be a very secure path to earn good <br /> money and make you very successful <br /> creative entrepreneur.</p>
            </div>
            <div className="features__bottom__card">
            <div className="features__bottom__card__img">
                <img src={img3} alt="" />
                </div>
                <h1>Super Taste</h1>
                <p>It can be a very secure path to earn good <br /> money and make you very successful <br /> creative entrepreneur.</p>
            </div>
        </div>
    </section>
  )
}

export default Features