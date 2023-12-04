const fs = require('fs')
const tareas = fs.readFileSync('./archivos_creados/tareas.txt', 'utf8')
console.log(tareas)