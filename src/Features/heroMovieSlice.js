import { createSlice } from "@reduxjs/toolkit";

const heroMovie = [
    {
        id: 1,
        title: "The Dark Knight",
        imageLink: "https://free-3dtextureshd.com/wp-content/uploads/2024/06/24.jpg.webp",
        moviePoster: "https://rukminim2.flixcart.com/image/850/1000/kmns7m80/poster/w/r/8/medium-the-batman-the-dark-knight-rises-maxi-origins-jumbo-original-imagfgb6rmaz3cef.jpeg?q=90&crop=false",
        publishingDate: "2008-07-18",
        movieRate: 9.0,
        description: "Batman battles Joker's chaotic terror.",
        videoLink: "https://www.youtube.com/embed/EXeTwQWrcwY?si=Z7QxsoqCmS8Uowgv",
        videoTitle: "The Dark Knight (2008) Official Trailer #1 - Christopher Nolan Movie HD",
        videoDescription: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan, the second installment in his Batman trilogy. Heath Ledger's iconic performance as the Joker, a chaotic and unpredictable villain, is widely acclaimed. The film explores themes of morality, corruption, and the nature of heroism. With its gritty realism and intense action sequences.",
        duration: "152 minutes",
        genre: "Action",
        likes: 2100000
    },
    {
        id: 2,
        title: "The Godfather",
        imageLink: "https://4kwallpapers.com/images/wallpapers/the-godfather-movie-1920x1080-13940.jpg",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        publishingDate: "1972-03-24",
        movieRate: 9.2,
        description: "Mafia family faces internal, external struggles.",
        videoLink: "https://www.youtube.com/embed/w3Wo6QiD3eU?si=jgaaxfxhJo4vuSh3",
        videoTitle: "The Godfather 50th Anniversary | Official Trailer | Paramount Pictures Australia",
        videoDescription: "Witness the saga of the Corleone family for the first time in 4K Ultra HD. Celebrate the 50th anniversary of Francis Ford Coppola's masterpiece The Godfather in select cinemas this February and on 4K Ultra HD & Digital from March 23.",
        duration: "175 minutes",
        genre: "Crime",
        likes: 1900000
    },
    {
        id: 3,
        title: "The Shawshank Redemption",
        imageLink: "https://c4.wallpaperflare.com/wallpaper/834/280/850/movies-the-shawshank-redemption-wallpaper-preview.jpg",
        moviePoster: "https://m.media-amazon.com/images/M/MV5BMTU1NTUwMjQxN15BMl5BanBnXkFtZTgwOTQ2MjEyMDE@._V1_.jpg",
        publishingDate: "1994-09-23",
        movieRate: 9.3,
        description: "Two prisoners find hope, redemption.",
        videoLink: "https://www.youtube.com/embed/P9mwtI82k6E?si=SAPxlndejfTIVbM3",
        videoTitle: "The Shawshank Redemption (1994) OFFICIAL TRAILER [HD 1080p]",
        videoDescription: "The Shawshank Redemption is a timeless tale of hope and resilience. Andy Dufresne, wrongly convicted of murder, endures a grueling prison sentence while never losing his spirit. Through unwavering determination and ingenuity, he forms unlikely friendships and finds a way to escape the confines of his cel",
        duration: "142 minutes",
        genre: "Drama",
        likes: 2000000
    }
];



const heroMovieSlice = createSlice({
    name: 'hero-movie',
    initialState: heroMovie,
    reducers: {}
})

export default heroMovieSlice.reducer