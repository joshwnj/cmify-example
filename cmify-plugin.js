const plugin = require('cmify/plugin')
const autoprefixer = require('autoprefixer')

module.exports = function (b, opts) {
  opts = opts || {}

  opts.cssAfter = [
    autoprefixer
  ]

  plugin(b, opts)
}
