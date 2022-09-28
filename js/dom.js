const tabla = document.getElementById("tabla")
const inputFiltrar = document.getElementById("inputFiltrar")
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];



let servicios = [
    {
        id:1,
        nombre: "SELFIETAG",
        precio: 2000,
        image: "../assets/imag/serv1.jpeg"
    },
    {
        id:2,
        nombre: "CABINA DE FOTOS",
        precio: 5000,
        image: "../assets/imag/serv2.png"
    },
    {
        id:3,
        nombre: 'SOUVENIR',
        precio: 300,
        image: "../assets/imag/LLAVERO.png"
    }
    
]

 
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

 console.log(...servicios)
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

//Agregar al carrito, si es el mismo va aumentando la cantidad
function agregarAlCarrito(id){
    const servicio = carrito.find(serv => serv.id == id)

    if(servicio){
        //si ya esta en el carrito
        servicio.quantity++;
    }
    else{
        //si no esta en el carrito se lo agrega
        const servicio = servicios.find(serv => serv.id == id)
        
            let newServ ={
                id: servicio.id,
                nombre: servicio.nombre,
                precio: servicio.precio,
                quantity: 1

            }
            carrito.push(newServ)
        
       
    }

    
    localStorage.setItem("carrito", JSON.stringify(carrito))
}





