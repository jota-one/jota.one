<script>
  export let big = false
  export let img
  export let name
  export let url
</script>

<a class="author" class:big href="{ url }" title="{ name }">
  <img src="{ img }" alt="{ name }">
  {#if name}
    <span>{ name }</span>
  {/if}
</a>

<style lang="postcss">
  a {
    display: inline-flex;
    align-items: center;
    padding: 0.75%;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    color: inherit;
    border-radius: 999px;
    background: rgba(0,0,0, 0.1);

    &.big {
      flex-direction: column;
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