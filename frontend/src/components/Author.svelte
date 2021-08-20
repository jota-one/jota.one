<script>
  export let big = false
  export let pageMode = false
  export let img
  export let name
  export let url
</script>

{#if pageMode}
  <div class="author page-mode">
    <img src="{ img }" alt="{ name }">
  </div>
{:else}
  <a class="author" class:big href="{ url }" title="{ name }">
    <img src="{ img }" alt="{ name }">
    {#if name}
      <span>{ name }</span>
    {/if}
  </a>
{/if}

<style lang="postcss">
  .author {
    display: inline-flex;
    align-items: center;
    padding: 0.75%;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    color: inherit;
    border-radius: 999px;
    background: rgba(0,0,0, 0.1);

    &.big,
    &.page-mode {
      flex-direction: column;
      margin: 0 2rem;
      font-size: 1rem;
      font-weight: 900;
      padding: 1rem 0.5rem;
      background: none;

      img {
        padding: 10%;
        width: 5rem;
        height: 5rem;
      }

      span {
        padding-top: 0.5rem;
      }
    }

    &.page-mode {
      margin: 0.5rem 0;

      img {
        width: 7.5rem;
        height: 7.5rem;
      }
    }
  }

  img {
    padding: 3%;
    width: 1.65rem;
    height: 1.65rem;
    border-radius: 50%;
    background: black;
  }

  span {
    margin-left: 0.35rem;
    padding-right: 0.75rem;
    opacity: 0.75;
  }
</style>