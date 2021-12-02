<script lang="ts">
  export let onClick: () => void;
</script>

<div class="game-of-life-cell" on:click={onClick} />

<style>
  .game-of-life-cell {
    border: 1px solid grey;
    height: 100%;
  }
</style>
