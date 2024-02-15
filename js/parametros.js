const caja = document.querySelector('#caja');
const picker = document.querySelector('#picker');


function saludar(nombre){
    console.log( 'Hola ' + nombre);
}

function pintar( codigoColor ){
    caja.style.backgroundColor = codigoColor;
}

function colorear(){
    let colorSecciona = picker.value;
    pintar( colorSecciona );

}

saludar('milton');
