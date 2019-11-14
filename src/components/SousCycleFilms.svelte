<script>
  export let data;
  import format from "../lib/format";
  import dayjs from "dayjs";
</script>

<style type="text/postcss">

</style>

<section>
  <h2>{data.titreSousCycle}</h2>
  <div class="waffle-container">
    {#each data.items as film}
      <div>
        <div
          class="evenement-image"
          style="background-image:url(img/films/{film.idFilm}-1.jpg)" />

        <ul class="items-evenement">
          <li>

            <a href="film/{film.idFilm}">
              {format.artTitre(film.art, film.titre, true)}
            </a>
            <div class="film-infos">{film.realisateurs}, {film.annee}</div>
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
