<script lang="ts">
  import { onDestroy } from 'svelte/internal';
  import { rows, columns } from './board-store';
  import Cell from './cell.svelte';

  let row_count;
  let column_count;

  let board: boolean[][] = [];

  let reconstructCells = () => {
    board = [];

    for (let y in [...Array(row_count)]) {
      // Add a new row into the board
      board.push([]);
      for (let x in [...Array(column_count)]) {
        // Populate a cell in the row
        board[y].push(false);
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
  {#each board as row}
    {#each row as cellIsAlive}
      <Cell onClick={() => (cellIsAlive = !cellIsAlive)} isAlive={cellIsAlive} />
    {/each}
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
