const cmify = require('cmify')
const defaultStyles = cmify.load('./item.css')

function renderItem (item) {
  switch (item.type) {
  case 'activity':
    return renderActivityItem(item)

  case 'coffee':
    return renderCoffeeItem(item)
  }
}

function renderActivityItem (item) {
  const styles = Object.assign({}, defaultStyles, cmify.load('./item--activity.css'))

  return `<div class="${styles.root}">
    Activity: ${item.text}
    <span class="${styles.time}">${item.time}</span>
  </div>`
}

function renderCoffeeItem (item) {
  const styles = Object.assign({}, defaultStyles, cmify.load('./item--coffee.css'))

  return `<div class="${styles.root}">
    Coffee!
    <span class="${styles.time}">${item.time}</span>
  </div>`
}

module.exports = renderItem
