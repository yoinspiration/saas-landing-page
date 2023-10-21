// FAQ Accordion
const faqContainer = document.querySelector('.faq-content')

faqContainer.addEventListener('click', e => {
  const groupHeader = e.target.closest('.faq-group-header')

  if (!groupHeader) return

  const icon = groupHeader.querySelector('i')
  const group = groupHeader.parentElement
  const groupBody = group.querySelector('.faq-group-body')

  // Toggle icon
  icon.classList.toggle('fa-plus')
  icon.classList.toggle('fa-minus')

  // Toggle group body visibility
  const openGroupBody = faqContainer.querySelector('.faq-group-body.open')

  if (openGroupBody && openGroupBody !== groupBody) {
    openGroupBody.classList.remove('open')

    const otherIcon = openGroupBody.parentElement.querySelector(
      '.faq-group-header i'
    )
    otherIcon.classList.remove('fa-minus')
    otherIcon.classList.add('fa-plus')
  }

  groupBody.classList.toggle('open')
})

// Mobile Menu
const hamburgerButton = document.querySelector('.hamburger-button')
const mobileMenu = document.querySelector('.mobile-menu')

hamburgerButton.addEventListener('click', () =>
  mobileMenu.classList.toggle('active')
)
