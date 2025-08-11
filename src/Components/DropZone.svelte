<script lang="ts">
  import { FileStatus, type fileQueueItem } from "types";
  import { makeId } from "utils/util";

  type Props = {
    fileQueue: fileQueueItem[];
  };

  let { fileQueue }: Props = $props();

  let fileInput: HTMLInputElement;
  let isdragover = $state(false);

  function appendFiles(files: FileList) {
    for (const file of files) {
      fileQueue.push({
        id: makeId(),
        file,
        progress: 0,
        status: FileStatus.Pending,
      });
    }
  }

  function fileSelectorHandler(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files) appendFiles(target.files);
  }

  function dragoverHandler(e: Event) {
    e.preventDefault();
    isdragover = true;
  }

  function dragleaveHanlder() {
    isdragover = false;
  }

  function dropHandler(e: DragEvent) {
    e.preventDefault();
    // console.log(e.dataTransfer?.files);
    isdragover = false;
    if (e.dataTransfer) appendFiles(e.dataTransfer.files);
  }
</script>

<section
  aria-label="File upload drop zone"
  ondrop={dropHandler}
  ondragleave={dragleaveHanlder}
  ondragover={dragoverHandler}
  class:drag-over={isdragover}
  class="drop-zone"
>
  <p>
    Drag & Drop files here or
    <button onclick={() => fileInput.click()}>Select Files</button>
  </p>
  <input
    bind:this={fileInput}
    onchange={fileSelectorHandler}
    type="file"
    multiple
    hidden
  />
</section>

<style>
  .drop-zone {
    background: #ddd;
    padding: 30px;
    margin: 10px;
    border: 2px dashed #888;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
  }

  .drop-zone.drag-over {
    background: #cde4ff;
    border-color: #2a8fff;
  }
</style>
