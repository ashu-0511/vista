import React from 'react'
import "./Carousel.css"
import img1 from '../images/caro1.webp'
import img2 from '../images/caro2.webp'
import img3 from '../images/caro3.webp'



export default function Carousel() {
    return (
        <div className='container'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    )
}
