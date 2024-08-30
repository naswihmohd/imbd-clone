import { createSlice } from "@reduxjs/toolkit";


const featuredToday = [
    {
        id: 4,
        title: "Inception",
        imageLink: "https://c4.wallpaperflare.com/wallpaper/1015/408/13/inception-fantasy-art-movies-wallpaper-preview.jpg",
        moviePoster: "https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg",
        publishingDate: "2010-07-16",
        movieRate: 8.8,
        description: "A mind-bending thriller about shared dreams and blurred realities.",
        videoDescription: "A skilled thief is given a chance to erase his criminal record by planting an idea into a target's subconscious through shared dreaming. As he delves deeper, the boundaries between dream and reality blur, putting his life and sanity at risk.",
        videoTitle: "Inception Official Trailer",
        videoLink: "https://www.youtube.com/embed/YoHD9XEInc0?si=hOMkiVu6nKU3FqA7",
        duration: "148 minutes",
        genre: "Sci-Fi",
        likes: 2500000
    },
    {
        id: 5,
        title: "Parasite",
        imageLink: "https://e1.pxfuel.com/desktop-wallpaper/770/581/desktop-wallpaper-watch-parasite-parasite-2019-movie.jpg",
        moviePoster: "https://m.media-amazon.com/images/I/91KArYP03YL._AC_UF894,1000_QL80_.jpg",
        publishingDate: "2019-05-30",
        movieRate: 8.6,
        description: "A dark comedy that explores class discrimination and societal divides.",
        videoDescription: "A poor family schemes to become employed by a wealthy household by infiltrating their home and posing as unrelated, highly qualified individuals. The story unfolds into a dark comedy that critiques class discrimination and the societal divide.",
        videoTitle: "Parasite Official Trailer",
        videoLink: "https://www.youtube.com/embed/5xH0HfJHsaY?si=5-UgcU-h-XR_Lp75",
        duration: "132 minutes",
        genre: "Thriller, Drama",
        likes: 2200000
    },
    {
        id: 6,
        title: "Avengers: Endgame",
        imageLink: "https://wallpapers.com/images/hd/avengers-endgame-fantasy-m8fbpfs2m580r7l3.webp",
        moviePoster: "https://images-cdn.ubuy.co.in/634ffe4b05d16a708944a5ec-avengers-endgame-movie-poster-2-sided.jpg",
        publishingDate: "2019-04-26",
        movieRate: 8.4,
        description: "The epic conclusion to the Avengers saga, where heroes fight to undo Thanos' snap.",
        videoDescription: "After the devastating events of Infinity War, the Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe. With their greatest foes yet and the highest stakes, it's a battle for survival and hope.",
        videoTitle: "Avengers: Endgame Official Trailer",
        videoLink: "https://www.youtube.com/embed/TcMBFSGVi1c?si=OHJMeKipBnpbcz8U",
        duration: "181 minutes",
        genre: "Action, Adventure, Sci-Fi",
        likes: 3000000
    },
    {
        id: 7,
        title: "The Irishman",
        imageLink: "https://images3.alphacoders.com/127/1274149.jpg",
        moviePoster: "https://m.media-amazon.com/images/I/618HN--1rTL.jpg",
        publishingDate: "2019-11-01",
        movieRate: 7.8,
        description: "A reflective journey of a hitman and his connections with a crime family.",
        videoDescription: "An aging hitman looks back on his life and the connections he made with a notorious crime family. The film spans decades, exploring the consequences of a life of violence and the haunting memories that come with it.",
        videoTitle: "The Irishman Official Trailer",
        videoLink: "https://www.youtube.com/embed/1Expe7hf6MU?si=HCKN87eVK95ICK5A",
        duration: "209 minutes",
        genre: "Crime, Drama",
        likes: 1800000
    },
    {
        id: 8,
        title: "Joker",
        imageLink: "https://motionbgs.com/i/c/960x540/media/2300/joker.jpg",
        moviePoster: "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_0e557717-f9ae-4d45-82c3-27e08c2a9eeb.jpg?v=1579504984",
        publishingDate: "2019-10-04",
        movieRate: 8.5,
        description: "A dark exploration of the origins of the iconic villain, Joker.",
        videoDescription: "Arthur Fleck, a failed comedian, descends into madness as he transforms into the criminal mastermind known as the Joker. The film explores themes of mental illness, social isolation, and the consequences of a society that neglects its most vulnerable.",
        videoTitle: "Joker Official Trailer",
        videoLink: "https://www.youtube.com/embed/_OKAwz2MsJs?si=qxgD41i1TuXDMQ8r",
        duration: "122 minutes",
        genre: "Crime, Drama, Thriller",
        likes: 2700000
    },
    {
        id: 9,
        title: "1917",
        imageLink: "https://w0.peakpx.com/wallpaper/760/796/HD-wallpaper-1917.jpg",
        moviePoster: "https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster.jpg?v=1582705166",
        publishingDate: "2019-12-25",
        movieRate: 8.3,
        description: "A gripping World War I drama with a groundbreaking continuous-shot effect.",
        videoDescription: "During World War I, two British soldiers are given an impossible mission: to deliver a message deep in enemy territory that will save 1,600 of their comrades from walking into a deadly trap. The film is renowned for its continuous-shot effect.",
        videoTitle: "1917 Official Trailer",
        videoLink: "https://www.youtube.com/embed/YqNYrYUiMfg?si=qvicEjj8UYGk0_me",
        duration: "119 minutes",
        genre: "War, Drama",
        likes: 2000000
    },
    {
        id: 10,
        title: "Once Upon a Time in Hollywood",
        imageLink: "https://i.redd.it/4er75pvvyiq31.png",
        moviePoster: "https://i.etsystatic.com/18242346/r/il/de0184/1953623948/il_570xN.1953623948_rbei.jpg",
        publishingDate: "2019-07-26",
        movieRate: 7.6,
        description: "A nostalgic look at Hollywood in the 1960s through the eyes of a fading star.",
        videoDescription: "A fading television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age. The film is a love letter to the 1960s Los Angeles, blending real-life events with fiction.",
        videoTitle: "Once Upon a Time in Hollywood Official Trailer",
        videoLink: "https://www.youtube.com/embed/ELeMaP8EPAA?si=pEqZzV10agG_dlZB",
        duration: "161 minutes",
        genre: "Comedy, Drama",
        likes: 2100000
    },
    {
        id: 11,
        title: "Ford v Ferrari",
        imageLink: "https://w0.peakpx.com/wallpaper/804/169/HD-wallpaper-movie-ford-v-ferrari-christian-bale-matt-damon.jpg",
        moviePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNY-ntdm60e4htltvEWyNz1LOCxaTJUyAHIQ&s",
        publishingDate: "2019-11-15",
        movieRate: 8.1,
        description: "A thrilling true story of Ford's challenge to Ferrari at Le Mans.",
        videoDescription: "American car designer Carroll Shelby and British driver Ken Miles team up to build a revolutionary race car for Ford to challenge Ferrari at the 24 Hours of Le Mans in 1966. The film is a gripping tale of ambition, innovation, and rivalry.",
        videoTitle: "Ford v Ferrari Official Trailer",
        videoLink: "https://www.youtube.com/embed/zyYgDtY2AMY?si=gvefTKn-_pZs-Nia",
        duration: "152 minutes",
        genre: "Action, Biography, Drama",
        likes: 1600000
    },
    {
        id: 12,
        title: "Marriage Story",
        imageLink: "https://wallpapers.com/images/hd/love-story-of-lovers-on-field-bnnexs0ks7dzt9m8.jpg",
        moviePoster: "https://c8.alamy.com/comp/2A49A6M/marriage-story-2019-directed-by-noah-baumbach-credit-netflix-album-2A49A6M.jpg",
        publishingDate: "2019-11-06",
        movieRate: 7.9,
        description: "A raw and emotional portrayal of a couple's challenging divorce.",
        videoDescription: "A stage director and his actress wife struggle through a grueling, coast-to-coast divorce that pushes them to their personal and creative limits. The film captures the heartbreak and complexities of modern relationships with poignant realism.",
        videoTitle: "Marriage Story Official Trailer",
        videoLink: "https://www.youtube.com/embed/BHi-a1n8t7M?si=05iaVBRZQ7rW5dcI",
        duration: "137 minutes",
        genre: "Drama, Romance",
        likes: 1500000
    },
    {
        id: 13,
        title: "The Lighthouse",
        imageLink: "https://images2.alphacoders.com/112/1122555.jpg",
        moviePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYQosOQfrFIW_ZAVgiU7i9lkhJUxxFO-QdQ&s",
        publishingDate: "2019-10-18",
        movieRate: 7.5,
        description: "A psychological horror about two men isolated on a remote island.",
        videoDescription: "Two lighthouse keepers are stranded on a remote and mysterious New England island in the 1890s. As isolation and loneliness set in, their sanity begins to unravel, leading to a nightmarish descent into madness.",
        videoTitle: "The Lighthouse Official Trailer",
        videoLink: "https://www.youtube.com/embed/Hyag7lR8CPA?si=lFNds2BOjzR1pzYi",
        duration: "109 minutes",
        genre: "Drama, Fantasy, Horror",
        likes: 1400000
    }
];




const featuredVdeoSlice = createSlice({
    name: 'featured-videos',
    initialState: featuredToday,
    reducers: {}
})

export default featuredVdeoSlice.reducer