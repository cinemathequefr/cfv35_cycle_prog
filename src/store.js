import { writable } from "svelte/store";
const URL =
  "https://gist.githubusercontent.com/nltesown/63dcacb1f08596707299220777ecc58c/raw/adfff64bbe2d197f8f5e19d3fdd1138bf2965824/films_img.json";

export const filmsImg = (() => {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    async fetch() {
      const res = await fetch(URL);
      const json = await res.json();
      set(json);
    }
  };
})();
