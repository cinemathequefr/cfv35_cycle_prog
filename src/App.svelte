<script>
  import { onMount } from "svelte";
  import format from "./lib/format";
  import dayjs from "dayjs";
  import "./lib/dayjs_custom_locale_fr.js";
  dayjs.locale("fr");

  let header = [];
  let data = [];

  onMount(async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/cinemathequefr/app_notules3/master/data/PROG65%20D%C3%A9cembre%202019-f%C3%A9vrier%202020/PROG65_CYCL444_RENDER_DEF%20Jean-Luc%20Godard.json`
    );

    const raw = await res.json();
    header = raw.header;
    data = raw.data;
  });
</script>

<style type="text/postcss">
  @lost flexbox flex;
  @lost gutter 12px;

  :root {
    /* --cycle-text: #de0126; */
    --cycle-text: #936;

    --col1: #111;
    --col2: #69f;
    --col3: #fff;
    --col4: #333;
    --col5: #666;
    --col6: #999;
  }

  .container {
    width: 1100px;
    margin: 36px auto;
    padding: 15px;
    background-color: var(--col3);
  }

  h1,
  h2 {
    color: var(--cycle-text);
  }

  h2 {
    font-weight: 900;
  }

  p {
    padding: 12px 0;
    width: 66.67%;
  }

  section {
    lost-center: 100% 0px flex; /* http://lostgrid.org/docs.html#lost-center */
  }

  section > div {
    lost-waffle: 1/4;
    min-height: 120px;
    background-color: var(--col3);
    color: var(--col1);
  }

  .titre-evenement {
    color: var(--col1);
    font-size: 1.25rem;
    padding-bottom: 0.75rem;
  }

  ul.items-evenement {
    margin-bottom: 16px;
    line-height: 1.25;
  }

  ul.items-evenement > li {
    margin-left: 0px;
    margin-bottom: 2px;
    padding-left: 6px;
    border-left: solid 3px #ccc;
  }

  ul.items-evenement > li > a {
    color: var(--cycle-text);
  }

  ul.seances-evenement > li {
    padding-bottom: 3px;
  }

  ul.seances-evenement > li > a {
    display: block;
    width: 10em;
    border: solid 1px var(--col5);
    padding: 4px;
    color: var(--col4);
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;
    transition: 100ms;
  }

  ul.seances-evenement > li > a:hover,
  ul.seances-evenement > li > a:active {
    border: solid 1px var(--col1);
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

  .film-infos {
    font-size: 0.875rem;
  }

  /* @media (min-width: 369px) { */
  @media (min-width: 0px) {
    p {
      width: 100%;
    }
    .container {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    section > div {
      lost-waffle: 1/1;
    }
    .evenement-image {
      display: none;
    }
  }

  @media (min-width: 768px) {
    section > div {
      lost-waffle: 1/3;
    }
    .evenement-image {
      display: block;
    }
  }

  @media (min-width: 1440px) {
    .container {
      width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    section > div {
      lost-waffle: 1/4;
    }
  }
</style>

<div class="container">
  <h1>{header.titreCycle}</h1>
  {#each data as sousCycle, i}
    <h2>{sousCycle.titreSousCycle}</h2>
    <p>
      At nunc si Jean-Luc Godard ad aliquem bene nummatum tumentemque ideo
      honestus advena Nouvelle Vague salutatum introieris, primitus tamquam
      exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis
      numquam antea visus summatem virum tenuem Godard te sic enixius
      observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante
      decennium Romam.
    </p>
    <section>
      {#each sousCycle.items as evenement}
        <div>
          <div
            class="evenement-image"
            style="background-image:url(img/films/{evenement.films[evenement.films.length - 1].idFilm}-1.jpg)" />
          <div class="titre-evenement">{evenement.titreEvenement || ''}</div>
          <ul class="items-evenement">
            {#each evenement.films as film}
              <li>
                <a href="film/{film.idFilm}">
                  {format.artTitre(film.art, film.titre)}
                </a>
                <div class="film-infos">{film.realisateurs}, {film.annee}</div>
              </li>
            {/each}
          </ul>
          <ul class="seances-evenement">
            {#each evenement.seance as seance}
              <li>
                <a href="javascript: void 0;">
                  {dayjs(seance.dateHeure).format(`dd D MMM HH[h]mm`)}
                  <!-- Salle {seance.idSalle[0]} -->
                </a>
              </li>
            {/each}

          </ul>
        </div>
      {/each}
    </section>
  {/each}
</div>
