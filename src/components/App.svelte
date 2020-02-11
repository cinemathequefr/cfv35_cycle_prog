<script>
  import { onMount } from "svelte";
  import Menu from "./Menu.svelte";
  import CycleProg from "./CycleProg.svelte";
  import CycleIntro from "./CycleIntro.svelte";
  // import Eager from "./Eager.svelte";
  // import Logo from "./Logo.svelte";
  import { filmsImg } from "../store.js";

  let selected;
  let cycleData = {};
  let customCss = "2_1";
  filmsImg.fetch();

  $: customCss;

  const dataUrls = [
    [
      "Jean-Luc Godard",
      // "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL444_RENDER_DEF%20Jean-Luc%20Godard.json"
      "https://gist.githubusercontent.com/nltesown/8eb3ff41348c3543d63fc06a8d6a3e59/raw/4bfe1b3cf1ea95f8062528f3888c37f68e09aa01/jean-luc-godard.json"
    ],
    [
      "Cinéma bis : Vampires britanniques",
      "https://gist.githubusercontent.com/nltesown/ffa3e28d3e38ca4a3857abec13e516f7/raw/6c991c2064dd6153fce2636234c95e790c35cef0/bis-vampires-britanniques-.json"
    ],
    [
      "Vittorio De Sica",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL449_RENDER_DEF%20Vittorio%20De%20Sica.json"
    ],
    [
      "Aujourd'hui le cinéma novembre 2019-février 2020 ",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL140_RENDER_DEF%20Aujourd'hui%20le%20cin%C3%A9ma.json"
    ],
    [
      "Léonide Moguy",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL461_RENDER_DEF%20L%C3%A9onide%20Moguy.json"
    ],
    [
      "Alfred Hitchcock",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL442_RENDER_DEF%20Alfred%20Hitchcock.json"
    ],
    [
      "Anne-Marie Miéville",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL470_RENDER_DEF%20Anne-Marie%20Mi%C3%A9ville.json"
    ],
    [
      "Elia Suleiman",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL453_RENDER_DEF%20Elia%20Suleiman.json"
    ],
    [
      "James Ivory / Ismail Merchant",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL450_RENDER_DEF%20Merchant-Ivory.json"
    ],
    [
      "Jia Zhangke",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL464_RENDER_DEF%20Jia%20Zhangke.json"
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
      "Kira Mouratova",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL439_RENDER_DEF%20Kira%20Mouratova.json"
    ],
    [
      "Mauro Bolognini",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL395_RENDER_DEF%20Mauro%20Bolognini.json"
    ],
    [
      "Arnaud Desplechin",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL365_RENDER_DEF%20Arnaud%20Desplechin.json"
    ],
    [
      "Guy Debord",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL351_RENDER_DEF%20Guy%20Debord.json"
    ],
    [
      "James Gray",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL341_RENDER_DEF%20James%20Gray.json"
    ],
    [
      "Sterling Hayden",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL337_RENDER_DEF%20Sterling%20Hayden.json"
    ],
    [
      "Nicholas Ray",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG61%20Septembre-novembre%202019/PROG61_CYCL229_RENDER_DEF%20Nicholas%20Ray.json"
    ],
    [
      "John Cassavetes",
      "https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG60%20Juin-juillet%202019/PROG60_CYCL426_RENDER%20John%20Cassavetes.json"
    ],
    [
      "Éric Rohmer",
      "https://gist.githubusercontent.com/nltesown/5254b4a3530da9a4d5b06168b99b1525/raw/9b6af7e925ea1700a27030ba1138800c39ed985a/rohmer_RENDER.json"
    ],
    [
      "Raoul Ruiz",
      "https://gist.githubusercontent.com/nltesown/230d4ad3e3c7984d2f8a6b2e699578e6/raw/a18f9e6becdbf59401b9363512d93d634a0ce1e8/PROG27_CYCL128_RENDER%2520Raoul%2520Ruiz.json"
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

<style>
  .selector {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0;
    display: inline-block;
    background-color: #223;
  }

  .selector > select {
    font-size: 0.875rem !important;
    margin: 4px !important;
  }

  .selector > select > option {
    font-size: 0.875rem !important;
  }
</style>

<svelte:head>
  {#if customCss !== ''}
    <link rel="stylesheet" href="css/custom/{customCss}.css" />
  {/if}
</svelte:head>

<!-- Sélecteur de cycle -->
<div class="selector">
  <select
    style="margin-bottom: 128px;"
    bind:value={selected}
    on:change={fetchData}>
    {#each dataUrls as dataUrl}
      <option value={dataUrl[1]}>{dataUrl[0]}</option>
    {/each}
  </select>
  <select style="margin-bottom: 128px;" bind:value={customCss}>
    <option value="1_0">1.0</option>
    <option value="2_0">2.0</option>
    <option value="2_1">2.1</option>
  </select>

</div>
<!--
  <pre>
    <code>{JSON.stringify(cycleData, null, 2)}</code>
  </pre>
-->
<!-- 
<Eager>
  <div class="menu">
    <div class="container">Coco</div>
  </div>
</Eager>
 -->

<!-- <Menu />
<section>
  <div class="container">
    <CycleIntro header={cycleData.header} data={cycleData.data} />
  </div>
</section> -->
<CycleProg header={cycleData.header} data={cycleData.data} />
