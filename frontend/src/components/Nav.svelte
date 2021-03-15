<script>
  import debounce from 'lodash/debounce'
  import { onMount } from 'svelte';

  export let target = null

  const toggleFixedPosition = debounce(async function () {
    const vph = window.innerHeight
    const containerEl = target.parentElement
    const contentEl = target.firstElementChild
    const widthRefEl = target.querySelector('.width-ref')

    if (widthRefEl) {
      const widthRef = widthRefEl.getBoundingClientRect().width
      target.style.width = `${Math.ceil(widthRef)}px`
    }

    const availableHeight = vph - containerEl.getBoundingClientRect().y
    const requiredHeight = contentEl.getBoundingClientRect().height

    if (availableHeight - requiredHeight > 0) {
      contentEl.classList.add('fixed')
    } else {
      contentEl.classList.remove('fixed')
    }
  }, 10)

  onMount(() => {
    toggleFixedPosition()
    document.body.classList.add('init')
  })
</script>

<svelte:window
  on:resize={toggleFixedPosition}
  on:scroll={toggleFixedPosition}
/>
