const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 5000,
touch: false
})


('body').scrollspy({ target: '#navbar-example' })