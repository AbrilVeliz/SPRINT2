const $nombre = document.getElementById ("nombre"),
      email = document.getElementById("email"),
      contraseña = document.getElementById ("contraseña"),
      $fechanacimiento = document.getElementById("start"),
      $button = document.getElementById("button"),
      $form = document.getElementById ("form");


//guardar inputs en variables
// const usuario = document.getElementById("nombre").value;
// const email = document.getElementById("email").value;
// const contraseña = document.getElementById("contraseña").value;
//       fechaNacimiento = document.getElementById("start").value;

$form.addEventListener('submit', validarFormulario);
$button.addEventListener("click", validarFormulario); //ahdiero mi boton de "iniciar sesion" para la sentencia de arriba

function validarFormulario (evento) { //validarFormulario es la función que hace validar el form
    
    evento.preventDefault();
     // Evita que el formulario se envíe automáticamente
    
    if(email.value.trim() === ""){
        alert("Escribe tu email para iniciar sesión!")
        return;
    }if(contraseña.value.trim()=== ""){
        alert("Por favor, escribe una contraseña")
        return;
    }if($nombre.value.trim()=== ""){
        alert("Por favor, escribe tu nombre")
        return;
    }if(new Date($fechanacimiento.value) >= new Date("2015-01-01")){ //si es menor a la fecha ("2015/01/1")
        alert("Debes ser mayor de edad")
        return;
        $form.reset()
        }else{
            alert("Gracias por probar el formulario");}}

//form2
const email2 = document.getElementById ("email2");
const contraseña2 = document.getElementById ("contraseña2");
const button2 = document.getElementById ("button2");
const form2 = document.getElementById ("form2");
// console.log(email2, contraseña2, button2, form2);

form2.addEventListener("submit", validarFormulario2);

function validarFormulario2 (e){
    e.preventDefault();
    if(email2.value === ""){
        alert("Escribe tu email para iniciar sesión.");
    }if(contraseña2.value === ""){
        alert("Escribe tu contraseña para iniciar sesión.");
}else{
    alert("Gracias por probar el formulario");
}}