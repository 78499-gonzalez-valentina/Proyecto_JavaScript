const inputNom = document.getElementById("inputNom")
const inputEmail = document.getElementById("inputEmail")
const inputConsulta = document.getElementById("inputConsulta")
const btnEnv = document.getElementById("btnEnv")

//guardar datos en el local storage
function guardarDatos() {
    
    localStorage.setItem("nombre",inputNom.value) 
    localStorage.setItem("email",inputEmail.value)
    localStorage.setItem("consulta",inputConsulta.value)

}

btnEnv.addEventListener("click",guardarDatos)

//Para obtener los datos del local storage
//  function recuperarDatos() {
//      inputNom.value = localStorage.getItem("nombre") 
//      inputEmail.value = localStorage.getItem("email")
//      inputConsulta.value = localStorage.getItem("consulta")
//  }
//  document.addEventListener("DOMContentLoaded", recuperarDatos)

