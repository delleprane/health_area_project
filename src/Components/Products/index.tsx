
import Carousel from '../Carousel'
import './Products.css'

import data from "../../data.json"
import { Button } from '../Button';

export function Products() {
    const slides = data.Procedures.slides;
    const products = data.Procedures;

    return (
        <section id="procedimentos" className='products' >
            <h2>{products.title}</h2>
            <div className='product-container'>
                <Carousel slides={slides} />
            </div>
        </section>
    )
}