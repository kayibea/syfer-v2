<script lang="ts">
  import { onMount } from "svelte";
  import { type fileQueueItem, FileStatus } from "types";
  import { settings } from "runes/app.svelte";
  import Header from "./Components/Header.svelte";
  import Settings from "./Components/Settings.svelte";
  import DropZone from "./Components/DropZone.svelte";
  import QueueList from "./Components/QueueList.svelte";

  let fileQueue = $state<fileQueueItem[]>([]);

  // const abortCtrl = new AbortController();

  onMount(() => {
    //
  });

  function startDecryption() {
    //
  }

  function startEncryption() {
    //
  }

  function start(): void {
    if (!fileQueue.find((item) => item.status === FileStatus.Pending))
      return window.alert("No file is in pending status in the queue list.");

    if (settings.passphrase.length < 1)
      return window.alert(
        "Passphrase cannot be empty. Please enter a valid passphrase."
      );

    switch (settings.syferMode) {
      case "encrypt":
        startEncryption();
      case "decrypt":
        startDecryption();
        break;
      default:
        window.alert("Something went wrong !");
        break;
    }
  }

  function clearQueue() {
    if (
      fileQueue.length > 0 &&
      window.confirm(
        "Clear the file queue? This will cancel all ongoing operations."
      )
    )
      fileQueue = [];
  }
</script>

<main>
  <Header {start} {clearQueue} />
  <Settings />
  <DropZone {fileQueue} />
  <QueueList {fileQueue} />
</main>

<style>
</style>
