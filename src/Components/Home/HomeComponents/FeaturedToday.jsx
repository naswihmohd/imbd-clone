import React from 'react'
import './Style.css'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

function FeaturedToday() {

    const featuredVideos = useSelector((state) => state.featuredVideos)

    return (
        <div>

            <div className='container text-white mt-5'>
                <h2 className='text-warning'>Featured today</h2>
                <div className="featured-cards">

                    {featuredVideos.map((video) => {
                        return (
                            <Link key={video.id} className='link-style' to={`/video/${"today"}/${video.id}`}>
                                <div className="img-card">
                                    <img src={video.imageLink} alt="" />
                                    <p>{video.description}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default FeaturedToday
