const stylus = require('stylus')
const autoprefixer = require('autoprefixer-stylus')
 
stylus(css)
  .use(autoprefixer())
  .render(function(err, output) {
    console.log(output)
  })