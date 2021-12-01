<script lang="ts">
  import Board from '../board.svelte';

  let columns = 2;
  let rows = 2;
  let cells = 4;

  function onChange(newVal: number, identifier: 'rows' | 'columns') {
    const element = document.querySelector('.game-of-life-board') as HTMLElement;

    element.style.setProperty(`grid-template-${identifier}`, `repeat(${newVal}, 1fr)`);
    cells = rows * columns;
  }
</script>

<main>
  <h1>Conway's Game of Life</h1>

  <div class="grid-size-inputs-container">
    <label for="grid-size-rows">Rows</label>
    <label for="grid-size-columns">Columns</label>
    <input
      id="grid-size-rows"
      type="number"
      required={true}
      bind:value={rows}
      on:change={() => onChange(rows, 'rows')}
    />
    <input
      id="grid-size-columns"
      type="number"
      required={true}
      bind:value={columns}
      on:change={() => onChange(columns, 'columns')}
    />
  </div>

  <Board {cells} />
</main>

<style>
  :global(body) {
    background-color: lightblue;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    margin: 0;
  }

  main {
    height: 95vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .grid-size-inputs-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5em;
  }

  .grid-size-inputs-container input {
    width: 35%;
  }

  .grid-size-inputs-container > * {
    margin-inline: auto;
  }
</style>
