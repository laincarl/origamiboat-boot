var fs = require('fs-extra')
var path = require('path');

try {
  fs.copySync(path.resolve(__dirname, '../src'), path.resolve(__dirname, '../lib'))
  console.log('success!')
} catch (err) {
  console.error(err)
}