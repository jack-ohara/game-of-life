<script lang="ts">
  export let cells = 4;
</script>

<div class="game-of-life-board">
  {#each new Array(cells) as _}
    <div class="game-of-life-cell" />
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

  .game-of-life-board .game-of-life-cell {
    border: 1px solid grey;
    height: 100%;
  }
</style>
