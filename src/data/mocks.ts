import { CategoryType, TrackType } from "../@types/TrackType";

export const tracks: TrackType[] = [
  {
    id: 1,
    title: "Ganges warriors",
    artist: "Royalty Free Music",
    categoryId: 1,
    thumbnail: "warrior.jpeg",
    audio: "warriors.mp3",
  },
  {
    id: 2,
    title: "Six Strings",
    artist: "Majed Salih",
    categoryId: 1,
    thumbnail: "six.jpeg",
    audio: "six.mp3",
  },
  {
    id: 3,
    title: "Noise",
    artist: "Praz Khanal",
    categoryId: 1,
    thumbnail: "noise.jpeg",
    audio: "noise.mp3",
  },
  {
    id: 4,
    title: "Shadowrun",
    artist: "Tab",
    categoryId: 1,
    thumbnail: "shadowrun.jpeg",
    audio: "shadowrun.mp3",
  },
];

export const categories: CategoryType[] = [
  {
    id: 1,
    name: "Beatmaker's arena",
    thumbnail: "beatmaker.jpg",
  },
  {
    id: 2,
    name: "Chill zone",
    thumbnail: "chill.jpg",
  },
  {
    id: 3,
    name: "Time to dream",
    thumbnail: "dream.jpg",
  },
  {
    id: 4,
    name: "Electro waves",
    thumbnail: "electro.jpg",
  },
  {
    id: 5,
    name: "Indie",
    thumbnail: "indie.jpg",
  },
  {
    id: 6,
    name: "Cool instrumentals",
    thumbnail: "instru.jpg",
  },
  {
    id: 7,
    name: "Metal",
    thumbnail: "metal.jpg",
  },
  {
    id: 8,
    name: "Just piano",
    thumbnail: "piano.jpg",
  },
  {
    id: 9,
    name: "On the rocks",
    thumbnail: "rock.jpg",
  },
  {
    id: 10,
    name: "Urban",
    thumbnail: "urban.jpg",
  },
];
