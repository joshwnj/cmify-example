const cmify = require('cmify')
const insertCss = require('insert-css')
const styles = cmify.load('./styles.css')

const renderItem = require('./feed/render-item')
const store = {
  items: [
    {
      type: 'activity',
      text: 'woke up',
      time: '06:00'
    },
    {
      type: 'coffee',
      time: '06:01',
    },
    {
      type: 'coffee',
      time: '06:05'
    },
    {
      type: 'coffee',
      time: '06:05'
    }
  ]
}

const component = `<div class="${styles.root}">
      <h1 class="${styles.heading}">Activity Feed</h1>
      ${store.items.map(renderItem).join('\n')}
</div>`

// browser
if (global.document) {
  const root = document.getElementById('root')
  root.innerHTML = component
  updateCss(cmify.getAllCss())

  console.log('reload', window._allCss)

  if (module.hot) {
    module.hot.accept()
  }
}
// node
else {
  console.log(styles)
  console.log(component)
  console.log('dependencies:', cmify.getDependencies())
  console.log(cmify.getAllCss())
}

function updateCss (css) {
  const head = document.getElementsByTagName('head')[0]
  const nodes = head.querySelectorAll('style')

  if (nodes.length > 0) {
    head.removeChild(nodes[0])
  }

  var elem = document.createElement('style');
  elem.setAttribute('type', 'text/css');

  if ('textContent' in elem) {
    elem.textContent = css;
  } else {
    elem.styleSheet.cssText = css;
  }

  head.appendChild(elem);
}
