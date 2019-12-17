<script>
  let y = 50;
  let elem;

  $: {
    if (y > 500) {
      elem.classList.add("vertical");
      console.log(elem);
    }
  }

  function rotate(node, { angle = 90 }) {
    return `transform: rotate(${angle}deg)`;
  }
</script>

<style>
  a#logo_cf_container {
    z-index: 100000;
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    display: inline-block;
    transition: 0.16667s;
    transform-origin: 50px 50px;
  }

  svg#logo_cf {
    position: relative;
    display: block;
    width: 350px;
    fill: #334;
  }

  a#logo_cf_container.vertical {
    transform: rotate(90deg);
  }
</style>

<svelte:window bind:scrollY={y} />

<a
  bind:this={elem}
  href="javascript: void 0;"
  id="logo_cf_container"
  class="vertical">
  <svg id="logo_cf" viewBox="0 0 1200 345">
    <polygon points="543.28 184.425 557.14 184.425 550.159 143.596 " />
    <path
      d="M0 0v345h1200V0H0zM175.16
      160.795H146.98v-18.82h-18.81v75.161h18.81v-18.811h28.181v28.18l-18.82
      18.62h-37.53L100 226.515v-93.909l18.81-18.801h37.53l18.82
      18.811V160.795zM218.37 231.955H190.2v-131.6h28.17V231.955zM308.59
      245.175h-28.18l-18.811-52.41v52.41h-28.17V113.756h28.17l18.811
      52.67v-52.67h28.18V245.175zM389.43
      141.735h-37.62v23.5h37.62v28.17h-37.62v23.49h37.62v27.99h-65.79v-131.32h65.79V141.735zM498.449
      244.886h-28.17v-46.801l-18.81 46.801
      -18.82-46.801v46.801h-28.17v-131.32h28.17l18.82 46.989
      18.81-46.989h28.17V244.886zM565.22 231.415h-0.011L562 212.605H538.32l-3.21
      18.81h-27.99l24.32-131.59h37.54l24.41 131.59H565.22zM673.27
      141.735H645.1v103.15h-28.18v-103.15h-28.261v-28.17h84.61V141.735zM757.89
      244.886h-28.18v-51.48H710.9v51.48h-28.18v-131.32h28.18v51.67h18.811v-51.67h28.18V244.886zM838.74
      141.735H801.1v23.5h37.64v28.17H801.1v23.49h37.64v27.99h-65.81v-131.32h65.81V141.735zM936.459
      244.705H872.59l-18.811-18.62v-93.909l18.811-18.801h37.529l18.811
      18.801v84.54l-9.36 9.35h16.89V244.705zM1019.15 213.136l-18.81
      18.81h-37.53l-18.82-18.81v-112.78h28.17v103.42h18.82v-103.42h28.17V213.136zM1100
      141.735h-37.631v23.5H1100v28.17h-37.631v23.49H1100v27.99h-65.801v-131.32H1100V141.735z" />
    <rect x="881.949" y="141.555" width="18.811" height="75.161" />
  </svg>
</a>
