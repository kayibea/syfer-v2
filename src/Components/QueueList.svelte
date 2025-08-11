<script lang="ts">
  import { formatFileSize } from "utils/util";
  import { FileStatus, type fileQueueItem } from "types";

  type Props = {
    fileQueue: fileQueueItem[];
  };

  let { fileQueue }: Props = $props();
  let pendingItemCount = $state(0);

  $effect(() => {
    pendingItemCount = fileQueue.reduce((accumulator: number, item) => {
      if (item.status === FileStatus.Pending) accumulator += 1;
      return accumulator;
    }, 0);
  });

  function delistItem(itemId: string) {
    const item = fileQueue.find((item) => item.id === itemId);

    if (
      !item ||
      (item.status === FileStatus.Processing &&
        !window.confirm(
          "Remove this file? This will cancel the ongoing operation on this file."
        ))
    )
      return;

    item.status = FileStatus.Delisted;
  }
</script>

<section class="queue">
  <h2>Queue({pendingItemCount})</h2>
  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Size</th>
        <th>Status</th>
        <th>Progress</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody id="queueBody">
      {#each fileQueue as item}
        {#if item.status !== FileStatus.Delisted}
          <tr>
            <td>{item.file.name}</td>
            <td>{formatFileSize(item.file.size)}</td>
            <td>{item.status}</td>
            <td>
              <div class="progress-bar">
                <div
                  style:width="${item.progress}"
                  class="progress-bar-fill"
                ></div>
              </div>
            </td>
            <td>
              <button onclick={() => delistItem(item.id)}>Remove</button>
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</section>

<style>
  .queue {
    margin: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
  }

  th,
  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  .progress-bar {
    width: 100%;
    background: #eee;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 8px;
    background: #4caf50;
    width: 0%;
    transition: width 0.3s ease;
  }
</style>
