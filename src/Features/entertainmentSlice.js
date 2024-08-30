import { createSlice } from "@reduxjs/toolkit";

const entertainmentContent = [
    {
        id: 1,
        title: "Jimmy Fallon's The Tonight Show",
        imageLink: "https://i.ytimg.com/vi/DPO7imV0LHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSKvgQFmc-sTG3Y4KF3LddAiieKA",
        videoDescription: "A light-hearted and entertaining show featuring interviews with A-list celebrities, comedic sketches, and musical performances. Jimmy Fallon's charm and humor make it a fan favorite.",
        videoLink: "https://www.youtube.com/embed/DPO7imV0LHg?si=QdErfwG90_I_T7R6",
        likes: 45,
        unlike: 6,
        heart: 0,
        genre: "Talk Show, Comedy",
        videoTitle: "Jimmy Fallon's The Tonight Show Highlights",
        moviePoster: "https://i.ytimg.com/vi/DPO7imV0LHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSKvgQFmc-sTG3Y4KF3LddAiieKA"
    },
    {
        id: 2,
        title: "The Ellen DeGeneres Show",
        imageLink: "https://i9.ytimg.com/vi/junKkm30BoM/hq720_custom_1.jpg?sqp=CNDmt7YG-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLAowo1Hg7u0mHG4d78MELrwG8PMVQ",
        videoDescription: "The Ellen DeGeneres Show is known for its fun mix of celebrity interviews, games, and audience participation, bringing joy and laughter to millions.",
        videoLink: "https://www.youtube.com/embed/junKkm30BoM?si=DAljgf0vtLIAr44e",
        likes: 0,
        unlike: 0,
        heart: 0,
        genre: "Talk Show, Comedy",
        videoTitle: "The Ellen DeGeneres Show Highlights",
        moviePoster: "https://i9.ytimg.com/vi/junKkm30BoM/hq720_custom_1.jpg?sqp=CNDmt7YG-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLAowo1Hg7u0mHG4d78MELrwG8PMVQ"
    },
    {
        id: 3,
        title: "The Late Show with Stephen Colbert",
        imageLink: "https://i.ytimg.com/vi/-tLJjoiZ1Fc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5iot2piXLM0RQEX-GFGFcpa8DqA",
        videoDescription: "Stephen Colbert's late-night show offers a satirical and insightful take on current events, featuring interviews with political figures and celebrities.",
        videoLink: "https://www.youtube.com/embed/-tLJjoiZ1Fc?si=6Gbv4Uaggff89LDQ",
        likes: 0,
        unlike: 0,
        heart: 0,
        genre: "Talk Show, Satire",
        videoTitle: "The Late Show with Stephen Colbert Highlights",
        moviePoster: "https://i.ytimg.com/vi/-tLJjoiZ1Fc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5iot2piXLM0RQEX-GFGFcpa8DqA"
    },
    {
        id: 4,
        title: "TMZ - Breaking Celebrity News",
        imageLink: "https://i.ytimg.com/vi/w8EWXmu7KaE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF879atNWOH08o1EWX9O5NKwn28g",
        videoDescription: "TMZ is a go-to source for breaking celebrity news and paparazzi footage, often providing exclusive stories on Hollywood's biggest stars.",
        videoLink: "https://www.youtube.com/embed/w8EWXmu7KaE?si=Z-tWVL8qupDoq7VC",
        likes: 0,
        unlike: 0,
        heart: 0,
        genre: "News, Celebrity",
        videoTitle: "TMZ Breaking Celebrity News Highlights",
        moviePoster: "https://i.ytimg.com/vi/w8EWXmu7KaE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF879atNWOH08o1EWX9O5NKwn28g"
    },
    {
        id: 5,
        title: "Entertainment Tonight",
        imageLink: "https://i.ytimg.com/vi/I7fZMACf0oI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2cOWlMWQKXhEMzzWkueYVFgCulg",
        videoDescription: "Entertainment Tonight covers a wide range of entertainment topics, from movies and TV to music and celebrity gossip, with exclusive interviews and stories.",
        videoLink: "https://www.youtube.com/embed/I7fZMACf0oI?si=gQIKv0hkV5W79KSk",
        likes: 0,
        unlike: 0,
        heart: 0,
        genre: "News, Entertainment",
        videoTitle: "Entertainment Tonight Highlights",
        moviePoster: "https://i.ytimg.com/vi/I7fZMACf0oI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2cOWlMWQKXhEMzzWkueYVFgCulg"
    }
];


const entertainmentSlice = createSlice({
    name: 'entertainment',
    initialState: entertainmentContent,
    reducers: {}
})

export default entertainmentSlice.reducer