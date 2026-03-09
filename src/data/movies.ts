import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

export interface Movie {
  id: string;
  title: string;
  description: string;
  poster: string;
  video: string;
  genre: string;
  year: number;
  duration: string;
  rating: number;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Horizon Zero",
    description: "Un astronaute perdu dans l'espace découvre une planète mystérieuse qui pourrait abriter les secrets de l'humanité. Une odyssée spatiale captivante.",
    poster: movie1,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    genre: "Science-Fiction",
    year: 2024,
    duration: "2h 18min",
    rating: 8.4,
  },
  {
    id: "2",
    title: "Ombres Nocturnes",
    description: "Une détective traque un tueur en série dans les rues pluvieuses d'une mégapole. Chaque indice la rapproche du danger.",
    poster: movie2,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    genre: "Thriller",
    year: 2024,
    duration: "1h 52min",
    rating: 7.9,
  },
  {
    id: "3",
    title: "Le Dernier Dragon",
    description: "Dans un monde médiéval fantastique, un guerrier solitaire doit affronter le dernier dragon pour sauver son royaume.",
    poster: movie3,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    genre: "Fantaisie",
    year: 2023,
    duration: "2h 35min",
    rating: 8.7,
  },
  {
    id: "4",
    title: "La Maison Maudite",
    description: "Une famille emménage dans un manoir victorien hanté par des esprits anciens. L'horreur commence à la tombée de la nuit.",
    poster: movie4,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    genre: "Horreur",
    year: 2024,
    duration: "1h 45min",
    rating: 7.2,
  },
  {
    id: "5",
    title: "Paris Mon Amour",
    description: "Deux inconnus se rencontrent sur les toits de Paris et vivent une histoire d'amour inoubliable au coucher du soleil.",
    poster: movie5,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    genre: "Romance",
    year: 2023,
    duration: "1h 38min",
    rating: 7.5,
  },
  {
    id: "6",
    title: "Vitesse Mortelle",
    description: "Une course-poursuite infernale sur les autoroutes d'une ville en flammes. L'action à son paroxysme.",
    poster: movie6,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    genre: "Action",
    year: 2024,
    duration: "2h 05min",
    rating: 8.1,
  },
];

export const categories = [
  { name: "Tendances", movies: [movies[0], movies[2], movies[5], movies[1], movies[3], movies[4]] },
  { name: "Action & Aventure", movies: [movies[5], movies[2], movies[0], movies[1]] },
  { name: "Frissons & Horreur", movies: [movies[3], movies[1], movies[4], movies[0]] },
  { name: "Romance & Comédie", movies: [movies[4], movies[2], movies[5], movies[3]] },
];
