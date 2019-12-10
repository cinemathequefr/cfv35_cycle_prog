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
  @lost flexbox flex;

  section {
    lost-center: 100%;
  }
  .col1 {
    lost-column: 7/12;
    min-height: 300px;
  }
  .col2 {
    lost-column: 5/12;
    /* min-height: 300px; */
  }

  /* h1 {
    margin: 6px 0 12px 0;
  } */

  a.surtitre {
    display: inline-block;
    background-color: #ccc;
    color: #000;
    padding: 4px 12px;
    margin-bottom: 12px;
    font-family: Nunito Sans;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.05rem;
  }

  .datesCycle {
    font-family: Nunito Sans;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -0.05rem;
    margin-top: 12px;
    margin-bottom: 24px;
  }
</style>

<div>
  {#if header.titreSurcycle}
    <a class="surtitre" href="javascript:void 0;">{header.titreSurcycle}</a>
  {/if}
</div>
<h1>{header.titreCycle}</h1>
<div class="datesCycle">
  {concatDates(dayjs(minMaxDates[0]).format(`D MMMM YYYY`), dayjs(minMaxDates[1]).format(`D MMMM YYYY`), ' ', 'Du ', ' au ')}
</div>
<section>
  <div class="col1">
    {@html stringOnly(header.texte)}
  </div>
  <div class="col2" />
</section>
