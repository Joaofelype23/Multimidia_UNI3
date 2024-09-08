export type Music = {
    name: string;
    author: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        name: "Judas",
        author: "Lady Gaga",
        urlAudio: "./audio/judas.mp3",
        image: "./imagens/judas.jpg"
    },
    {
        name: "God Is a Woman",
        author: "Ariana Grande",
        urlAudio: "./audio/god_is_a_woman.mp3",
        image: "./imagens/god_is_a_woman.jpg"
    },
    {
        name: "Envolver",
        author: "Anitta",
        urlAudio: "./audio/envolver.mp3",
        image: "./imagens/envolver.jpg"
    },
];