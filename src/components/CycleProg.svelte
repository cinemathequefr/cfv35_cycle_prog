<script>
  import dayjs from "dayjs";
  import showdown from "showdown";
  dayjs.locale("fr");
  import "../lib/dayjs_custom_locale_fr.js";
  import { nbsp, beforeAfterStr as ba, artTitre, join } from "../lib/format";
  import { filmsImg } from "../store.js";
  export let data = [];
  const converter = new showdown.Converter();
</script>

<style>

</style>

<section>
  <div class="container">
    {#each data as sousCycle, i}
      <div class="sous-cycle">
        <h2>{sousCycle.titreSousCycle}</h2>
        <div class="sous-cycle-text-container">
          {#each sousCycle.textes || [] as texte}
            {@html nbsp(converter.makeHtml(texte.texte))}
          {/each}
        </div>
        {#if sousCycle.tri === 1}
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
                        {@html join('<br>', [
                          artTitre(film.art, film.titre),
                          film.sousTitre
                        ])}
                      </a>
                      {@html ba(`<div class="film-infos">`, `</div>`, join(
                          ', ',
                          [film.realisateurs, film.annee]
                        ))}
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
        {:else if sousCycle.tri === 2 || sousCycle.tri === 3 || sousCycle.tri === 4}
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
                          {@html join('<br>', [
                            artTitre(film.art, film.titre),
                            film.sousTitre
                          ])}
                        </a>
                        {@html ba(`<div class="film-infos">`, `</div>`, join(
                            ', ',
                            [film.realisateurs, film.annee]
                          ))}
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
        {/if}

      </div>
    {/each}
  </div>
</section>
