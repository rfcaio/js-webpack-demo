import _ from 'lodash'

import './style.css'
import data from './data.xml'
import image from './image.png'

function component () {
  console.log(data)
  let element = document.createElement('div')
  let h1 = document.createElement('h1')
  h1.classList.add('quotes')
  h1.textContent = _.join(['You', 'will', 'never', 'win!'], ' ')
  let img = new Image()
  img.width = '300'
  img.src = image
  element.appendChild(img)
  element.appendChild(h1)
  return element
}

document.body.appendChild(component())
