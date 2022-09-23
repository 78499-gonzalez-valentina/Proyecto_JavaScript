const inputNom = document.getElementById("inputNom")
const inputEmail = document.getElementById("inputEmail")
const inputConsulta = document.getElementById("inputConsulta")
const btnEnv = document.getElementById("btnEnv")
const btnLimpiar = document.getElementById("btnLimpiar")

//guardar datos en el local storage
function guardarDatos() {
    
    localStorage.setItem("nombre",inputNom.value) 
    localStorage.setItem("email",inputEmail.value)
    localStorage.setItem("consulta",inputConsulta.value)

}

btnEnv.addEventListener("click",guardarDatos)
btnEnv.addEventListener("click",limpiarCampos)

function limpiarCampos(){
    inputNom.value = ""
    inputEmail.value = ""
    inputConsulta.value = ""
}

btnLimpiar.addEventListener("click", limpiarCampos)