<script>
  // import { onMount } from "svelte";
  import CycleProg from "./CycleProg.svelte";
  import { filmsImg } from "../store.js";

  filmsImg.fetch();
</script>

<style type="text/postcss">
  @import "src/colors.css";

  .container {
    width: 1100px;
    margin: 36px auto;
    padding: 15px;
    background-color: var(--col3);
  }
</style>

<div class="container">

  <CycleProg
    datasrc="https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL449_RENDER_DEF%20Vittorio%20De%20Sica.json" />

  <CycleProg
    datasrc="https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL444_RENDER_DEF%20Jean-Luc%20Godard.json" />

</div>
