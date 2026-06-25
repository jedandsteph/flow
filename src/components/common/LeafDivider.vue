<!-- Laurel/dahon divider — dalawang sangang nagtatagpo sa gitna. Tints via currentColor. -->
<template>
  <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- Center stems -->
    <g stroke="currentColor" stroke-width="1" stroke-linecap="round">
      <path d="M100 12 H44" />
      <path d="M100 12 H156" />
    </g>

    <g fill="currentColor">
      <!-- Center ornament -->
      <circle cx="100" cy="12" r="2.4" />
      <circle cx="91" cy="12" r="1.2" />
      <circle cx="109" cy="12" r="1.2" />

      <!-- Leaves (left branch) — papalabas -->
      <ellipse cx="72" cy="7.5" rx="8" ry="2.6" transform="rotate(24 72 7.5)" />
      <ellipse cx="72" cy="16.5" rx="8" ry="2.6" transform="rotate(-24 72 16.5)" />
      <ellipse cx="56" cy="8.5" rx="6.5" ry="2.2" transform="rotate(24 56 8.5)" />
      <ellipse cx="56" cy="15.5" rx="6.5" ry="2.2" transform="rotate(-24 56 15.5)" />
      <ellipse cx="44" cy="12" rx="4.5" ry="1.8" />

      <!-- Leaves (right branch) — papalabas -->
      <ellipse cx="128" cy="7.5" rx="8" ry="2.6" transform="rotate(-24 128 7.5)" />
      <ellipse cx="128" cy="16.5" rx="8" ry="2.6" transform="rotate(24 128 16.5)" />
      <ellipse cx="144" cy="8.5" rx="6.5" ry="2.2" transform="rotate(-24 144 8.5)" />
      <ellipse cx="144" cy="15.5" rx="6.5" ry="2.2" transform="rotate(24 144 15.5)" />
      <ellipse cx="156" cy="12" rx="4.5" ry="1.8" />
    </g>
  </svg>
</template>
