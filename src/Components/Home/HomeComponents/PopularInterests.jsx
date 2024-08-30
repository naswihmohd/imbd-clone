import React from 'react'
import './Style.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function PopularInterests() {
    return (
        <div className='container pi-sec text-white mt-5'>
            <h4 className='mt-4'>Popular interests <i><MdOutlineKeyboardArrowRight /></i></h4>
            <div className="pop-intrest-cards">
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODc1Nl5BMl5BanBnXkFtZTcwNTg4OTY3Nw@@._V1_QL75_UX3072_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Superhero</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjIzMjE3MTI1NF5BMl5BanBnXkFtZTgwNzE3MTgyNDM@._V1_QL75_UX3072_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Coming-of-Age</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BZTQ1MmFmYmUtNWI4YS00YjJhLTk0YzgtZGM4ODQ4N2ZkYTAzXkEyXkFqcGc@._V1_QL75_UX2665.5_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Slasher Horror</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTgyODQ2OTkyOV5BMl5BanBnXkFtZTgwNDM3MjI0NDE@._V1_QL75_UX3072_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Steamy Romance</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTc3Yzg0ZGItMzdmMS00OTVkLWE0NTgtM2VlMjUzYWIwNmY3XkEyXkFqcGc@._V1_QL75_UX1620_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Sitcom</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BZTQ1MmFmYmUtNWI4YS00YjJhLTk0YzgtZGM4ODQ4N2ZkYTAzXkEyXkFqcGc@._V1_QL75_UX2665.5_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Slasher Horror</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTgyODQ2OTkyOV5BMl5BanBnXkFtZTgwNDM3MjI0NDE@._V1_QL75_UX3072_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Steamy Romance</p>
                </div>
                <div className="pop-intrest-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTc3Yzg0ZGItMzdmMS00OTVkLWE0NTgtM2VlMjUzYWIwNmY3XkEyXkFqcGc@._V1_QL75_UX1620_.jpg" alt="" />
                    <p className='ps-2 pt-2'>Sitcom</p>
                </div>
            </div>
        </div>
    )
}

export default PopularInterests
