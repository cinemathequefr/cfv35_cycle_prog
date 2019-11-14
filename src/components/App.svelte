<script>
  import { onMount } from "svelte";
  import CycleProg from "./CycleProg.svelte";
  import { filmsImg } from "../store.js";

  filmsImg.fetch();
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

  :global(ul.seances) {
    margin-top: 8px;
  }

  :global(ul.seances > li) {
    padding-bottom: 3px;
  }

  :global(ul.seances > li > a) {
    display: block;
    width: 8em;
    border: solid 1px #000;
    padding: 4px;
    color: #000;
    text-align: center;
    font-size: 0.938rem;
    font-weight: 400;
    text-decoration: none;
    transition: 100ms;
  }

  :global(.waffle-container) {
    lost-center: 100% 0px flex; /* http://lostgrid.org/docs.html#lost-center */
  }

  :global(.waffle-container > div) {
    padding-bottom: 18px;
    /* outline: solid 1px red; */
  }

  @media (min-width: 0px) {
    :global(.container) {
      width: 90%;
    }
    :global(.waffle-container > div) {
      lost-waffle: 1/1;
    }
    :global(.evenement-image) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    :global(.waffle-container > div) {
      lost-waffle: 1/3;
    }
    :global(.evenement-image) {
      display: block;
    }
  }
  @media (min-width: 1440px) {
    :global(.container) {
      width: 1100px;
    }

    :global(.waffle-container > div) {
      lost-waffle: 1/4;
    }
  }
</style>

<div class="container">
  <CycleProg
    datasrc="https://gist.githubusercontent.com/nltesown/5254b4a3530da9a4d5b06168b99b1525/raw/9b6af7e925ea1700a27030ba1138800c39ed985a/rohmer_RENDER.json" />

  <!--

  <CycleProg
    datasrc="https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL449_RENDER_DEF%20Vittorio%20De%20Sica.json" />

  <CycleProg
    datasrc="https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL444_RENDER_DEF%20Jean-Luc%20Godard.json" />
-->
</div>
