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
    .thru(d => [dayjs(_.min(d)).startOf("day"), dayjs(_.max(d)).startOf("day")])
    // .thru(d => [_.min(d), _.max(d)])
    .value();

  function stringOnly(d) {
    return typeof d === "string" ? d : "";
  }
</script>

<style type="text/postcss">
  .title-container {
    margin: 24px 0 0 0;
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

<div class="grid">
  <div class="col1">
    {#if !!(header.img && header.img.type)}
      {#if header.img.type === 'video'}
        <div class="iframe-container">
          <iframe
            title="Jean-Luc Godard - Bande-annonce"
            src={header.img.url}
            frameborder="0"
            allowfullscreen />
        </div>
      {/if}
    {/if}
    <div class="title-container">
      {#if header.titreSurcycle}
        <a class="surtitre" href="javascript:void 0;">{header.titreSurcycle}</a>
      {/if}
      <h1>{header.titreCycle}</h1>
      <div class="datesCycle">
        {#if header.typeCycle}
          {header.typeCycle}
          <br />
        {/if}
        {concatDates(minMaxDates[0].format(`D MMMM YYYY`), minMaxDates[1].format(`D MMMM YYYY`), ' ', 'du ', ' au ')}
        <!-- {concatDates(dayjs(minMaxDates[0]).format(`D MMMM YYYY`), dayjs(minMaxDates[1]).format(`D MMMM YYYY`), ' ', 'du ', ' au ')} -->
      </div>
    </div>
    {#if header.texte}
      <div class="cycle-texte">
        {@html header.texte}
      </div>
    {/if}
  </div>
  <div class="col2">

    <div class="texte-presentation">
      <a href="javascript: void 0;">
        <img
          src="https://www.cinematheque.fr/cache/media/programmation/films/pierrot-le-fou-godard/s,725-b29f64.jpg"
          alt="" />
        Honneur à votre ego, M. Godard, par Nicole Brenez
        <hr />
      </a>
    </div>
    <ul class="decouvrir">

<li><a href="javascript: void 0;">Parlons Cinéma avec Arnaud Desplechin&nbsp;: «&nbsp;Le Faux coupable&nbsp;» d'Alfred Hitchcock</a></li>
<li><a href="javascript: void 0;">Quel meilleur ami pour un garçon que sa mère&nbsp;? Conférence de Jean-François Rauger</a></li>
<li><a href="javascript: void 0;">«&nbsp;La Main au collet&nbsp;»&nbsp;: instantanés d'un tournage</a></li>
<li><a href="javascript: void 0;">Hitchcock, Anglais. Conférence de Bernard Benoliel</a></li>
<li><a href="javascript: void 0;">Alfred Hitchcock sur le web</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;Pas de printemps pour Marnie&nbsp;» (Alfred Hitchcock, 1963)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;La Mort aux trousses&nbsp;» (Alfred Hitchcock, 1958)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;Sueurs froides&nbsp;» (Alfred Hitchcock, 1957)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;La Main au collet&nbsp;» (Alfred Hitchcock, 1954)</a></li>
<li><a href="javascript: void 0;">Revue de presse du «&nbsp;Rideau déchiré&nbsp;» (Alfred Hitchcock, 1965)</a></li>
<li><a href="javascript: void 0;">Revue de presse du «&nbsp;Grand alibi&nbsp;» (Alfred Hitchcock, 1949)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;Complot de famille&nbsp;» (Alfred Hitchcock, 1975)</a></li>
<li><a href="javascript: void 0;">Revue de presse du «&nbsp;Faux coupable&nbsp;» (Alfred Hitchcock, 1956)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;La Corde&nbsp;» (Alfred Hitchcock, 1948)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;Fenêtre sur cour&nbsp;» (Alfred Hitchcock, 1953)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;Frenzy&nbsp;» (Alfred Hitchcock, 1971)</a></li>
<li><a href="javascript: void 0;">Revue de presse de «&nbsp;L'Étau&nbsp;» (Alfred Hitchcock, 1968)</a></li>
<li><a href="javascript: void 0;">Affiche américaine de «&nbsp;Sueurs froides&nbsp;» (Alfred Hitchcock, 1957)</a></li>
<li><a href="javascript: void 0;">Affiche américaine des «&nbsp;Oiseaux&nbsp;» (Alfred Hitchcock, 1962)</a></li>
<li><a href="javascript: void 0;">Affiche belge d'«&nbsp;Une femme disparaît&nbsp;» (Alfred Hitchcock, 1938)</a></li>
<li><a href="javascript: void 0;">«&nbsp;Vertigo&nbsp;», copie conforme</a></li>
<!--
  
      <li>
        <a href="javascript: void 0;">Godard en 5 motifs</a>
      </li>
      <li>
        <a href="javascript: void 0;">
          «&nbsp;Prénom Carmen&nbsp;» de Jean-Luc Godard&nbsp;: à propos de deux
          affiches
        </a>
      </li>
      <li>
        <a href="javascript: void 0;">
        <div class="icon-film"></div>
          Anna Karina, hommage&nbsp;: un montage d'Olivier Gonord
        </a>
      </li>
      <li>
        <a href="javascript: void 0;">Jean-Luc Godard sur le web</a>
      </li>
      <li>
        <a href="javascript: void 0;">Entretien avec Anna Karina (2001)</a>
      </li>
      <li>
        <a href="javascript: void 0;">
          Affiche finlandaise de «&nbsp;Pierrot le fou&nbsp;»
        </a>
      </li>
-->      
    </ul>

  </div>
</div>
