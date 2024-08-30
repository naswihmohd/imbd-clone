import React from 'react'
import './Style.css'
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Outlet ,Link } from 'react-router-dom';

function ComingSoon() {
    const upcomingMovies = useSelector((state) => state.upcomingMovies)
    return (
        <div className='container text-white mt-5 Ev-sec'>
            <h4 className='mt-4'>Coming soon to theaters</h4>
            <p>Trailers for upcoming releases</p>

            <div className="ev-cards">
                {upcomingMovies.map((movie) => {
                    return (
                        <Link key={movie.id} to={`/video/${'upcoming'}/${movie.id}`}>
                            <div className="ev-card" >
                                <img src={movie.imageLink} alt="" />
                                <div className="row">
                                    <div className="col-2 save">
                                        <i><BsBookmarkPlusFill /></i>
                                    </div>
                                    <div className="col-10">
                                        <p>{movie.releaseDate}</p>
                                        <p className='text-white'>{movie.title} - Official Trailer </p>
                                        <p ><i><BiLike /></i> {movie.like}  <i><FcLike /></i> {movie.heart}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Outlet/>
        </div>
    )
}

export default ComingSoon
