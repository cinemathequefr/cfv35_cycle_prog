import {
  writable
} from "svelte/store";
const URL = "https://gist.githubusercontent.com/nltesown/63dcacb1f08596707299220777ecc58c/raw/f633ed576b652043c30d9cd2162e987d1aa1e018/films_img.json";

export const filmsImg = (() => {
  const {
    subscribe,
    set,
    update
  } = writable({});

  return {
    subscribe,
    async fetch() {
      const res = await fetch(URL);
      const json = await res.json();
      set(json);
    }
  }
})();