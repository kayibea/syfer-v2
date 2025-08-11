import type { Setting } from "types";

export let settings: Setting = $state({
  passphrase: "",
  syferMode: "encrypt",
  hardwareConcurrency: window.navigator.hardwareConcurrency,
});
