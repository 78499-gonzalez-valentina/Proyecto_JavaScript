const tabla = document.getElementById("tabla")
const inputFiltrar = document.getElementById("inputFiltrar")
const servicios = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];



// clase Servicio
class Servicio {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        
    }
}

//generador automatico de array de Servicios
function generarServicios() {
    servicios.push(new Servicio( 545,"SELFIETAG", 2000))
    servicios.push(new Servicio(412, "CABINA DE FOTOS", 5000))
    servicios.push(new Servicio(874, "SOUVENIR", 300))
 
}


generarServicios()
 
//Cargar lista de servicios a la tabla en el html
 function cargarServicios(array){
 let fila = ""
     array.forEach(servicio => {
         fila = `<tr>
                     <td>${servicio.id}</td>
                     <td>${servicio.nombre}</td>
                     <td>${servicio.precio}</td>
                     <td><button id="btn${servicio.id}">+</button></td>
                 </tr>`   
                 tabla.innerHTML += fila
           
     });


 }

 cargarServicios(servicios)

 
//Filtrar servicios en la tabla ingresando parte del nombre
function filtrarServicios() { 
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = servicios.filter(servicio => servicio.nombre.includes(inputFiltrar.value))
        tabla.innerHTML = ""
        tabla.innerHTML = resultado.map(servicio => `<tr>
                                                        <td>${servicio.id}</td>
                                                        <td>${servicio.nombre}</td>
                                                        <td>${servicio.precio}</td>
                                                        <td><button id="btn${servicio.id}">+</button></td>
                                                    </tr>`   ).join("")
              
              } 
    else {
        tabla.innerHTML = " "
        cargarServicios(servicios)
    }
}

//A medida que escribimos se ejecute el filtro 
inputFiltrar.addEventListener("keydown", filtrarServicios) 

//Agregar servicio al carrito presionando el boton correspondiente
function eventoEnBotones() {
    servicios.forEach(serv => {
        const btn = document.querySelector(`#btn${serv.id}`)
        btn.addEventListener("click", ()=> agregarAlCarrito(`${serv.id}`))
    })
}

eventoEnBotones()


function agregarAlCarrito(id){
    debugger
    const servicio = carrito.find(serv => serv.id == id)
    if(servicio){
        servicio.quantity++;
        servicio.precio + servicio.precio
    }
    else{
        const servicio = servicios.find(serv => serv.id == id)
        if(servicio){
            let newServ ={
                id: servicio.id,
                nombre: servicio.nombre,
                precio: servicio.precio,
                quantity: 1

            }
            carrito.push(servicio)
        }
       
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
}





