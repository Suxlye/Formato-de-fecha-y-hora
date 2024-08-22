const hrs= new Date ()
const horas = hrs.getHours()
console.log(horas)
const min= new Date()
const minut =min.getMinutes()
console.log(minut) 

const sgndos= new Date()
const seconds = sgndos.getSeconds()
console.log(seconds)

//ejercicio 1 Mostrar fecha con los dias de la semana en español con el siguiente formato
//Lunes 21 de agosto del 2024

let fecha = new Date()
console.log(fecha.getDay())
console.log(fecha.getDate())
console.log(fecha.getMonth())
console.log(fecha.getFullYear())

let diasemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',]
console.log(diasemana[fecha.getDay()])

let mesAnyo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
console.log(mesAnyo[fecha.getMonth()])

console.log(`${diasemana[fecha.getDay()]},${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} del año ${fecha.getFullYear()}`)


//Ejemplo 2 Mostarr la hora actual en formato 03:15:15
let hora = new Date()
console.log(hora.toLocaleTimeString())