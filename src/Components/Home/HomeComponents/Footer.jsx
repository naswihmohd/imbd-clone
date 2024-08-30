import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Style.css'

function Footer() {
    return (
        <div className='container footer-sec text-white text-center mt-5'>
            <button>Sign in for more access</button> <br />
            <div className="foot-cards mt-4">
                <div className="foot-card p-3">
                    <h5 >Follow IMDb on social</h5>
                    <div className="social-links d-flex justify-content-around">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </div>
                <div className="foot-card">
                    <div className="row">
                        <div className="col-7 text-start ps-4 pt-4">
                            <h6 >Get the IMDb app <br />
                                For Android and iOS</h6>
                        </div>
                        <div className="col-5 pt-2">
                            <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/110322-qr-code-hmed-425p.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <li>Help</li>
                <li>Site Index</li>
                <li>IMDbPro</li>
                <li>Box Office Mojo</li>
                <li>License IMDb Data</li>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <li>Press Room</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Conditions of Use</li>
                <li>Privacy Policy</li>
                <li>Your Ads Privacy Choices</li>
            </div>
            <p className='pt-3 fs-6'>an amazon company</p>
            <p className='fst-italic copyright'>© created by Naswih_mohd__</p>
        </div>
    )
}

export default Footer
