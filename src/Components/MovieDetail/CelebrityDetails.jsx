import React from 'react'
import Navbar from '../Home/HomeComponents/Navbar';
import './Style1.css'
import { BiSolidVideos } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CelebrityDetails() {
    const {id}=useParams()
    const celebrities=useSelector((state)=>state.celebrities)
    const celebrity=celebrities.find((celebrity)=>celebrity.id==id)
    return (
        <div>
            <Navbar />
            <div className="container hero-sec mt-5 text-white">
                <h1 >{celebrity.name}</h1>
                <p className='text-danger'> {celebrity.profession} </p>
                <div className="row">
                    <div className="col-3">
                        <img className='m-poster' src={celebrity.photo} alt="" />
                    </div>
                    <div className="col-7">
                        <iframe width="660" height="405" src={celebrity.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        <p className='text-secondary'>{celebrity.about}</p>
                        <hr />
                        <p><b>IMBD<span className='text-info'>Pro</span></b> - <a href="">See production info at IMDbPro</a></p>
                    </div>
                    <div className="col-4 text-center">
                        <h6 className='pt-4 pb-4'>Born {celebrity.birthday} </h6>
                        <button className='add-btn mb-3'>Add to watch list</button> <br />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebrityDetails
