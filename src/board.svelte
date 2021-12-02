<script lang="ts">
  import { rows, columns } from './board-store';
  import Cell from './cell.svelte';
</script>

<div class="game-of-life-board">
  {#each new Array($rows * $columns) as _, idx}
    <Cell onClick={() => alert(`Cell ${idx} clicked!`)} />
  {/each}
</div>

<style>
  .game-of-life-board {
    width: 90%;
    height: 85%;
    align-items: center;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
</style>
