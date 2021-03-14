<svelte:options tag={null} />

<script>
  import icons from '../icons.json'

  export let name
</script>

<svg viewBox="0 0 24 24" width="24" height="24">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill="currentColor"
    d={icons[name] || icons._default}
  />
</svg>