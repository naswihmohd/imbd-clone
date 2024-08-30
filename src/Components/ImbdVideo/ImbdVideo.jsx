import React from 'react'
import Navbar from '../Home/HomeComponents/Navbar';
import './Style2.css'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ImbdVideo() {
  const { id } = useParams()
  const { page } = useParams()

  const heroMovies = useSelector((state) => state.heroMovie)
  const featuredVideos = useSelector((state) => state.featuredVideos)
  const upcomingMovies = useSelector((state) => state.upcomingMovies)
  const entertainment = useSelector((state) => state.entertainment)

  var movie

  if (page === 'hero') {
    movie = heroMovies.find((video) => video.id == id)
  } else if (page === 'today') {
    movie = featuredVideos.find((video) => video.id == id)
  } else if (page === 'upcoming') {
    movie = upcomingMovies.find((video) => video.id == id)
  } else if (page === 'entertainment') {
    movie = entertainment.find((video) => video.id == id)
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4 imbd-vdo text-white">
        <div className="row">
          <div className="col-8">
            <iframe width="750" height="440" src={movie.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="col-4">
            <div className="row poster">
              <div className="col-4 mb-4">
                <img src={movie.moviePoster} alt="" />
              </div>
              <div className="col-8">
                <h1>{movie.title}</h1>
                <p className='fs-8'>{movie.genre}</p>
              </div>
              <hr />
              <h5>{movie.videoTitle}</h5>
              <p>{movie.videoDescription}</p>
            </div>
          </div>
        </div>
        <div className="reactions">
          <i className='fs-4'><BiLike /></i> <p>{movie.likes}</p>
          <i className='fs-4 ps-4'><BiDislike /></i><p>1</p>
        </div>
      </div>
    </div>
  )
}

export default ImbdVideo
