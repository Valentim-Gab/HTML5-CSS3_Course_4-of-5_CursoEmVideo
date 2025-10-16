const btn = document.getElementById('btn-theme')
const body = document.body

// Persistência do theme
const storedTheme = localStorage.getItem('theme')
themeDark(storedTheme === 'dark')

// Função para alternar entre theme light e dark
function themeDark(type) {
  if (type) {
    body.classList.add('dark')
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>'

    return
  }

  body.classList.remove('dark')
  btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
}

btn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark')

  themeDark(isDark)
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link')

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))

    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight
      const targetPosition = target.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  })
})
