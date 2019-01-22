import _ from 'lodash'

import printMe from './print'

function component () {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['You', 'will', 'never', 'win!'], ' ')

  btn.innerHTML = 'Click on me!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
