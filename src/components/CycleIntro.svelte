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

<div class="row">
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
        {concatDates(dayjs(minMaxDates[0]).format(`D MMMM YYYY`), dayjs(minMaxDates[1]).format(`D MMMM YYYY`), ' ', 'du ', ' au ')}
      </div>
    </div>
    {#if header.texte}
      <div class="cycle-texte">
        {@html header.texte}
      </div>
    {/if}
  </div>
  <div class="col2" />
</div>
