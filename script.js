const burger = document.querySelector('.navbar__burger')
const nabarList = document.querySelector('.navbar__list')
const catalogTabs = document.querySelectorAll('.catalog__item')
const catalogTabsContent = document.querySelectorAll('.catalog__content')
const slider = document.querySelector('.reviews__list')
const nextSlide = document.getElementById('next')
const prevSlide = document.getElementById('prev')
let offset = 0;

nextSlide.addEventListener('click', () => {
  offset += 1200;
  if (offset > 3600) {
    offset = 0
  }
  slider.style.left = -offset + 'px'
})

prevSlide.addEventListener('click', () => {
  offset -= 1200;
  if (offset < 0) {
    offset = 3600
  }
  slider.style.left = -offset + 'px'
})



catalogTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    
    catalogTabs.forEach(item => {
      item.classList.remove('catalog__item--active')
    })
    tab.classList.add('catalog__item--active')
    tabName = tab.getAttribute('data-tab-name')
    catalogTabsContent.forEach(tabContent => {
      tabContent.classList.remove('catalog__content--active')
      if (tabContent.classList.contains(tabName)) { 
        tabContent.classList.add('catalog__content--active')
      }
    })
  })
});


burger.addEventListener('click', () => {
  burger.classList.toggle('navbar__burger--active')
  nabarList.classList.toggle('navbar__list--active')
})

