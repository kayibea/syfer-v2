<script lang="ts">
  // import type { Setting } from "types";
  import { settings } from 'runes/app.svelte';

  // type Props = {
  //   settings: Setting;
  // };

  // let { settings = $bindable() }: Props = $props();
</script>

<section class="settings">
  <h2>Encryption Settings</h2>
  <!-- <label>
    Algorithm:
    <select id="algorithm">
      <option value="AES-GCM">AES-GCM</option>
      <option value="AES-CBC">AES-CBC</option>
    </select>
  </label> -->
  <!-- <label>
    Iterations:
    <input type="number" id="iterations" min="1" value="100000" />
  </label> -->
  <!-- 
        onchange={(e: Event) =>
        (hardwareConcurrency = parseInt((e.target as HTMLInputElement).value))} -->
  <label>
    Threads:
    <input bind:value={settings.hardwareConcurrency} type="range" min="1" max={window.navigator.hardwareConcurrency} />
    <span>{settings.hardwareConcurrency}</span>
  </label>
</section>

<style>
  .settings {
    background: white;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
  }

  .settings label {
    display: block;
    margin-bottom: 10px;
  }
</style>
