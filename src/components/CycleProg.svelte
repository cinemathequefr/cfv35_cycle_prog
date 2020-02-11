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
</script>

<style type="text/postcss">
  h2 {
    margin-bottom: 1.25rem;
  }
</style>

<section>
  <div class="container">
    {#each data as sousCycle, i}
      {#if sousCycle.tri === 1}
        <div class="sous-cycle">
          <h2>{sousCycle.titreSousCycle}</h2>
          <div class="sous-cycle-text-container">
            {#each sousCycle.textes || [] as texte}
              <p>{texte.texte}</p>
            {/each}
          </div>
          <div class="cards-container">
            {#each sousCycle.items as film}
              <div class="card">

                <div class="subcard">

                  <div
                    class="evenement-image"
                    style="background-image:url(https://www.cinematheque.fr/cache/media/{$filmsImg[film.idFilm]})" />
                  <ul class="items-evenement">
                    <li>
                      <a
                        class="titre"
                        href="https://www.cinematheque.fr/film/{film.idFilm}.html">
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

              </div>
            {/each}
          </div>
        </div>
      {:else if sousCycle.tri === 2 || sousCycle.tri === 3 || sousCycle.tri === 4}
        <div class="sous-cycle">
          <h2>{sousCycle.titreSousCycle}</h2>
          <div class="sous-cycle-text-container">
            {#each sousCycle.textes || [] as texte}
              <p>{texte.texte}</p>
            {/each}
          </div>

          <div class="cards-container">
            {#each sousCycle.items as evenement}
              <div class="card">
                <div class="subcard">

                  <div
                    class="evenement-image"
                    style="background-image:url(https://www.cinematheque.fr/cache/media/{$filmsImg[evenement.films[evenement.films.length - 1].idFilm]})" />
                  <div class="titre-evenement">
                    {evenement.titreEvenement || ''}
                  </div>
                  <ul class="items-evenement">
                    {#each evenement.films as film}
                      <li>
                        <a
                          class="titre"
                          href="https://www.cinematheque.fr/film/{film.idFilm}.html">
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

              </div>
            {/each}
          </div>
        </div>
      {/if}
    {:else}{/each}
  </div>
</section>
