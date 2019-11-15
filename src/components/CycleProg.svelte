<script>
  // import { onMount } from "svelte";
  // import _ from "lodash";
  import dayjs from "dayjs";
  dayjs.locale("fr");
  import "../lib/dayjs_custom_locale_fr.js";
  import format from "../lib/format";
  import { filmsImg } from "../store.js";

  export let header = { titreCycle: "" };
  export let data = [];

  // let header = { titreCycle: "" };
  // let data = [];

  // onMount(async () => {
  //   const res = await fetch(datasrc);
  //   const raw = await res.json();
  //   header = raw.header;
  //   data = raw.data;
  // });
</script>

<style type="text/postcss">

</style>

<div>
  <!-- <h1>{header.titreCycle}</h1> -->
  {#each data as sousCycle, i}
    {#if sousCycle.tri === 1}
      <section>
        <h2>{sousCycle.titreSousCycle}</h2>
        <div class="sous-cycle-text-container">
          <p>
            In mauris nulla, sollicitudin vel consectetur ut, condimentum eu mi.
            Aenean in placerat mi, non suscipit est. Quisque ultricies ultricies
            accumsan. Integer imperdiet id urna vitae eleifend. Maecenas
            ultricies nec elit ac tincidunt. Morbi lorem massa, pulvinar sit
            amet mi sit amet, tincidunt molestie orci. Nulla congue iaculis
            turpis, sed ultrices diam iaculis id. Aliquam eros neque, sodales
            quis venenatis eu, sollicitudin non lectus. Nam sed ex placerat,
            pretium diam sed, maximus odio. Mauris semper magna ligula, nec
            aliquam metus efficitur at. Sed nec nibh et enim vestibulum
            consectetur ut id felis. Praesent sodales suscipit dolor, a dapibus
            metus condimentum sed. Integer sit amet volutpat.
          </p>
        </div>
        <div class="waffle-container">
          {#each sousCycle.items as film}
            <div>
              <div
                class="evenement-image"
                style="background-image:url(https://www.cinematheque.fr/cache/media/{$filmsImg[film.idFilm]})" />
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
        <div class="sous-cycle-text-container">
          <p>
            In mauris nulla, sollicitudin vel consectetur ut, condimentum eu mi.
            Aenean in placerat mi, non suscipit est. Quisque ultricies ultricies
            accumsan. Integer imperdiet id urna vitae eleifend. Maecenas
            ultricies nec elit ac tincidunt. Morbi lorem massa, pulvinar sit
            amet mi sit amet, tincidunt molestie orci. Nulla congue iaculis
            turpis, sed ultrices diam iaculis id. Aliquam eros neque, sodales
            quis venenatis eu, sollicitudin non lectus. Nam sed ex placerat,
            pretium diam sed, maximus odio. Mauris semper magna ligula, nec
            aliquam metus efficitur at. Sed nec nibh et enim vestibulum
            consectetur ut id felis. Praesent sodales suscipit dolor, a dapibus
            metus condimentum sed. Integer sit amet volutpat.
          </p>
        </div>

        <div class="waffle-container">
          {#each sousCycle.items as evenement}
            <div>
              <div
                class="evenement-image"
                style="background-image:url(https://www.cinematheque.fr/cache/media/{$filmsImg[evenement.films[evenement.films.length - 1].idFilm]})" />
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
</div>
