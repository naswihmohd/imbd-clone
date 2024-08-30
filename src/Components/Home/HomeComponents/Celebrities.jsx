import React from 'react'
import './Style.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function Celebrities() {
    const celebrities = useSelector((state) => state.celebrities)
    return (
        <div className='container text-white celebrities-sec mt-4'>
            <h4 >Most Popular Celebrities <i><MdOutlineKeyboardArrowRight /></i></h4>
            <div className="profiles">
                {celebrities.map((celebrity) => {
                    return (
                        <Link key={celebrity.id} className='link-style' to={`/celebrity/${celebrity.id}`}>
                            <div className="pro-card" >
                                <img src={celebrity.photo} alt="" />
                                <p>{celebrity.age}</p>
                                <h1>{celebrity.name}</h1>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Outlet />
        </div>
    )
}

export default Celebrities
