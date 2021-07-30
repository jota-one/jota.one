<script>
  import icons from '../icons.json'

  export let name
  export let size = 24
  export let color
</script>

<svg viewBox="0 0 24 24" width="{size}" height="{size}">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill="{ color || 'currentColor' }"
    d={icons[name] || icons._default}
  />
</svg>