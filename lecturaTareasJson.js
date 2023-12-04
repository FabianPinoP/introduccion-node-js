const fs = require('fs')
const tareas = fs.readFileSync('tareas.json', 'utf8')
console.log(JSON.parse(tareas));