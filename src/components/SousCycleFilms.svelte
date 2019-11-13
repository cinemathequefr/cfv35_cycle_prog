<script>
  export let data;
  import format from "../lib/format";
  import dayjs from "dayjs";
</script>

<style type="text/postcss">
  @lost flexbox flex;
  @lost gutter 12px;

  section > .waffle-container {
    lost-center: 100% 0px flex; /* http://lostgrid.org/docs.html#lost-center */
  }

  section > .waffle-container > div {
    lost-waffle: 1/4;
    min-height: 120px;
    background-color: var(--col3);
    color: var(--col1);
  }

  .evenement-image {
    width: 100%;
    background-color: #ccc;
    padding-bottom: 56.25%;
    margin-bottom: 8px;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>

<section>
  <h2>{data.titreSousCycle}</h2>
  <div class="waffle-container">
    {#each data.items as film}
      <div>
        <div
          class="evenement-image"
          style="background-image:url(img/films/{film.idFilm}-1.jpg)" />
        <a href="film/{film.idFilm}">
          {format.artTitre(film.art, film.titre, true)}
        </a>
        <div class="film-infos">{film.realisateurs}, {film.annee}</div>
        <ul class="seances-evenement">
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
