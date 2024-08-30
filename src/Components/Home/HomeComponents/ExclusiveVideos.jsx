import React from 'react'
import './Style.css'
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function ExclusiveVideos() {
    const entertainment = useSelector((state) => state.entertainment)
    return (
        <div className='container text-white mt-5 Ev-sec'>
            <h3 className='text-warning'>Exclusive videos</h3>
            <h4 className='mt-4'>IMDb Originals</h4>
            <p>Celebrity interviews, trending entertainment stories, and expert analysis</p>
            <div className="ev-cards">
                {entertainment.map((video) => {
                    return (
                        <Link key={video.id} className='link-style' to={`/video/${'entertainment'}/${video.id}`}>
                            <div className="ev-card" >
                                <img src={video.imageLink} alt="" />
                                <p className='text-white'>{video.title} </p>
                                <a href="#">Watch now</a>
                                <p ><i><BiLike /></i> {video.likes}  <i><FcLike /></i> {video.unlike}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Outlet />
        </div>
    )
}

export default ExclusiveVideos
