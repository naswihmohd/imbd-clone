import React from 'react'
import './Style.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function Fanfavorites() {
    const movies = useSelector((state) => state.movies)
    return (
        <div className='container text-white mt-5 watch-sec'>
            <h4 className='mt-4'>Fan favorites <i><MdOutlineKeyboardArrowRight /></i></h4>
            <div className="movie-cards">

                {movies.filter((movie) => movie.language === 'Malayalam').map((movie) => {
                    return (
                        <Link key={movie.id} className='link-style' to={`/details/${movie.id}`}>
                            <div className="movie-card">
                                <img src={movie.imageLink} alt="" />
                                <div className="ps-2">
                                    <p> <i className='text-warning pe-2'><FaStar /></i>7.1 <i className='ps-3 text-primary'><FaRegStar /></i></p>
                                    <h6> {movie.title}</h6>
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

export default Fanfavorites

