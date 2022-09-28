const agregar = document.querySelector("#agregar")
const id = document.querySelector("#inputID")
const nombre = document.querySelector("#inputNombre")
const precio = document.querySelector("#inputPrecio")


//Carga de nuevos servicios
const cargar =()=>{
    id.value == "" && nombre.value == "" && precio.value == "" ?  alert("Complete los campos para añadir un servicio") : añadirServicio()

}

function añadirServicio(){
    let timerInterval
    Swal.fire({
      title: 'Servicio agregado con exito!',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }  
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })


    servicios.push(new Servicio(id.value, nombre.value, precio.value))
    tabla.innerHTML = " "
    cargarServicios(servicios)
    id.value = ""
    nombre.value = ""
    precio.value = ""
}

//Que al presionar Agregar se ejecute la carga del servicio

agregar.addEventListener("click", () => {cargar()})

const inputs = document.querySelectorAll("input")

//Para hacer foco en el input seleccionado
inputs.forEach(input=> {
    input.addEventListener("focus", ()=>input.className = "foco")
    input.addEventListener("blur",()=> input.className = "")

})





