// Espera a que todo el contenido HTML se halla cargado
document.addEventListener('DOMContentLoaded', () =>
{
//1. seleccionar un elemento del HTML
//obtendremos el boton por su ID const miboton =
document.getElementById('miboton');
//2. Añadir un "escuchasor de eventos" (event listener)
//Cuando el boton sea ckiqueado, se ejecutara una funcion.
miboton.addEventListener('click', () =>
{
//3 modificar el contenido de un elemento
alert('U.D.U message: has hecho click en el boton.');
})})