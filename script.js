const bear = document.querySelector('#bear')
const bearRight1 = `<img src="res/bear-right1.png" id="bearImage">`
const bearRight2 = `<img src="res/bear-right2.png" id="bearImage">`
const bearLeft1 = `<img src="res/bear-left1.png" id="bearImage">`
const bearLeft2 = `<img src="res/bear-left2.png" id="bearImage">`

bear.innerHTML = bearRight1
console.log
bear.style.marginRight = '100px'
var bearShift = 0
console.log(window.innerWidth)

addEventListener('keydown', moveBear)

function moveBear(event) {
  switch (event.key) {
    case 'ArrowRight':
    if (bearShift < (window.innerWidth - document.querySelector('#bearImage').clientWidth - 100)) {
    bearShift = bearShift + 100
      bear.style.marginLeft = bearShift + 'px'
      if (bear.innerHTML !== bearRight2) {
        bear.innerHTML = bearRight2
      } else if (bear.innerHTML == bearRight2) {
        bear.innerHTML = bearRight1
      }}
      break
    case 'ArrowLeft':
      if (parseInt(bear.style.marginLeft) >= 100) {
        bearShift = bearShift - 100
        bear.style.marginLeft = bearShift + 'px'
        if (bear.innerHTML !== bearLeft1) {
          bear.innerHTML = bearLeft1
        } else if (bear.innerHTML == bearLeft1) {
          bear.innerHTML = bearLeft2
        }
      }
      break
  }
}

const grunt = new Audio('res/grunt.mp3')
function gruntRandomly() {
  var random = Math.random()
  if (random > 0.9) {
    grunt.play()
  }
}
setInterval(gruntRandomly, 500)
