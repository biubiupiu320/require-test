const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  // remove configureWebpack option, it work
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
})
