<script>
  export let header = { titreCycle: "" };
  export let data = [];

  import { concatDates } from "../lib/format.js";
  import dayjs from "dayjs";
  dayjs.locale("fr");
  import "../lib/dayjs_custom_locale_fr.js";
  import _ from "lodash";

  // La première et dernière date de séances du cycle
  $: minMaxDates = _(data)
    .map(d =>
      _(d.items)
        .map(e =>
          _(e.seance)
            .map(f => f.dateHeure)
            .value()
        )
        .value()
    )
    .flattenDeep()
    .thru(d => [_.min(d), _.max(d)])
    .value();

  function stringOnly(d) {
    return typeof d === "string" ? d : "";
  }
</script>

<style type="text/postcss">
  /* @lost flexbox flex;

  section {
    lost-center: 100%;
  }
  .col1 {
    lost-column: 7/12;
    min-height: 300px;
  }
  .col2 {
    lost-column: 5/12;
  } */

  .title-container {
    margin: 24px 0 0 0;
    outline: solid 1px red;
  }

  a.surtitre {
    display: inline-block;
    background-color: #ccc;
    color: #000;
    padding: 4px 12px;
    margin-bottom: 12px;
    font-family: Quicksand;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.05rem;
  }
</style>

<!--
<div>
  {#if header.titreSurcycle}
    <a class="surtitre" href="javascript:void 0;">{header.titreSurcycle}</a>
  {/if}
</div>
<div class="typeCycle">Rétrospective</div>
<h1>{header.titreCycle}</h1>
<div class="datesCycle">
  {concatDates(dayjs(minMaxDates[0]).format(`D MMMM YYYY`), dayjs(minMaxDates[1]).format(`D MMMM YYYY`), ' ', '', '-')}
</div>
-->

<div class="row">
  <div class="col1">

    <div class="iframe-container">
      <iframe
        title="Jean-Luc Godard - Bande-annonce"
        src="//player.vimeo.com/video/371593713"
        frameborder="0"
        allowfullscreen />
    </div>

    <div class="title-container">
      {#if header.titreSurcycle}
        <a class="surtitre" href="javascript:void 0;">{header.titreSurcycle}</a>
      {/if}
      <h1>{header.titreCycle}</h1>
      <div class="datesCycle">
        Rétrospective
        <br />
        {concatDates(dayjs(minMaxDates[0]).format(`D MMMM YYYY`), dayjs(minMaxDates[1]).format(`D MMMM YYYY`), ' ', 'du ', ' au ')}
      </div>
    </div>

    <!-- <img
      src="img/cycles/{header.idCycleProg}-1.jpg"
      alt="Godard"
      width="100%" /> -->

    <!-- {@html stringOnly(header.texte)} -->
    <div class="cycle-texte">
      {@html "<p>Il y a soixante ans, <em>À bout de souffle</em> sortait sur les écrans. Depuis, le nom de Godard est pour les cinéphiles du monde entier le mot de passe qui embrasse tout à la fois la liberté de la Nouvelle Vague et la modernité la plus intransigeante. En artiste majeur, Godard a ses périodes et ses ruptures&nbsp;: à l'éclat romanesque du <em>Mépris</em> et de <em>Pierrot le fou</em> succèdent les années politiques (le groupe Dziga-Vertov), puis les années vidéo, où le cinéma se fait rigoureux outil d'investigation. Il revient à la fiction à l'aube des années 80, plus libre que jamais (<em>Sauve qui peut (la vie)</em>, <em>Prénom Carmen</em>, <em>Nouvelle Vague</em>). Ses œuvres tardives sont des méditations nourries d'un profond sens de l'Histoire et du tragique. Godard, le dernier des romantiques.</p>"}
    </div>
  </div>
  <div class="col2" />
</div>
