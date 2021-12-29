import React from 'react'
import "./Slider.css"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <div className="ImageSlider">
            <Carousel>
            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://media.istockphoto.com/photos/dallas-at-dusk-picture-id522580445?b=1&k=20&m=522580445&s=170667a&w=0&h=OxztE0otc9tFoQ2UZNPB5-NzgCra8oGLp0qVjwE-7Bk="
                
                height="300" width="1200" 
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>DALLAS AMIGOS</h3>
                <p>React / Redux</p>
                
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://media.istockphoto.com/photos/elegant-shopping-mall-picture-id182408547?b=1&k=20&m=182408547&s=170667a&w=0&h=dxcQDv7oIlcVOcLBFbduw78perQh1QOHFw9ZhN6Vgfg="
                height="300" width="1200"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Food Court Online</h3>
                <p>Vanilla Javascript</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://images.unsplash.com/file-1635810583070-cc3f45744c3fimage"
                height="300" width="1200"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>MY PHOTOS</h3>
                <p>Ruby on Rails </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG8lMjBsaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                height="300" width="1200"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>PHOTOS WEBSITE</h3>
                <p>Sinatra </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                height="300" width="1200"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>QUOTES</h3>
                <p>CLI </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
    )
}

export default Slider
