+++
title = "<j-logo></j-logo>"
description = "We build<br>web products"
sort_by = "weight"
+++

<div class="tooltip">
  You might want
  <br>
  to click here...
</div>

<script>
  setTimeout(function() {
    if (!document.body.classList.contains('navigate')) {
      document.querySelector('.tooltip').classList.add('visible')
    }
  }, 3000)
</script>

<style>
  .tooltip {
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    padding-left: 1rem;
    font-family: 'Kalam', cursive;
    font-size: 1.1rem;
    line-height: 1;
    color: var(--c-light-blue);
    transform: rotate(-10deg);
    transform-origin: 0 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .tooltip:before {
    content: "⟶";
    position: absolute;
    top: 1rem;
    left: -1rem;
    font-family: 'Inter';
    transform: rotate(145deg);
  }

  .tooltip.visible {
    opacity: 1;
  }
  </style>