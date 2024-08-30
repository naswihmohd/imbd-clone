import React from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FaRegCirclePlay } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom'

function Hero() {

    const heroMovie = useSelector((state) => state.heroMovie)
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-9">
                    <Carousel>
                        {heroMovie.map((movie) => {
                            return (
                                <Carousel.Item key={movie.id}>
                                    <img
                                        className="d-block w-100 rounded"
                                        src={movie.imageLink}
                                        alt=""
                                    />
                                    <Carousel.Caption>
                                        <Link className='link-style' to={`/video/${'hero'}/${movie.id}`}>
                                            <div className='hero-dis text-start'>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img src={movie.moviePoster} alt="" />
                                                    </div>
                                                    <div className="col-9 my-auto">
                                                        <h3>{movie.title}</h3>
                                                        <p>{movie.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
                <div className="col-lg-3 text-white">
                    <h5 className='my-4 text-warning'>Up Next</h5>

                    {heroMovie.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <Link className='link-style' to={`/video/${'hero'}/${movie.id}`}>
                                    <div className="up-next" key={movie.id}>
                                        <div className="row">
                                            <div className="col-5">
                                                <img src={movie.moviePoster} alt="" />
                                            </div>
                                            <div className="col-7">
                                                <i><FaRegCirclePlay /></i>
                                                <h3 className='pt-'> {movie.title} </h3>
                                                <p>{movie.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Outlet />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero
