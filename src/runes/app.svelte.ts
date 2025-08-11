import type { Setting } from 'types';

export let settings: Setting = $state({
  passphrase: 'hello world !',
  syferMode: 'encrypt',
  hardwareConcurrency: window.navigator.hardwareConcurrency,
});
