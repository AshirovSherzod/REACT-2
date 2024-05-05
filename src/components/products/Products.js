import React from 'react'
import './products.css'
import { PRODUCTS } from '../../static'

let productsCard = PRODUCTS.map((item) => (

    <div className="products__card" key={item.id}>
        <div className="products__card__img">
            <img src={item.url} alt="" />
        </div>
        <div className="products__card__desc">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <p>${item.price}</p>
        </div>

    </div>
))

const Products = () => {
    return (
        <section className='products container'>
            <div className="products__top">
                <h4>Menu</h4>
                <h1>Food Full of treaty Love</h1>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls <br /> with Persons but also specialized equipment, Skills to manage Customers, </p>
            </div>
            <div className="products__bottom">
                {productsCard}
            </div>
        </section>
    )
}

export default Products