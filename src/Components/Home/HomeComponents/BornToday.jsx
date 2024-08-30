import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Style.css'
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function BornToday() {
    const celebrities = useSelector((state) => state.celebrities)
    return (
        <div className='container text-white celebrities-sec mt-5'>
            <h4 >Born today <i><MdOutlineKeyboardArrowRight /></i></h4>
            <div className="profiles">

                {celebrities.map((celebrity) => {
                    return (
                        <Link key={celebrity.id} className='link-style' to={`/celebrity/${celebrity.id}`}>
                            <div className="pro-card" key={celebrity.id}>
                                <img src={celebrity.photo} alt="" />
                                <h1 className='pt-3'>{celebrity.name}</h1>
                                <p>{celebrity.age}</p>
                            </div>
                        </Link>
                    )
                })}

            </div>
            <Outlet />
        </div>
    )
}

export default BornToday
