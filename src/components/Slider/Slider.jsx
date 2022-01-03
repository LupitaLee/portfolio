import React from 'react'
import "./Slider.css"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <div className="ImageSlider">
            <Carousel>
            <Carousel.Item>

            <a href='https://github.com/LupitaLee/dallas_amigos_frontend'>
            <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://media.istockphoto.com/photos/dallas-at-dusk-picture-id522580445?b=1&k=20&m=522580445&s=170667a&w=0&h=OxztE0otc9tFoQ2UZNPB5-NzgCra8oGLp0qVjwE-7Bk="
                
                height="300" width="1200" 
                alt="First slide"
                />
                                
                </a>
               
                <Carousel.Caption>
                <h3>DALLAS AMIGOS</h3>
                <p>React / Redux</p>
                
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>

            <a href='https://github.com/LupitaLee/portfolio'>
            <img className="ImageSlider-img"
                // className="d-block w-100"
                src="/lr.png"
                
                height="300" width="1200" 
                alt="First slide"
                />
                                
                </a>
               
                <Carousel.Caption>
                <h3>THIS PORTFOLIO WEBSITE</h3>
                <p>React / Github Pages</p>
                
                </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item>
                <a href="https://github.com/LupitaLee/FoodCourtOnline">
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://images.unsplash.com/photo-1593768128575-e41545e803d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                height="300" width="1200"
                alt="Second slide"
                />
                </a>
                <Carousel.Caption>
                <h3>Food Court Online</h3>
                <p>Vanilla Javascript</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <a href="https://github.com/LupitaLee/myphotos">
                <img className="ImageSlider-img"
                    // className="d-block w-100"
                    src="https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    height="300" width="1200"
                    alt="Third slide"
                    />
                </a>
               

                <Carousel.Caption>
                <h3>MY PHOTOS</h3>
                <p>Ruby on Rails </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <a href="https://github.com/LupitaLee/photos_website">
                    <img className="ImageSlider-img"
                    // className="d-block w-100"
                    src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG8lMjBsaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    height="300" width="1200"
                    alt="Third slide"
                    />
                </a>
                

                <Carousel.Caption>
                <h3>PHOTOS WEBSITE</h3>
                <p>Sinatra </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <a href="https://github.com/LupitaLee/quotes">
                <img className="ImageSlider-img"
                    // className="d-block w-100"
                    src="https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    height="300" width="1200"
                    alt="Third slide"
                    />    
                </a>
                

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
