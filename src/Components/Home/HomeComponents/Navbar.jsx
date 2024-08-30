import React, { useState } from 'react'
import './Style.css'
import { useSelector } from 'react-redux'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';

function Navbar() {
    const movies = useSelector((state) => state.movies)
    const [searchTerm, setSearchTerm] = useState('')
    const [mov, setmov] = useState([])
    const [isDropdownVisible, setDropdownVisible] = useState(false);


    const handldSearch = (event) => {
        const term = event.target.value
        setSearchTerm(term)
        if (term.length > 0) {
            const movie = movies.filter((movie) => movie.title.toUpperCase().includes(term.toUpperCase()) || movie.genre.toUpperCase().includes(term.toUpperCase()))
            setmov(movie)
            setDropdownVisible(true)
        } else {
            setDropdownVisible(false)
        }
        setSearchTerm('')
    }

    return (
        <div>
            <div className="nav-bar">
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="" /></li>
                <li className='itm'>Home</li>

                <NavDropdown show={isDropdownVisible} title={<li><FormControl onChange={handldSearch} type="text" placeholder='Search for Movies or Shows' /></li>}>
                    {mov.map((item) => {
                        return (
                            <NavDropdown.Item key={item.id} className='bg-dark' href="#action3">
                                <Link className='link-style' to={`/details/${item.id}`}>
                                    <div onClick={() => setDropdownVisible(false)} className='drop-elm text-white'>
                                        <div className="row">
                                            <div className="col-2">
                                                <img src={item.imageLink} alt="" />
                                            </div>
                                            <div className="col-10">
                                                <h6>{item.title}</h6>
                                                <p className='text-secondary'>{item.publishingDate} <br /> {item.genre}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </Link>
                            </NavDropdown.Item>
                        )
                    })}
                </NavDropdown>
                <div className='nav-buttons'>
                    <li><button>IMBd<span className='text-info'>Pro</span></button></li>
                    <li><button>Watchlist</button></li>
                    <li><button>Sign In</button></li>
                    <li><select name="" id="">
                        <option value="">EN</option>
                        <option value="">Arabic</option>
                    </select></li>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar
