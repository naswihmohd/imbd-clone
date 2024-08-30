import { createSlice } from "@reduxjs/toolkit";

const upcomingMovies = [
    {
        id: 1,
        title: "Surya's Saturday",
        videoTitle: "Surya's Saturday - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/nEgUn2W8ygY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmwyFoRQ6oB1sGsxgIv7_ljc42Yw",
        moviePoster: "https://i0.wp.com/moviegalleri.net/wp-content/uploads/2024/07/Actress-Priyanka-Mohan-First-Look-From-Suryas-Saturday-Movie.jpg?ssl=1",
        publishingDate: "2024-09-15",
        videoDescription: "A thrilling story of Surya, who embarks on an unexpected adventure that changes his life forever. Packed with action and drama.",
        videoLink: "https://www.youtube.com/embed/nEgUn2W8ygY?si=cNDfP6aEEPe-7DmE",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 2,
        title: "Aho Vikramaarka!",
        videoTitle: "Aho Vikramaarka! - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/SmYX1Xvy3Yo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe_J98T4TYqiEmTG7wmOxJ6rI6iQ",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNzEyZTJiOGItOWI4MC00OTBhLWJhYWEtMmMxZmI4ZGMzNjk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        publishingDate: "2024-10-20",
        videoDescription: "Aho Vikramaarka! is a comedy-drama about a bumbling detective's hilarious misadventures as he attempts to solve a complex case.",
        videoLink: "https://www.youtube.com/embed/SmYX1Xvy3Yo?si=oh8qIiikTR8pY2or",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 3,
        title: "The Diary of West Bengal",
        videoTitle: "The Diary of West Bengal - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/hc6O80LR1ko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUf-fIY4rll9aT4CixpY6GnVOh8w",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMjEyMmM5ZmMtODA2ZC00ZDMwLWFhMDgtY2VjZWY2MGJjZDQwXkEyXkFqcGc@._V1_.jpg",
        publishingDate: "2024-11-05",
        videoDescription: "A gripping historical drama that delves into the untold stories of West Bengal during turbulent times, highlighting the courage of its people.",
        videoLink: "https://www.youtube.com/embed/hc6O80LR1ko?si=CF9mW18ZjHWHkzV6",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 4,
        title: "Emergency",
        videoTitle: "Emergency - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/A2OQ-f_LOHA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMtdXD8ESxtNg0ihSL5vT2I9yz7w",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNTU3MTlhMzctMDI5Yi00MTljLWFmNTctN2QyMThkYjljMjFiXkEyXkFqcGc@._V1_.jpg",
        publishingDate: "2024-12-15",
        videoDescription: "Set against the backdrop of a national crisis, 'Emergency' is a political thriller that unravels the consequences of a sudden catastrophe.",
        videoLink: "https://www.youtube.com/embed/c5IzzQ4IHH4?si=gHeMUaihVLyDuF-F",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 5,
        title: "A.R.M",
        videoTitle: "A.R.M - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/rFgS10V8908/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5azz7cviFXAYkS3w-4uNE82uX3w",
        moviePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDHRZs3qk7YAyCTgwohh-9F5wK9cO2RDi2w&s",
        publishingDate: "2024-10-12",
        videoDescription: "A.R.M. is a high-octane action film that follows the journey of a special task force as they take on a deadly mission.",
        videoLink: "https://www.youtube.com/embed/TWQjWLwY9ZE?si=TgWsnH5-B6O2-QVH",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 6,
        title: "Kanguva",
        videoTitle: "Kanguva - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/ajnCMSC4VPo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw8ukjaL3aZXBpLZ5NE3nIR8qrJg",
        moviePoster: "https://akm-img-a-in.tosshub.com/indiatoday/inline-images/GD8OhxNbcAAeo3o.jpg?VersionId=ZLxtIDN0p7stZbaw1oOX6vkBLUjvg8CQ&size=750:*",
        publishingDate: "2024-09-25",
        videoDescription: "A mythological action film that explores the legend of Kanguva, a warrior whose bravery and legacy are unmatched.",
        videoLink: "https://www.youtube.com/embed/ajnCMSC4VPo?si=hC2ezMl_WtzwHpiX",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 7,
        title: "Devara Part 1",
        videoTitle: "Devara Part 1 - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/rc61YHl1PFY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJTREYqrRXi7zo9xUF21MTQWvYAg",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BZDBkZjJmYjQtYWFkNy00YjdiLTljMDUtYzc1OGZiZDkwMTRiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
        publishingDate: "2024-11-10",
        videoDescription: "The first installment in an epic saga, 'Devara Part 1' sets the stage for a grand tale of power, betrayal, and revenge.",
        videoLink: "https://www.youtube.com/embed/SiZ5sJKnegA?si=R8kHcdWqMx_1Led5",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 8,
        title: "IC 814: The Kandahar Hijack",
        videoTitle: "IC 814: The Kandahar Hijack - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/5Dmr5rktfGY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbdB4zksuBcIqS8kXl6hJKGAF0jw",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BNTk4ZDc4OTUtYmE3Mi00M2IzLWJhZWMtZTRmZTc2YzZkOGRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        publishingDate: "2024-12-25",
        videoDescription: "A nail-biting thriller that recounts the real-life hijacking of IC 814 and the intense negotiations that followed.",
        videoLink: "https://www.youtube.com/embed/5Dmr5rktfGY?si=4cB19gubhjLWBBJJ",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 9,
        title: "Martin",
        videoTitle: "Martin - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/oge3BfIoG-c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMfVamZGRNbIhKYigT1gACzqPSkQ",
        moviePoster: "https://i.pinimg.com/736x/d3/c9/8e/d3c98e887ac7383738905900416d469c.jpg",
        publishingDate: "2024-10-05",
        videoDescription: "A heartwarming drama about Martin, a small-town boy with big dreams, who overcomes adversity to achieve his goals.",
        videoLink: "https://www.youtube.com/embed/oge3BfIoG-c?si=-zGt3RR-2P9NnFPC",
        likes: 3427,
        unlike: 12,
        heart: 2341
    },
    {
        id: 10,
        title: "Call Me Bae",
        videoTitle: "Call Me Bae - Official Trailer",
        imageLink: "https://i.ytimg.com/vi/oMaB-STKV9Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSwiovqxW3cKzwtmsrHtdmDPUMpA",
        moviePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34GIjgC41fe0q2XjY2xAOoWaNZzX4ZgijqA&s",
        publishingDate: "2024-12-05",
        videoDescription: "A romantic comedy that explores the hilarious and heartwarming journey of Bae, who navigates the ups and downs of modern relationships.",
        videoLink: "https://www.youtube.com/embed/oMaB-STKV9Q?si=xrYQ_WZ8bCnrxbge",
        likes: 3427,
        unlike: 12,
        heart: 2341
    }
];


const upcomingMoviesSlice = createSlice({
    name: "upcomingMovies",
    initialState: upcomingMovies,
    reducers: {}
})

export default upcomingMoviesSlice.reducer