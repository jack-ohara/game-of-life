<script lang="ts">
  import { rows, columns } from './board-store';

  let local_rows = $rows;
  let local_columns = $columns;

  function onChange(newVal: number, identifier: 'rows' | 'columns') {
    const element = document.querySelector('.game-of-life-board') as HTMLElement;

    $rows = local_rows;
    $columns = local_columns;

    element.style.setProperty(`grid-template-${identifier}`, `repeat(${newVal}, 1fr)`);
  }
</script>

<div class="grid-size-inputs-container">
  <label for="grid-size-rows">Rows</label>
  <label for="grid-size-columns">Columns</label>
  <input
    id="grid-size-rows"
    type="number"
    required={true}
    bind:value={local_rows}
    on:change={() => onChange(local_rows, 'rows')}
  />
  <input
    id="grid-size-columns"
    type="number"
    required={true}
    bind:value={local_columns}
    on:change={() => onChange(local_columns, 'columns')}
  />
</div>

<style>
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
