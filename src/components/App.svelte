<script>
  import { onMount } from "svelte";
  import CycleProg from "./CycleProg.svelte";
  import { filmsImg } from "../store.js";

  let selected;
  let cycleData = {};

  filmsImg.fetch();

  const dataUrls = [
    [
      "Vittorio De Sica",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL449_RENDER_DEF%20Vittorio%20De%20Sica.json"
    ],
    [
      "Alfred Hitchcock",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL442_RENDER_DEF%20Alfred%20Hitchcock.json"
    ],
    [
      "Jean-Luc Godard",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL444_RENDER_DEF%20Jean-Luc%20Godard.json"
    ],
    [
      "James Ivory / Ismail Merchant",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL450_RENDER_DEF%20Merchant-Ivory.json"
    ],
    [
      "Musidora",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL452_RENDER_DEF%20Musidora.json"
    ],
    [
      "Philippe Garrel",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL438_RENDER_DEF%20Philippe%20Garrel.json"
    ],
    [
      "John Cassavetes",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG60%20Juin-juillet%202019/PROG60_CYCL426_RENDER%20John%20Cassavetes.json"
    ],
    [
      "Eric Rohmer",
      "https://gist.githubusercontent.com/nltesown/5254b4a3530da9a4d5b06168b99b1525/raw/9b6af7e925ea1700a27030ba1138800c39ed985a/rohmer_RENDER.json"
    ]
  ];

  onMount(async () => {
    await fetchData({ target: { value: dataUrls[0][1] } });
  });

  async function fetchData(e) {
    const res = await fetch(e.target.value);
    cycleData = await res.json();
  }
</script>

<style type="text/postcss">
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
  @import "src/colors.css";
  @import "src/global.css";
  @lost flexbox flex;
  @lost gutter 12px;

  :global(body) {
    background-color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
  }

  :global(a) {
    color: var(--main-link);
    text-decoration: none;
  }

  :global(a:hover, a:active) {
    text-decoration: underline;
  }

  :global(ul, li) {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  :global(h1, h2, h3) {
    font-family: Quicksand;
    font-weight: 700;
    text-transform: uppercase;
  }

  :global(.container) {
    margin: 36px auto;
    padding: 15px;
    background-color: var(--col3);
  }

  :global(.titre-evenement) {
    color: var(--col1);
    font-size: 1.25rem;
    padding-bottom: 0.75rem;
  }

  :global(.evenement-image) {
    width: 100%;
    background-color: #ccc;
    padding-bottom: 56.25%;
    margin-bottom: 8px;
    background-size: cover;
    background-position: 50% 50%;
  }

  :global(ul.items-evenement > li) {
    margin-left: 0px;
    margin-bottom: 2px;
    padding-left: 6px;
    border-left: solid 3px #ccc;
  }

  :global(.film-infos) {
    font-size: 0.875rem;
  }

  :global(ul.seances) {
    margin-top: 8px;
  }

  :global(ul.seances > li) {
    display: inline-block;
    padding: 0 0 2px 2px;
  }

  :global(ul.seances > li > a) {
    display: inline-block;
    width: 9em;
    border: solid 1px #000;
    padding: 4px;
    color: #000;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;
    transition: 100ms;
  }

  :global(ul.seances > li > a:hover, ul.seances > li > a:hover) {
    background-color: #b2ccff;
  }

  :global(.waffle-container) {
    lost-center: 100% 0px flex; /* http://lostgrid.org/docs.html#lost-center */
    padding-bottom: 12px;
  }

  :global(.waffle-container > div) {
    padding-bottom: 18px;
    /* outline: solid 1px red; */
  }

  /* @media (min-width: 0px) { */
  :global(.container) {
    width: 90%;
  }
  :global(.waffle-container > div) {
    lost-waffle: 1/1;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  :global(.evenement-image) {
    display: none;
  }

  :global(.sous-cycle-text-container) {
    margin: 0 0 24px 0;
    width: 100%;
  }
  /* } */

  @media (min-width: 640px) {
    :global(.waffle-container > div) {
      padding-bottom: 18px;
      lost-waffle: 1/2;
    }
    :global(.evenement-image) {
      display: block;
    }
  }

  @media (min-width: 768px) {
    :global(.waffle-container > div) {
      lost-waffle: 1/3;
    }
  }

  @media (min-width: 1280px) {
    :global(.container) {
      width: 1100px;
    }

    :global(.waffle-container > div) {
      lost-waffle: 1/4;
    }

    :global(.sous-cycle-text-container) {
      width: 66.67%;
    }
  }
</style>

<div class="container">

  <select bind:value={selected} on:change={fetchData}>
    {#each dataUrls as dataUrl}
      <option value={dataUrl[1]}>{dataUrl[0]}</option>
    {/each}
  </select>

  <!-- <pre>
    <code>{JSON.stringify(cycleData, null, 2)}</code>
  </pre> -->

  <CycleProg header={cycleData.header} data={cycleData.data} />
</div>
