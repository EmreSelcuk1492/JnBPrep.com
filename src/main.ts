import './styles.css'

const burger = document.querySelector<HTMLButtonElement>('.nav-burger')
const navLinks = document.querySelector<HTMLUListElement>('.nav-links')

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true'
    burger.setAttribute('aria-expanded', String(!open))
    navLinks.classList.toggle('open', !open)
  })

  navLinks.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      burger.setAttribute('aria-expanded', 'false')
      navLinks.classList.remove('open')
    }
  })
}
