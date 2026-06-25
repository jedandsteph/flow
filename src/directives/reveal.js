// v-reveal — smoothly fades + lifts an element into view on scroll.
// Usage: <div v-reveal>  or  <div v-reveal="150">  (150ms stagger delay)
const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect()
  },
}

export default reveal
