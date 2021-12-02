<script lang="ts">
  import { onDestroy } from 'svelte/internal';
  import { rows, columns } from './board-store';
  import Cell from './cell.svelte';
  import type { CellInfo } from './global';

  let row_count;
  let column_count;

  let cells: CellInfo[] = [];

  let reconstructCells = () => {
    cells = [];

    for (let y in [...Array(row_count)]) {
      for (let x in [...Array(column_count)]) {
        cells.push({ coordinates: { x: parseInt(x), y: parseInt(y) }, isAlive: false });
      }
    }
  };

  const unsubRows = rows.subscribe((val) => {
    row_count = val;
    reconstructCells();
  });
  const unsubCols = columns.subscribe((val) => {
    column_count = val;
    reconstructCells();
  });

  onDestroy(unsubRows);
  onDestroy(unsubCols);
</script>

<div class="game-of-life-board">
  {#each cells as c}
    <Cell onClick={() => (c.isAlive = !c.isAlive)} cellInfo={c} />
  {/each}
</div>

<style>
  .game-of-life-board {
    width: 90%;
    height: 85%;
    align-items: center;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(20, 1fr);
  }
</style>
