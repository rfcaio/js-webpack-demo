import _ from 'lodash'

function component () {
  let element = document.createElement('div')
  element.innerHTML = _.join(['You', 'will', 'never', 'win!'], ' ')
  return element
}

document.body.appendChild(component())
