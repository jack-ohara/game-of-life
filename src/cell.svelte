<script lang="ts">
  import type { CellInfo } from './global';

  export let onClick: () => void;
  export let cellInfo: CellInfo;
</script>

<div class="game-of-life-cell" on:click={onClick} tabindex="0">
  <div class={cellInfo.isAlive ? 'alive' : ''} />
</div>

<style>
  .game-of-life-cell {
    border: 1px solid grey;
    height: 100%;
    display: flex;
    padding: 3%;
    box-sizing: border-box;
    cursor: pointer;
  }

  .game-of-life-cell > div {
    flex-grow: 1;
  }

  .game-of-life-cell > div.alive {
    background-color: yellowgreen;
  }

  .game-of-life-cell:hover > div:not(.alive) {
    background-color: #9acd3270;
  }
</style>
