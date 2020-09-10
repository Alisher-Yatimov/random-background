const bgBtn = document.querySelector('button')
const curColor = document.querySelector('.current-color')
const wrapper = document.querySelector('.wrapper')
const overlay = document.querySelector('.overlay')

let mode = 'rgb'
let red
let green
let blue

wrapper.addEventListener('click', e => {
  if(!e.target.classList.contains('wrapper')){
    return
  }
  navigator.clipboard.writeText(curColor.textContent)
  overlay.style.display = 'flex'
  setTimeout(() => {
    overlay.style.display = 'none'
  }, 1000)
})

curColor.addEventListener('click', e => {
  if(mode === 'rgb'){
    mode = 'hex'
    curColor.textContent = rgbToHex(red, green, blue)
  } else {
    mode = 'rgb'
    curColor.textContent = `rgb(${red}, ${green}, ${blue})`
  }
})

function init(){
  bgHandler()
}

bgBtn.addEventListener('click', bgHandler)

init()
function bgHandler() {
  red = Math.floor(Math.random() * 255)
  green = Math.floor(Math.random() * 255)
  blue = Math.floor(Math.random() * 255)
  if(mode === 'rgb'){
    curColor.textContent = `rgb(${red}, ${green}, ${blue})`
    bgBtn.style.background = `rgb(${green}, ${blue}, ${red})`
    wrapper.style.setProperty('--bg', `rgb(${red}, ${green}, ${blue})`)
  }
  else{
    curColor.textContent = rgbToHex(red, green, blue)
    bgBtn.style.background = rgbToHex(green, blue, red)
    wrapper.style.setProperty('--bg', rgbToHex(red, green, blue))
  }
}

function rgbToHex (r, g, b){
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)
  if(r.length == 1){
    r = '0' + r
  }
  if(g.length == 1){
    g = '0' + g
  }
  if(b.length == 1){
    b = '0' + g
  }
  return `#${r}${g}${b}`
}