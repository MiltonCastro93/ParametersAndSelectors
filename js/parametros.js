//Ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');
const picker = document.querySelector('#picker');

//declaramos funciones
function saludar(nombre){
    console.log( 'Hola ' + nombre);
}

function pintar( codigoColor ){
    caja.style.backgroundColor = codigoColor;
}

function colorear(){
    //obtenemos el codigo de color que seleccione el usuario en el picker
    let colorSecciona = picker.value;
    //invocamos la funcion pintar()
    pintar( colorSecciona );

}

//invocamos la funcion
saludar('milton');