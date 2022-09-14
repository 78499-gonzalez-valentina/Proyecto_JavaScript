const agregar = document.querySelector("#agregar")

function cargar(){
    debugger
    servicios.push(new Servicio(id.value, nombre.value, precio.value))
    cargarServicios(servicios)
}


agregar.addEventListener("click", () => {cargar()})

const inputs = document.querySelectorAll("input")

inputs.forEach(input=> {
    input.addEventListener("focus", ()=>input.className = "foco")
    input.addEventListener("blur",()=> input.className = "")

})

const id = document.querySelector("#inputID")
const nombre = document.querySelector("#inputNombre")
const precio = document.querySelector("#inputPrecio")



