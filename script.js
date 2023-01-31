const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length


sideBar.style.top = `-${(slidesCount - 1) * 100}vh`
let activeSlidesIndex = 0
upBtn.addEventListener('click', () => {
  changeSlides('up')
})

downBtn.addEventListener('click',() => {
  changeSlides('down')
})

  document.addEventListener('keydown', e => {
    if(e.key === 'ArrowUp') {
      changeSlides('up')
    } else if (e.key === 'ArrowDown') {
      changeSlides('down')
    }
  })

function changeSlides(direction) {
  if(direction === 'up') {
    activeSlidesIndex++
    if(activeSlidesIndex === slidesCount) {
      activeSlidesIndex = 0
    }
  } else if (direction === 'down') {
    activeSlidesIndex--
    if(activeSlidesIndex < 0) {
      activeSlidesIndex = slidesCount - 1 
    }
  } 
  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlidesIndex * height}px)`
  sideBar.style.transform = `translateY(${activeSlidesIndex * height}px)`
}





