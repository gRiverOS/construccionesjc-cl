import { onMounted } from 'vue'

export function useReveal() {
  onMounted(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
          obs.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const hiddenElements = document.querySelectorAll('.reveal-wait')
    hiddenElements.forEach((el) => observer.observe(el))
  })
}
