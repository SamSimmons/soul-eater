const finder = require('findit')(process.argv[2] || '.')
const path = require('path')

let sassFiles = []

finder.on('directory', (dir, stat, stop) =>{
  const base = path.basename(dir)
  if (base === '.git' || base === 'node_modules' || base === 'tmp'){
    stop()
  }
})

finder.on('file', (file, stat) => {
  if (file.match('.scss')) {
    sassFiles.push(file)
  }
})
