<script lang="ts">
  import { syferModes } from "constants/app";
  import { settings } from "runes/app.svelte";

  type Props = {
    start: () => void;
    clearQueue: () => void;
  };

  let { start, clearQueue }: Props = $props();
  let isMouseOverPass = $state(false);
</script>

<header>
  <div class="toolbar">
    <input
      bind:value={settings.passphrase}
      onmouseenter={() => (isMouseOverPass = true)}
      onmouseleave={() => (isMouseOverPass = false)}
      type={isMouseOverPass ? "text" : "password"}
      placeholder="Passphrase"
    />
    <select bind:value={settings.syferMode}>
      {#each syferModes as mode}
        <option value={mode}
          >{mode.charAt(0).toUpperCase() + mode.slice(1).toLowerCase()}</option
        >
      {/each}
    </select>
    <button onclick={start}>Start</button>
    <button onclick={clearQueue}>Clear Queue</button>
  </div>
</header>

<style>
  header {
    background: #222;
    color: white;
    padding: 10px;
  }

  .toolbar {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .toolbar input,
  .toolbar select,
  .toolbar button {
    padding: 5px;
    border-radius: 4px;
    border: none;
  }

  @media (max-width: 768px) {
    .toolbar {
      flex-direction: column;
    }
  }
</style>
