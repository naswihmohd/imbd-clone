import React from 'react'
import Navbar from '../Home/HomeComponents/Navbar';
import './Style1.css'
import { BiSolidVideos } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import Explore from '../Home/HomeComponents/Explore';
import Footer from '../Home/HomeComponents/Footer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MoviesDetail() {
    const {id}=useParams()
    const movies=useSelector((state)=>state.movies)
    const movie=movies.find((movie)=>movie.id==id)
    return (
        <div>
            <Navbar />
            <div className="container hero-sec mt-5 text-white">
                <h1 >{movie.title}</h1>
                <p>{movie.publishingDate} - <span className='text-warning'>{movie.duration}</span></p>
                <div className="row">
                    <div className="col-3">
                        <img className='m-poster' src={movie.imageLink} alt="" />
                    </div>
                    <div className="col-7">
                        <iframe width="660" height="405" src={movie.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="col-2 text-center">
                        <div className="vdo">
                            <i><BiSolidVideos /></i>
                            <h6>videos</h6>
                        </div>
                        <div className="pics mt-2">
                            <i><IoMdPhotos /></i>
                            <h6>Photos</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="tags pt-4">
                            <p className='text-info '>{movie.genre}</p>
                        </div>
                        <p>{movie.description}</p>
                        <hr />
                        <p>Director - <a href="">{movie.director}</a></p>
                        <hr />
                        <p>Writers - <a href="">{movie.writers}</a></p>
                        <hr />
                        <p>Stars - <a href="">{movie.stars}</a></p>
                        <hr />
                        <p><b>IMBD<span className='text-info'>Pro</span></b> - <a href="">See production info at IMDbPro</a></p>
                    </div>
                    <div className="col-4 text-center">
                        <p className='text-warning'>IN THEATERS</p>
                        <div className='ticket'><IoTicket /></div> <hr />
                        <button className='add-btn mb-3'>Add to watch list</button> <br />
                        <a href="">1.5K User reviews</a> <a href=""> 295 Critic reviews</a> <br /> <br />
                        <a href="">56 Metascore</a>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid bg-white">
                <div className="container pt-1">
                    <Explore/>
                </div>
            </div>
            <Footer/> */}
        </div>
    )
}

export default MoviesDetail
