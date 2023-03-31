import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    backgroundColor: "black",
    textColor: "white",
    scroll: true,
    coins: [
      {
        label: "Bitcoin",
        id: "bitcoin", // coinGecko Api
      },
      {
        label: "Ethereum",
        id: "ethereum", // coinGecko Api
      },
      {
        label: "Shiba Inu",
        id: "shiba-inu",
      },
      {
        label: "Polkadot",
        id: "binance-peg-polkadot",
      },
      {
        label: "cardano",
        id: "binance-peg-cardano",
      },
    ],
  },
});

export default app;
