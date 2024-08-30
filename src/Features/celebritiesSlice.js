import { createSlice } from "@reduxjs/toolkit";

const celebrities = [
    {
        id: 34,
        name: "Leonardo DiCaprio",
        photo: "https://c4.wallpaperflare.com/wallpaper/500/146/346/leonardo-dicaprio-actor-face-beard-wallpaper-preview.jpg",
        age: 49,
        birthday: "1974-11-11",
        profession: "Actor, Producer",
        about: "Leonardo DiCaprio is an Oscar-winning actor known for roles in 'Titanic', 'Inception', and 'The Revenant'. He has received numerous awards, including an Academy Award for Best Actor for 'The Revenant'. He is also an environmental activist.",
        video: "https://www.youtube.com/embed/xpyrefzvTpI?si=NpHIRpiDfOH-Cbdu"
    },
    {
        id: 35,
        name: "Scarlett Johansson",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Scarlett_Johansson_in_Kuwait_02_%28square%29.jpg",
        age: 39,
        birthday: "1984-11-22",
        profession: "Actress, Singer",
        about: "Scarlett Johansson is a Hollywood A-lister known for her roles in 'Lost in Translation', 'The Avengers', and 'Marriage Story'. She has received multiple accolades, including a Tony Award and nominations for two Academy Awards in 2020.",
        video: "https://www.youtube.com/embed/3jCsZBEuvvw?si=id5scwFUEcoO3T11"
    },
    {
        id: 36,
        name: "Robert Downey Jr.",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItcWQQBCVANO7gW8k-ZMMyZKrZPldqyJYOg&s",
        age: 59,
        birthday: "1965-04-04",
        profession: "Actor, Producer",
        about: "Robert Downey Jr. is best known for his role as Tony Stark/Iron Man in the Marvel Cinematic Universe. He has won numerous awards, including a Golden Globe, and is one of the highest-paid actors in Hollywood.",
        video: "https://www.youtube.com/embed/BBrP8zazELs?si=cnzQy2jLwpNd1_NO"
    },
    {
        id: 37,
        name: "Emma Watson",
        photo: "https://papers.co/wallpaper/papers.co-hr37-emma-watson-profile-girl-actress-film-40-wallpaper.jpg?download=true",
        age: 34,
        birthday: "1990-04-15",
        profession: "Actress, Activist",
        about: "Emma Watson gained worldwide fame for her role as Hermione Granger in the 'Harry Potter' series. She is also an advocate for women's rights, serving as a UN Women Goodwill ambassador.",
        video: "https://www.youtube.com/embed/xgs5gOCpsAE?si=3Mk23pJzwPCvbBoo"
    },
    {
        id: 38,
        name: "Tom Hanks",
        photo: "https://wallpapercave.com/wp/wp1888066.jpg",
        age: 67,
        birthday: "1956-07-09",
        profession: "Actor, Producer, Director",
        about: "Tom Hanks is an acclaimed actor known for his roles in 'Forrest Gump', 'Saving Private Ryan', and 'Cast Away'. He has won two Academy Awards for Best Actor and is widely regarded as one of the most beloved figures in Hollywood.",
        video: "https://www.youtube.com/embed/pruHzVs7OiM?si=QkTuYK8ree-72Ee2"
    },
    {
        id: 39,
        name: "Jennifer Lawrence",
        photo: "https://pbs.twimg.com/profile_images/1671250374357811202/AWCtVGaK_400x400.jpg",
        age: 34,
        birthday: "1990-08-15",
        profession: "Actress",
        about: "Jennifer Lawrence is known for her roles in 'The Hunger Games' series, 'Silver Linings Playbook', and 'American Hustle'. She won an Academy Award for Best Actress for 'Silver Linings Playbook' and is one of the highest-paid actresses in the world.",
        video: "https://www.youtube.com/embed/70LY0APKVtY?si=zYhBQHck5KdwpgaV"
    },
    {
        id: 40,
        name: "Dwayne Johnson",
        photo: "https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_200x200.jpeg",
        age: 52,
        birthday: "1972-05-02",
        profession: "Actor, Producer, Former Wrestler",
        about: "Dwayne 'The Rock' Johnson is a global superstar known for his wrestling career and roles in movies like 'Fast & Furious', 'Jumanji', and 'Moana'. He has won multiple awards and is one of the highest-grossing box office stars of all time.",
        video: "https://www.youtube.com/embed/a851I4_-4Go?si=6BNOEc15T2pcxawL"
    },
    {
        id: 41,
        name: "Natalie Portman",
        photo: "https://images.wsj.net/im-907931?size=1",
        age: 43,
        birthday: "1981-06-09",
        profession: "Actress, Filmmaker",
        about: "Natalie Portman is an Oscar-winning actress known for her roles in 'Black Swan', 'V for Vendetta', and 'Thor'. She has won multiple awards, including an Academy Award for Best Actress for 'Black Swan', and is also an accomplished director.",
        video: "https://www.youtube.com/embed/aJ8QSjTAR5Q?si=kHap01JpnuFljboo"
    },
    {
        id: 42,
        name: "Chris Hemsworth",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrouXLnpAjYCnfF9nNfm4ohTX9fkdyDyPEmQ&s",
        age: 40,
        birthday: "1983-08-11",
        profession: "Actor",
        about: "Chris Hemsworth is best known for his role as Thor in the Marvel Cinematic Universe. He has starred in numerous successful films, including 'Thor', 'Avengers', and 'Extraction', making him one of the highest-paid actors in Hollywood.",
        video: "https://www.youtube.com/embed/WGD0pSDMPus?si=f77eGKxkBtg6LCl_"
    },
    {
        id: 43,
        name: "Angelina Jolie",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFUue5VEVMb8FatoMJfzAuNASdJBIIqyjOg&s",
        age: 49,
        birthday: "1975-06-04",
        profession: "Actress, Filmmaker, Humanitarian",
        about: "Angelina Jolie is an Academy Award-winning actress known for roles in 'Girl, Interrupted', 'Maleficent', and 'Mr. & Mrs. Smith'. She is also a UNHCR Goodwill Ambassador and has been honored for her humanitarian efforts worldwide.",
        video: "https://www.youtube.com/embed/bWi6KTB97_U?si=rbBrla4d1uFG5nzM"
    }
];


const celebritiesSlice = createSlice({
    name: 'celebrities',
    initialState: celebrities,
    reducers: {}
})

export default celebritiesSlice.reducer