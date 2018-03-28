const fs = require('fs')
const path = require('path')
const { version } = require('./package.json')

const removeFolder = (folderPath, removeDirectory = true) => {
  let files = []
  if (fs.existsSync(folderPath)) {
    files = fs.readdirSync(folderPath)
    files.forEach((file) => {
      const curPath = `${folderPath}/${file}`
      if (fs.statSync(curPath).isDirectory()) {
        removeFolder(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    removeDirectory && fs.rmdirSync(folderPath)
  }
}

const start = () => {
  const dirList = [version, 'js', 'css', 'images', 'index.html', 'service-worker.js']
  dirList.forEach((dir) => {
    const curPath = path.join(`${__dirname}/dist/${dir}`)
    if (fs.existsSync(curPath)) {
      if (fs.statSync(curPath).isDirectory()) {
        removeFolder(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    }
  })
}

start()
