const burger = document.querySelector('.navbar__burger')
const nabarList = document.querySelector('.navbar__list')
const catalogTabs = document.querySelectorAll('.catalog__item')
const catalogTabsContent = document.querySelectorAll('.catalog__content')


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

