import React from 'react'
import './Style.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function WhatToWatch() {
    const movies = useSelector((state) => state.movies)
    return (
        <div className='container text-white mt-4 watch-sec'>
            <h3 className='text-warning'>What to watch</h3>
            <h4 className='mt-4'>Top picks <i><MdOutlineKeyboardArrowRight /></i></h4>
            <p>TV shows and movies just for you</p>
            <a href="/">Sign In</a>
            <div className="movie-cards">

                {movies.map((movie) => {
                    return (
                        <Link key={movie.id} className='link-style' to={`/details/${movie.id}`}>
                            <div className="movie-card">
                                <img src={movie.imageLink} alt="" />
                                <div className="ps-2">
                                    <p> <i className='text-warning pe-2'><FaStar /></i>{movie.movieRate} <i className='ps-3 text-primary'><FaRegStar /></i></p>
                                    <h6>{movie.title}</h6>
                                    <button className='btn-1'>Watch options</button> <br />
                                    <button className='btn-2 mt-2'> <i><FaPlay /></i> Trailer</button>
                                    <button className='rounded-circle btn-3'><i className='fs-5'><IoMdInformationCircleOutline /></i></button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Outlet />
        </div>
    )
}

export default WhatToWatch
