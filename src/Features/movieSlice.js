import { createSlice } from "@reduxjs/toolkit";

const movies = [
    {
        id: 14,
        title: "Inception",
        imageLink: "https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg",
        publishingDate: "2010-07-16",
        movieRate: 8.8,
        description: "A skilled thief is offered a chance to erase his criminal history by planting an idea into a target's subconscious through shared dreaming.",
        videoLink: "https://www.youtube.com/embed/YoHD9XEInc0?si=nNkdPEADocFNFF5j",
        duration: "148 minutes",
        genre: "Sci-Fi",
        director: "Christopher Nolan",
        writers: "Christopher Nolan",
        stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page"
    },
    {
        id: 15,
        title: "The Dark Knight",
        imageLink: "https://www.slashfilm.com/wp/wp-content/images/thedkint3.jpg",
        publishingDate: "2008-07-18",
        movieRate: 9.0,
        description: "Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City, forcing the hero to confront his own limits.",
        videoLink: "https://www.youtube.com/embed/EXeTwQWrcwY?si=8uk0s5M89GiKMJy9",
        duration: "152 minutes",
        genre: "Action",
        director: "Christopher Nolan",
        writers: "Jonathan Nolan, Christopher Nolan",
        stars: "Christian Bale, Heath Ledger, Aaron Eckhart"
    },
    {
        id: 16,
        title: "Interstellar",
        imageLink: "https://m.media-amazon.com/images/I/41Oh0vCJ9KL._AC_UF1000,1000_QL80_.jpg",
        publishingDate: "2014-11-07",
        movieRate: 8.6,
        description: "A group of explorers undertakes a mission through a wormhole in space in an attempt to ensure humanity's survival as Earth deteriorates.",
        videoLink: "https://www.youtube.com/embed/Lm8p5rlrSkY?si=15gWBOVAJL_FAWCI",
        genre: "Sci-Fi",
        director: "Christopher Nolan",
        writers: "Jonathan Nolan, Christopher Nolan",
        stars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain"
    },
    {
        id: 17,
        title: "The Matrix",
        imageLink: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        publishingDate: "1999-03-31",
        movieRate: 8.7,
        description: "A hacker discovers that the world he lives in is a simulated reality controlled by intelligent machines, and he joins a rebellion to fight back.",
        videoLink: "https://www.youtube.com/embed/vKQi3bBA1y8?si=SM8i_iH_7a1FK2n3",
        duration: "136 minutes",
        genre: "Sci-Fi",
        director: "Lana Wachowski, Lilly Wachowski",
        writers: "Lana Wachowski, Lilly Wachowski",
        stars: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"
    },
    {
        id: 18,
        title: "The Shawshank Redemption",
        imageLink: "https://m.media-amazon.com/images/I/51WYsbIa7TS._AC_UF1000,1000_QL80_.jpg",
        publishingDate: "1994-09-23",
        movieRate: 9.3,
        description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency in a harsh environment.",
        videoLink: "https://www.youtube.com/embed/NmzuHjWmXOc?si=iROmKa28PH9n6BYW",
        duration: "142 minutes",
        genre: "Drama",
        director: "Frank Darabont",
        writers: "Stephen King (story), Frank Darabont (screenplay)",
        stars: "Tim Robbins, Morgan Freeman, Bob Gunton"
    },
    {
        id: 19,
        title: "The Godfather",
        imageLink: "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg",
        publishingDate: "1972-03-24",
        movieRate: 9.2,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son, amidst a violent power struggle.",
        videoLink: "https://www.youtube.com/embed/UaVTIH8mujA?si=EjqxlfD540ffKr0R",
        duration: "175 minutes",
        genre: "Crime",
        director: "Francis Ford Coppola",
        writers: "Mario Puzo, Francis Ford Coppola",
        stars: "Marlon Brando, Al Pacino, James Caan"
    },
    {
        id: 20,
        title: "Pulp Fiction",
        imageLink: "https://alternativemovieposters.com/wp-content/uploads/2023/07/Dave-Merrell_PulpFiction.jpg",
        publishingDate: "1994-10-14",
        movieRate: 8.9,
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        videoLink: "https://www.youtube.com/embed/5ZAhzsi1ybM?si=X0X31hmbDcPegG6F",
        duration: "154 minutes",
        genre: "Crime",
        director: "Quentin Tarantino",
        writers: "Quentin Tarantino, Roger Avary",
        stars: "John Travolta, Uma Thurman, Samuel L. Jackson"
    },
    {
        id: 21,
        title: "Fight Club",
        imageLink: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d6aeda57161475.59cb08fe94e68.jpg",
        publishingDate: "1999-10-15",
        movieRate: 8.8,
        description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into a revolution, challenging societal norms.",
        videoLink: "https://www.youtube.com/embed/BdJKm16Co6M?si=ZWZnn0lVX3MY0gvM",
        duration: "139 minutes",
        genre: "Drama",
        director: "David Fincher",
        writers: "Chuck Palahniuk (novel), Jim Uhls (screenplay)",
        stars: "Brad Pitt, Edward Norton, Helena Bonham Carter"
    },
    {
        id: 22,
        title: "Forrest Gump",
        imageLink: "https://image.tmdb.org/t/p/original/yu26pJwGFUyqTJWMWo1mMgBFJ0N.jpg",
        publishingDate: "1994-07-06",
        movieRate: 8.8,
        description: "The story of a man with a low IQ who achieves incredible things in his life, despite his perceived limitations, influencing major historical events.",
        videoLink: "https://www.youtube.com/embed/bLvqoHBptjg?si=dk0fGw2-NhPejvgQ",
        duration: "142 minutes",
        genre: "Drama",
        director: "Robert Zemeckis",
        writers: "Winston Groom (novel), Eric Roth (screenplay)",
        stars: "Tom Hanks, Robin Wright, Gary Sinise"
    },
    {
        id: 23,
        title: "The Lord of the Rings: The Return of the King",
        imageLink: "https://images-cdn.ubuy.co.in/633e85d133a1fa112667e792-the-lord-of-the-rings-return-of-the-king.jpg",
        publishingDate: "2003-12-17",
        movieRate: 9.0,
        description: "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth, with Frodo and Sam nearing Mount Doom.",
        videoLink: "https://www.youtube.com/embed/y2rYRu8UW8M?si=CEGNECOMt5yx3XhR",
        duration: "201 minutes",
        genre: "Fantasy",
        director: "Peter Jackson",
        writers: "J.R.R. Tolkien (novel), Fran Walsh, Philippa Boyens, Peter Jackson",
        stars: "Elijah Wood, Viggo Mortensen, Ian McKellen"
    },
    {
        id: 24,
        title: "Drishyam",
        imageLink: "https://m.media-amazon.com/images/M/MV5BYmJhZmJlYTItZmZlNy00MGY0LTg0ZGMtNWFkYWU5NTA1YTNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        publishingDate: "2013-12-19",
        movieRate: 8.8,
        description: "A father's love and intelligence are tested as he covers up a crime to protect his family, leading to a tense investigation.",
        videoLink: "https://www.youtube.com/embed/GkOV2-q01Nc?si=KL9vpz_WMlof8S7E",
        duration: "160 minutes",
        genre: "Thriller",
        director: "Jeethu Joseph",
        writers: ["Jeethu Joseph"],
        stars: ["Mohanlal", "Meena", "Ansiba Hassan"],
        language: "Malayalam"
    },
    {
        id: 25,
        title: "Premam",
        imageLink: "https://m.media-amazon.com/images/M/MV5BMzJhNjMyOGMtYjhiYy00ZTAwLThmZWUtZmE5NzI3OTk4Y2M4XkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_.jpg",
        publishingDate: "2015-05-29",
        movieRate: 8.3,
        description: "The story of George and his romantic experiences from teenage to adulthood, exploring love and heartbreak.",
        videoLink: "https://www.youtube.com/embed/6pvwWXleO-s?si=FbYEHa-30m1C-8S8",
        duration: "156 minutes",
        genre: "Romance",
        director: "Alphonse Puthren",
        writers: ["Alphonse Puthren"],
        stars: ["Nivin Pauly", "Sai Pallavi", "Madonna Sebastian"],
        language: "Malayalam"
    },
    {
        id: 26,
        title: "Bangalore Days",
        imageLink: "https://i.pinimg.com/564x/02/b2/05/02b20550e3750417bc1744b455749744.jpg",
        publishingDate: "2014-05-30",
        movieRate: 8.3,
        description: "Three cousins fulfill their childhood dream of moving to Bangalore, where their lives take unexpected turns.",
        videoLink: "https://www.youtube.com/embed/Gdzif0Px_qY?si=QxBL78HeUwkhbmVf",
        duration: "171 minutes",
        genre: "Drama",
        director: "Anjali Menon",
        writers: ["Anjali Menon"],
        stars: ["Dulquer Salmaan", "Nazriya Nazim", "Nivin Pauly"],
        language: "Malayalam"
    },
    {
        id: 27,
        title: "Kumbalangi Nights",
        imageLink: "https://m.media-amazon.com/images/M/MV5BZjc1NWE4OWQtNWRjNi00YWU0LTkyNDgtYWUxMjFjODJkMGY3XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
        publishingDate: "2019-02-07",
        movieRate: 8.6,
        description: "Four brothers living in a dysfunctional family set out on a journey of self-discovery and healing in this beautiful drama.",
        videoLink: "https://www.youtube.com/embed/zpRKm_Mq-n8?si=fT5DXqGmsnl7NoH0",
        duration: "135 minutes",
        genre: "Drama",
        director: "Madhu C. Narayanan",
        writers: ["Syam Pushkaran"],
        stars: ["Shane Nigam", "Soubin Shahir", "Fahadh Faasil"],
        language: "Malayalam"
    },
    {
        id: 28,
        title: "Ustad Hotel",
        imageLink: "https://m.media-amazon.com/images/M/MV5BNWYzYjk3YzItNzBhMC00NmQwLTk0MmUtNzU5MWNmNDI2Mzg0XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_.jpg",
        publishingDate: "2012-06-29",
        movieRate: 8.3,
        description: "A young man aspiring to be a chef is torn between his dreams and his family's expectations, leading to life-altering decisions.",
        videoLink: "https://www.youtube.com/embed/1xOxKxefdaY?si=eOnp_eq9y0e3suwB",
        duration: "150 minutes",
        genre: "Drama",
        director: "Anwar Rasheed",
        writers: ["Anjali Menon"],
        stars: ["Dulquer Salmaan", "Thilakan", "Nithya Menen"],
        language: "Malayalam"
    },
    {
        id: 29,
        title: "Maheshinte Prathikaaram",
        imageLink: "https://static.toiimg.com/photo/61199050.cms",
        publishingDate: "2016-02-05",
        movieRate: 8.4,
        description: "A small-town photographer embarks on a journey of revenge, only to discover the true meaning of forgiveness.",
        videoLink: "https://www.youtube.com/embed/_KY8Du4WWew?si=5WpxwNJKeI0CaSWu",
        duration: "120 minutes",
        genre: "Comedy-Drama",
        director: "Dileesh Pothan",
        writers: ["Syam Pushkaran"],
        stars: ["Fahadh Faasil", "Anusree", "Soubin Shahir"],
        language: "Malayalam"
    },
    {
        id: 30,
        title: "Virus",
        imageLink: "https://m.media-amazon.com/images/M/MV5BMjdhOTZjMDEtZmUxMC00YzUzLTgwNGYtZmNmNGI1ODc1NjdlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        publishingDate: "2019-06-07",
        movieRate: 8.0,
        description: "A gripping account of the 2018 Nipah virus outbreak in Kerala, focusing on the efforts of the health department to contain it.",
        videoLink: "https://www.youtube.com/embed/38MijVTyP7s?si=7BvEPZIZbXZvzuDR",
        duration: "152 minutes",
        genre: "Thriller",
        director: "Aashiq Abu",
        writers: ["Muhsin Parari", "Sharfu", "Suhas"],
        stars: ["Tovino Thomas", "Parvathy Thiruvothu", "Kunchacko Boban"],
        language: "Malayalam"
    },
    {
        id: 31,
        title: "Ee. Ma. Yau",
        imageLink: "https://m.media-amazon.com/images/S/pv-target-images/9e4ed4c52f52e5651b1391d6b32c8d7e1402e7faa2ba7b67e6c3037ae4c7c258.jpg",
        publishingDate: "2018-05-04",
        movieRate: 8.3,
        description: "A son's attempt to give his deceased father a grand funeral leads to a series of tragicomic events in a coastal village.",
        videoLink: "https://www.youtube.com/embed/SweKJ8VVXCU?si=MNHxEMcEdGbiQ7TB",
        duration: "120 minutes",
        genre: "Drama",
        director: "Lijo Jose Pellissery",
        writers: ["P.F. Mathews"],
        stars: ["Chemban Vinod Jose", "Vinayakan", "Dileesh Pothan"],
        language: "Malayalam"
    },
    {
        id: 32,
        title: "Joji",
        imageLink: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/712caf125941161.6123ba76ea587.jpg",
        publishingDate: "2021-04-07",
        movieRate: 7.9,
        description: "Inspired by Macbeth, this film follows the story of Joji, an engineering dropout who plots to gain his father's wealth.",
        videoLink: "https://www.youtube.com/embed/9yULZ8y1J-s?si=XJ33QiqmguRdS1lv",
        duration: "113 minutes",
        genre: "Crime-Drama",
        director: "Dileesh Pothan",
        writers: ["Syam Pushkaran"],
        stars: ["Fahadh Faasil", "Baburaj", "Unnimaya Prasad"],
        language: "Malayalam"
    },
    {
        id: 33,
        title: "Sudani from Nigeria",
        imageLink: "https://play-lh.googleusercontent.com/yzusHsCLP6SuIGh1GjbBq5VHVIkC2rtAxz0c-6p-l5g1G7Ji0vbOOUJkc7JhC0oucOjGs3cFpdcAPMw6SA",
        publishingDate: "2018-03-23",
        movieRate: 8.3,
        description: "A local football club manager's life changes when an African footballer on his team is injured, leading to unexpected bonds.",
        videoLink: "https://www.youtube.com/embed/jYlExlWc238?si=Utys-zYZjTI6f8AZ",
        duration: "123 minutes",
        genre: "Drama",
        director: "Zakariya Mohammed",
        writers: ["Zakariya Mohammed", "Muhsin Parari"],
        stars: ["Soubin Shahir", "Samuel Abiola Robinson", "Savithri Sreedharan"],
        language: "Malayalam"
    }
];



const movieSlice = createSlice({
    name: 'movies',
    initialState: movies,
    reducers: {

    }
})

export default movieSlice.reducer