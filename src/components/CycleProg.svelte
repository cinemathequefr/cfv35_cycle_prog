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

</style>

<div>

  <h1>{header.titreCycle}</h1>
  {#each data as sousCycle, i}
    {#if sousCycle.tri === 1}
      <section>
        <h2>{sousCycle.titreSousCycle}</h2>
        <div class="waffle-container">
          {#each sousCycle.items as film}
            <div>
              <div
                class="evenement-image"
                style="background-image:url(img/films/{film.idFilm}-1.jpg)" />

              <ul class="items-evenement">
                <li>

                  <a href="film/{film.idFilm}">
                    {format.artTitre(film.art, film.titre, true)}
                  </a>
                  <div class="film-infos">
                    {film.realisateurs}, {film.annee}
                  </div>
                </li>
              </ul>

              <ul class="seances">
                {#each film.seance as seance}
                  <li>
                    <a href="javascript: void 0;">
                      {dayjs(seance.dateHeure).format(`dd D MMM HH[h]mm`)}
                      {seance.idSalle[0]}
                    </a>
                  </li>
                {/each}
              </ul>

            </div>
          {/each}
        </div>
      </section>
    {:else if sousCycle.tri === 2 || sousCycle.tri === 3 || sousCycle.tri === 4}
      <section>
        <h2>{sousCycle.titreSousCycle}</h2>
        <div class="waffle-container">
          {#each sousCycle.items as evenement}
            <div>
              <div
                class="evenement-image"
                style="background-image:url(img/films/{evenement.films[evenement.films.length - 1].idFilm}-1.jpg)" />
              <div class="titre-evenement">
                {evenement.titreEvenement || ''}
              </div>
              <ul class="items-evenement">
                {#each evenement.films as film}
                  <li>
                    <a href="film/{film.idFilm}">
                      {format.artTitre(film.art, film.titre)}
                    </a>
                    <div class="film-infos">
                      {film.realisateurs}, {film.annee}
                    </div>
                  </li>
                {/each}
              </ul>
              <ul class="seances">
                {#each evenement.seance as seance}
                  <li>
                    <a href="javascript: void 0;">
                      {dayjs(seance.dateHeure).format(`dd D MMM HH[h]mm`)}
                      {seance.idSalle[0]}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </section>
    {/if}
  {:else}Wait!{/each}

  <!--
  <h1>{header.titreCycle}</h1>
  {#each data as sousCycle, i}
    {#if sousCycle.tri === 1}
      <SousCycleFilms data={sousCycle} />
    {:else if sousCycle.tri === 2 || sousCycle.tri === 3 || sousCycle.tri === 4}
      <SousCycleEvenements data={sousCycle} />
    {/if}
  {:else}Wait!{/each}
-->
</div>
