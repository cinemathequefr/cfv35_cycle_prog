import { writable } from "svelte/store";
// const url =
//   "https://gist.githubusercontent.com/nltesown/63dcacb1f08596707299220777ecc58c/raw/c88b226894defa36c8bde1a1be0850d769c5828d/films_img.json";

export const filmsImg = (() => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    async fetch() {
      const res = await fetch(
        "https://gist.githubusercontent.com/nltesown/63dcacb1f08596707299220777ecc58c/raw/c88b226894defa36c8bde1a1be0850d769c5828d/films_img.json"
      );
      const json = await res.json();
      set(json);
    }
  };
})();

export const cycleIntroData = (() => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    async fetch() {
      const res = await fetch(
        "https://gist.githubusercontent.com/nltesown/63dcacb1f08596707299220777ecc58c/raw/c88b226894defa36c8bde1a1be0850d769c5828d/films_img.json"
      );
      const json = await res.json();
      set(json);
    }
  };
})();
