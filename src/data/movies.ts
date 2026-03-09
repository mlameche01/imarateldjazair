import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";
import notld from "@/assets/notld.jpg";
import nosferatu from "@/assets/nosferatu.jpg";
import detour from "@/assets/detour.jpg";
import metropolis from "@/assets/metropolis.jpg";
import safetyLast from "@/assets/safetylist.jpg";
import hisGirlFriday from "@/assets/hisgirlfriday.jpg";
import lastMan from "@/assets/lastman.jpg";
import theGeneral from "@/assets/thegeneral.jpg";
import theStranger from "@/assets/thestranger.jpg";
import houseHill from "@/assets/househill.jpg";
import planetnine from "@/assets/planetnine.jpg";
import africanQueen from "@/assets/africanqueen.jpg";
import starIsBorn from "@/assets/starisborn.jpg";
import mLang from "@/assets/mlang.jpg";
import cabinet from "@/assets/cabinet.jpg";
import loveAffair from "@/assets/loveaffair.jpg";
import theKid from "@/assets/thekid.jpg";
import mclintock from "@/assets/mclintock.jpg";

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
  // Original fictional movies
  {
    id: "1",
    title: "Horizon Zero",
    description: "Un astronaute perdu dans l'espace découvre une planète mystérieuse qui pourrait abriter les secrets de l'humanité.",
    poster: movie1,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    genre: "Science-Fiction",
    year: 2024,
    duration: "2h 18min",
    rating: 8.4,
  },
  {
    id: "2",
    title: "Ombres Nocturnes",
    description: "Une détective traque un tueur en série dans les rues pluvieuses d'une mégapole.",
    poster: movie2,
    video: "https://www.youtube.com/embed/LXb3EKWsInQ",
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
    video: "https://www.youtube.com/embed/TSmKGrjDaSc",
    genre: "Fantaisie",
    year: 2023,
    duration: "2h 35min",
    rating: 8.7,
  },
  {
    id: "4",
    title: "La Maison Maudite",
    description: "Une famille emménage dans un manoir victorien hanté par des esprits anciens.",
    poster: movie4,
    video: "https://www.youtube.com/embed/Vfg0yFVMgjU",
    genre: "Horreur",
    year: 2024,
    duration: "1h 45min",
    rating: 7.2,
  },
  {
    id: "5",
    title: "Paris Mon Amour",
    description: "Deux inconnus se rencontrent sur les toits de Paris et vivent une histoire d'amour inoubliable.",
    poster: movie5,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    genre: "Romance",
    year: 2023,
    duration: "1h 38min",
    rating: 7.5,
  },
  {
    id: "6",
    title: "Vitesse Mortelle",
    description: "Une course-poursuite infernale sur les autoroutes d'une ville en flammes.",
    poster: movie6,
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    genre: "Action",
    year: 2024,
    duration: "2h 05min",
    rating: 8.1,
  },

  // === PUBLIC DOMAIN MOVIES (Free & Legal) ===

  {
    id: "pd-1",
    title: "Night of the Living Dead",
    description: "Le film fondateur du genre zombie. Un groupe de survivants se barricade dans une ferme isolée pour échapper aux morts-vivants.",
    poster: notld,
    video: "https://www.youtube.com/embed/QrNuzl5mbhg",
    genre: "Horreur",
    year: 1968,
    duration: "1h 36min",
    rating: 7.9,
  },
  {
    id: "pd-2",
    title: "Nosferatu",
    description: "Le comte Orlok, un vampire terrifiant, sème la terreur dans une ville allemande. Chef-d'œuvre de l'expressionnisme.",
    poster: nosferatu,
    video: "https://www.youtube.com/embed/JK9x0zqldsE",
    genre: "Horreur",
    year: 1922,
    duration: "1h 34min",
    rating: 7.9,
  },
  {
    id: "pd-3",
    title: "Detour",
    description: "Un pianiste fait de l'auto-stop vers Hollywood et se retrouve piégé dans une spirale de malchance et de crime.",
    poster: detour,
    video: "https://www.youtube.com/embed/bGHqGOjGzOc",
    genre: "Film Noir",
    year: 1945,
    duration: "1h 08min",
    rating: 7.4,
  },
  {
    id: "pd-4",
    title: "Metropolis",
    description: "Dans une mégapole futuriste, les ouvriers souterrains se rebellent contre les maîtres qui vivent en surface. Un monument du cinéma.",
    poster: metropolis,
    video: "https://www.youtube.com/embed/AvtWDIZtrAE",
    genre: "Science-Fiction",
    year: 1927,
    duration: "2h 33min",
    rating: 8.3,
  },
  {
    id: "pd-5",
    title: "Safety Last!",
    description: "Harold Lloyd escalade un gratte-ciel dans cette comédie muette légendaire. La scène de l'horloge est inoubliable.",
    poster: safetyLast,
    video: "https://www.youtube.com/embed/VGbXOgCOlMg",
    genre: "Comédie",
    year: 1923,
    duration: "1h 10min",
    rating: 8.1,
  },
  {
    id: "pd-6",
    title: "His Girl Friday",
    description: "Un rédacteur en chef tente de reconquérir son ex-femme et meilleure journaliste dans cette comédie effrénée.",
    poster: hisGirlFriday,
    video: "https://www.youtube.com/embed/aFKfiNhze3I",
    genre: "Comédie",
    year: 1940,
    duration: "1h 32min",
    rating: 7.9,
  },
  {
    id: "pd-7",
    title: "The Last Man on Earth",
    description: "Le dernier survivant d'une pandémie lutte chaque nuit contre des créatures vampiriques. Avec Vincent Price.",
    poster: lastMan,
    video: "https://www.youtube.com/embed/CcvMhsVbaNM",
    genre: "Science-Fiction",
    year: 1964,
    duration: "1h 26min",
    rating: 6.9,
  },
  {
    id: "pd-8",
    title: "The General",
    description: "Buster Keaton dans une poursuite épique en train pendant la Guerre de Sécession. Un chef-d'œuvre du cinéma muet.",
    poster: theGeneral,
    video: "https://www.youtube.com/embed/iHlBMKtgPOA",
    genre: "Aventure",
    year: 1926,
    duration: "1h 07min",
    rating: 8.2,
  },
  {
    id: "pd-9",
    title: "The Stranger",
    description: "Un enquêteur traque un criminel de guerre nazi caché dans une paisible ville américaine. Réalisé par Orson Welles.",
    poster: theStranger,
    video: "https://www.youtube.com/embed/bDFt_Dhkq5A",
    genre: "Thriller",
    year: 1946,
    duration: "1h 35min",
    rating: 7.3,
  },
  {
    id: "pd-10",
    title: "House on Haunted Hill",
    description: "Un millionnaire offre 10 000$ à quiconque survit une nuit dans une maison hantée. Avec Vincent Price.",
    poster: houseHill,
    video: "https://www.youtube.com/embed/jSEoBsMjtEo",
    genre: "Horreur",
    year: 1959,
    duration: "1h 15min",
    rating: 6.9,
  },
  {
    id: "pd-11",
    title: "Plan 9 from Outer Space",
    description: "Des extraterrestres ressuscitent les morts pour conquérir la Terre. Considéré comme le pire film de tous les temps... et culte !",
    poster: planetnine,
    video: "https://www.youtube.com/embed/eNXclPVkquY",
    genre: "Science-Fiction",
    year: 1957,
    duration: "1h 19min",
    rating: 4.0,
  },
  {
    id: "pd-12",
    title: "The African Queen",
    description: "Pendant la Première Guerre mondiale, un capitaine de bateau bourru et une missionnaire descendent une rivière africaine périlleuse.",
    poster: africanQueen,
    video: "https://www.youtube.com/embed/Tn3il8NFFGM",
    genre: "Aventure",
    year: 1951,
    duration: "1h 45min",
    rating: 7.7,
  },
  {
    id: "pd-13",
    title: "A Star Is Born",
    description: "Un acteur vieillissant découvre et aide à lancer la carrière d'une jeune chanteuse talentueuse, tandis que sa propre carrière décline.",
    poster: starIsBorn,
    video: "https://www.youtube.com/embed/MTp7lCZe23M",
    genre: "Drame",
    year: 1937,
    duration: "1h 51min",
    rating: 7.3,
  },
  {
    id: "pd-14",
    title: "M le Maudit",
    description: "La police et la pègre s'unissent pour traquer un tueur d'enfants dans le Berlin des années 30. Chef-d'œuvre de Fritz Lang.",
    poster: mLang,
    video: "https://www.youtube.com/embed/nH0CaWUVyro",
    genre: "Thriller",
    year: 1931,
    duration: "1h 57min",
    rating: 8.3,
  },
  {
    id: "pd-15",
    title: "Le Cabinet du Dr. Caligari",
    description: "Un hypnotiseur utilise un somnambule pour commettre des meurtres. Le film expressionniste allemand par excellence.",
    poster: cabinet,
    video: "https://www.youtube.com/embed/xRm1ZKe4TlE",
    genre: "Horreur",
    year: 1920,
    duration: "1h 16min",
    rating: 8.1,
  },
  {
    id: "pd-16",
    title: "Love Affair",
    description: "Deux personnes fiancées à d'autres tombent amoureuses lors d'une croisière transatlantique et se donnent rendez-vous au sommet de l'Empire State.",
    poster: loveAffair,
    video: "https://www.youtube.com/embed/3bvXIaGKXys",
    genre: "Romance",
    year: 1939,
    duration: "1h 27min",
    rating: 7.4,
  },
  {
    id: "pd-17",
    title: "The Kid",
    description: "Le Vagabond recueille un enfant abandonné. Ensemble, ils survivent dans les rues. Le premier long-métrage de Charlie Chaplin.",
    poster: theKid,
    video: "https://www.youtube.com/embed/gFkYnGNjaoA",
    genre: "Comédie",
    year: 1921,
    duration: "1h 08min",
    rating: 8.3,
  },
  {
    id: "pd-18",
    title: "McLintock!",
    description: "Un riche propriétaire terrien tente de reconquérir sa femme dans cette comédie western pleine d'action.",
    poster: mclintock,
    video: "https://www.youtube.com/embed/wyioZdo2hI8",
    genre: "Western",
    year: 1963,
    duration: "2h 07min",
    rating: 6.9,
  },
];

export const categories = [
  { name: "Tendances", movies: [movies[0], movies[6], movies[9], movies[2], movies[5], movies[11], movies[17]] },
  { name: "Classiques du Domaine Public", movies: [movies[9], movies[7], movies[13], movies[10], movies[16], movies[14], movies[12], movies[15]] },
  { name: "Horreur & Frissons", movies: [movies[6], movies[7], movies[15], movies[14], movies[3], movies[20]] },
  { name: "Science-Fiction", movies: [movies[9], movies[12], movies[0], movies[16]] },
  { name: "Comédie & Divertissement", movies: [movies[10], movies[11], movies[4], movies[22]] },
  { name: "Film Noir & Thriller", movies: [movies[8], movies[19], movies[1], movies[14]] },
  { name: "Aventure & Action", movies: [movies[13], movies[17], movies[5], movies[2]] },
  { name: "Romance & Drame", movies: [movies[21], movies[18], movies[4]] },
];
