const agregar = document.querySelector("#agregar")

function cargar(){
    alert("Servicio agregado ")
}


agregar.addEventListener("click", () => {cargar()})

const inputs = document.querySelectorAll("input")

inputs.forEach(input=> {
    input.addEventListener("focus", ()=>input.className = "foco")
    input.addEventListener("blur",()=> input.className = "")

})



