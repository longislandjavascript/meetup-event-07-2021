<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let coins: Coin[] | null = null;
  export let backgroundColor: string = "dodgerblue";
  export let textColor: string = "white";
  export let scroll: boolean = true;

  let values: FormattedCoin[] | null = null;
  let interval = null;

  function formattedCurrency(value: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  function handleFetch() {
    fetchData().then((data) => {
      values = data;
    });
  }

  onMount(() => {
    handleFetch();
    interval = setInterval(() => {
      handleFetch();
    }, 5000);
  });

  onDestroy(() => {
    // stop interval
    clearInterval(interval);
  });

  type Coin = {
    label: string;
    id: string;
  };

  interface FormattedCoin extends Omit<Coin, "id"> {
    value: number;
  }

  async function fetchData() {
    const idQueryString = coins.reduce((accumulator, value) => {
      return accumulator + value.id + "%2C";
    }, "");

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idQueryString}&vs_currencies=usd`;

    const response = await fetch(url);
    const data = (await response.json()) as Record<string, { usd: number }>;

    const formattedData = coins.map((coin) => {
      return {
        label: coin.label,
        value: data[coin.id].usd,
      };
    });

    return formattedData;
  }
</script>

<article
  class="wrapper"
  style={`background-color: ${backgroundColor}; color: ${textColor}`}
>
  {#if !values}
    <div>No data</div>
  {:else}
    <div class={`result ${scroll ? "animation" : ""}`}>
      {#each values as value (value.label)}
        <p>{value.label} {formattedCurrency(value.value)}</p>
      {/each}
    </div>
  {/if}
</article>

<style>
  .wrapper {
    padding: 10px;
    display: flex;
    overflow: hidden;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .animation {
    white-space: none;
    animation: floatText 15s infinite linear;
    padding-left: 100%;
  }

  .animation:hover {
    animation-play-state: paused;
  }

  @keyframes floatText {
    to {
      transform: translateX(-100%);
    }
  }
</style>
