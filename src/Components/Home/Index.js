import React from 'react'
import Navbar from './HomeComponents/Navbar'
import Hero from './HomeComponents/Hero'
import FeaturedToday from './HomeComponents/FeaturedToday'
import Celebrities from './HomeComponents/Celebrities'
import WhatToWatch from './HomeComponents/WhatToWatch'
import TopMovie from './HomeComponents/TopMovie'
import Fanfavorites from './HomeComponents/Fanfavorites'
import PopularInterests from './HomeComponents/PopularInterests'
import ExclusiveVideos from './HomeComponents/ExclusiveVideos'
import Explore from './HomeComponents/Explore'
import ComingSoon from './HomeComponents/ComingSoon'
import BornToday from './HomeComponents/BornToday'
import Footer from './HomeComponents/Footer'



function Index() {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturedToday />
            <Celebrities />
            <WhatToWatch />
            <TopMovie />
            <Fanfavorites />
            <PopularInterests />
            <ExclusiveVideos />
            <Explore />
            <ComingSoon />
            <BornToday />
            <Footer />
        </div>
    )
}

export default Index
