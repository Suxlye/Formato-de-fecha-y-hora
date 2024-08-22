const Fecha= new Date().toString()
console.log(Fecha)

//2
const fecha= new Date().toDateString()
console.log(fecha)

//3
const fls = new Date().toLocaleString()
console.log(fls)

//4
const fecha1 = new Date().toLocaleDateString()
console.log(fecha1)

const fecha2 = new Date().toLocaleDateString('en-US')
console.log(fecha2)

const fechaActual = new Date()
const opciones = {weekday: 'long',year:'numeric', month:'short', day:'numeric'}

console.log(fechaActual.toLocaleDateString('ar-EG',opciones))
console.log(fechaActual.toLocaleDateString('en-us',opciones))
console.log(fechaActual.toLocaleDateString('es-SV',opciones))
//5
const fecha3 = new Date().toGMTString()
console.log(fecha3)

//6
const fecha4 = new Date().toUTCString()
console.log(fecha4)

//7
const fecha5 = new Date().toISOString()
console.log (fecha5)
