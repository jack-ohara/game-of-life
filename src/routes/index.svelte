<script lang="ts">
  import BoardSetup from '../board-setup.svelte';
  import Board from '../board.svelte';
</script>

<main>
  <h1>Conway's Game of Life</h1>

  <BoardSetup />

  <Board />
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
</style>
