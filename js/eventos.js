const agregar = document.querySelector("#agregar")
const id = document.querySelector("#inputID")
const nombre = document.querySelector("#inputNombre")
const precio = document.querySelector("#inputPrecio")


//Carga de nuevos servicios
const cargar =()=>{
    id.value == "" && nombre.value == "" && precio.value == "" ?  toastSwal("Complete los campos para añadir un servicio", "tomato", "white") : añadirServicio()

}

function añadirServicio(){
    servicios.push(new Servicio(id.value, nombre.value, precio.value))
    tabla.innerHTML = " "
    cargarServicios(servicios)
    id.value = ""
    nombre.value = ""
    precio.value = ""
    toastSwal("Servicio añadido con exito!", "green", "white")
}

//Que al presionar Agregar se ejecute la carga del servicio

agregar.addEventListener("click", () => {cargar()})

const inputs = document.querySelectorAll("input")

//Para hacer foco en el input seleccionado
inputs.forEach(input=> {
    input.addEventListener("focus", ()=>input.className = "foco")
    input.addEventListener("blur",()=> input.className = "")

})


//msj temporal con libreria 
const toastSwal = (mensaje, bgcolor, color)=> {
    Swal.fire({
        toast: true,
        title: mensaje,
        timer: 1300,
        position: 'bottom',  //top-end - top-start - bottom (start & end)
        timerProgressBar: false,
        showConfirmButton: false,
        background: bgcolor,
        color: color,
    })

}



