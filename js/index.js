
let precio1xHora = 2000;
let precio2xHora = 5000;
let precio3xLlavero = 300;

let servicio = true;
let precioFinal = 0;
let total= 0;
const servicios = [];

//ciclo principal de la simulacion que se ejecuta mientras servicio sea true
while(servicio){
    compra = elegirServicio();
    let cantidad = parseFloat(prompt("Ingrese cantidad de horas de servicio, en caso de ser Souvenir cantidad que se requieran: "))
    total = totalCompra(compra, cantidad);
    servicio = confirm ("¿Desea agregar otro servicio?")
}
debugger
alert("Se compraron " + servicios.length + " " + "servicios."+ "\n El precio final es de: " + total);



//funcion para elegir el servicio con validacion
function elegirServicio(){
    let compra = parseFloat(prompt("Ingrese Servicio que desea comprar (1,2 o 3): \n 1-Servicio SelfieTag \n 2-Servicio de Cabina de Fotos \n 3-Servicio de Souvenir  "))
    if (compra == 1){
        productosComprados("Selfie-Tag")
        return compra;
        
    }
    else if(compra == 2){
        productosComprados("Cabina de Fotos")
        return compra;
    }
    else if (compra == 3 ){
        productosComprados("Souvenir")
        return compra;
    }
    else{
        console.log("El numero ingresado no es correcto")
        elegirServicio();
        
    }
    
}
    
//funcion para calcular el monto total de los servicios comprados
function totalCompra(compra, cantidad){
    if(compra == 1){
        precioFinal = precioFinal + (precio1xHora * cantidad);
    }
    else if(compra == 2){
        precioFinal = precioFinal + (precio2xHora * cantidad);
    }
    else if (compra == 3){
        precioFinal = precioFinal + (precio3xLlavero * cantidad);

    }
    else{
        console.log("El numero ingresado no es correcto")
    }

    return precioFinal;

}

function productosComprados(producto){
    servicios.push(producto);
}