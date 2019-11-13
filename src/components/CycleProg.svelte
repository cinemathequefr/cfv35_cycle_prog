<script>
  import { onMount } from "svelte";
  import format from "../lib/format";
  import dayjs from "dayjs";
  import SousCycleFilms from "./SousCycleFilms.svelte";
  import SousCycleEvenements from "./SousCycleEvenements.svelte";
  import "../lib/dayjs_custom_locale_fr.js";

  // import { filmsImg } from "../store.js";

  import _ from "lodash";

  dayjs.locale("fr");

  export let datasrc;

  let header = { titreCycle: "" };
  let data = [];

  onMount(async () => {
    const res = await fetch(datasrc);
    const raw = await res.json();
    header = raw.header;
    data = raw.data;
    console.log(data);
  });
</script>

<style type="text/postcss">
  @media (min-width: 0px) {
    p {
      width: 100%;
    }
    .container {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    section > div {
      lost-waffle: 1/1;
    }
    .evenement-image {
      display: none;
    }
  }

  @media (min-width: 768px) {
    section > div {
      lost-waffle: 1/3;
    }
    .evenement-image {
      display: block;
    }
  }

  @media (min-width: 1440px) {
    .container {
      width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    section > div {
      lost-waffle: 1/4;
    }
  }
</style>

<div>

  <h1>{header.titreCycle}</h1>
  {#each data as sousCycle, i}
    {#if sousCycle.tri === 1}
      <SousCycleFilms data={sousCycle} />
    {:else if sousCycle.tri === 2 || sousCycle.tri === 3 || sousCycle.tri === 4}
      <SousCycleEvenements data={sousCycle} />
    {/if}
  {:else}Wait!{/each}

</div>
