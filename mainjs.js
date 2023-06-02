var formulario = document.getElementById(myform);

function registrarDoctor() {
    // Todo esto es STRING
    const nombre = document.getElementById('form_nombre').value;
    const apellido = document.getElementById('form_apellido').value;
    const cedula = document.getElementById('form_cedula').value;
    const email = document.getElementById('form_email').value;
    const especialidad = document.getElementById('form_especialidades').value; 
    const consultorio = document.getElementById('form_consultorio').value; 

    const doctor = {
        nombreDoctor: nombre,
        apellidoDoctor: apellido,
        cedulaDoctor: cedula,
        emailDoctor: email,
        especialidadDoctor: especialidad,
        consultorioDelDoctor: consultorio
    }  
    
    if (myform.checkValidity() == true){
        guardarEnCookie(doctor, "doctores"); // SE ENVIA OBJETO 
        alert("¡Los datos del doctor han sido registrados!");
        clearInputs();    
    } else {
        alert("Por favor valida los datos y vuelve a intentar.");
    }
    
}

function registrarPaciente() {
    
    const nombre = document.getElementById('form_nombre').value;
    const apellido = document.getElementById('form_apellido').value;
    const cedula = document.getElementById('form_cedula').value;
    const edad = document.getElementById('form_edad').value;    
    const telefono = document.getElementById('form_telefono').value; 
    const especialidad = document.getElementById('form_especialidades').value; 

    const paciente = {
        nombrePaciente: nombre,
        apellidoPaciente: apellido,
        cedulaPaciente: cedula,
        edadPaciente: edad, 
        telefonoPaciente: telefono, 
        especialidadPaciente: especialidad 
    }

    if (myform.checkValidity() == true){
        guardarEnCookie(paciente, "pacientes"); // SE ENVIA OBJETO // Y un parametro para validacion
        alert("¡Los datos del paciente han sido registrados!");
        clearInputs();   
    } else {
        alert("Por favor valida los datos y vuelve a intentar.");
    }
    
}

//codigo visto en clase
function guardarEnCookie(persona, tipoPersona) {
    if(tipoPersona == 'doctores') {

        let datosPersonaARegistrar = getCookie(tipoPersona);
        // Si la cookie está vacía, inicializarla como un arreglo vacío
        if (datosPersonaARegistrar === "") {
            datosPersonaARegistrar = "[]";
        }
        // Convertir la cookie en un arreglo de objetos
        const personas = JSON.parse(datosPersonaARegistrar);
        // Agregar la nueva mascota al arreglo
        personas.push(persona);
        // Convertir el arreglo de mascotas de nuevo a un JSON
        const nuevoJSON = JSON.stringify(personas);
        // Guardar el JSON en la cookie
        setCookie(tipoPersona, nuevoJSON);
        
    } else if (tipoPersona == 'pacientes') {
       
        // Obtener los datos de la cookie actual de mascotas
        let datosPersonaARegistrar = getCookie(tipoPersona);
        // Si la cookie está vacía, inicializarla como un arreglo vacío
        if (datosPersonaARegistrar === "") {
            datosPersonaARegistrar = "[]";
        }
        // Convertir la cookie en un arreglo de objetos
        const personas = JSON.parse(datosPersonaARegistrar);
        // Agregar la nueva mascota al arreglo
        personas.push(persona);
        // Convertir el arreglo de mascotas de nuevo a un JSON
        const nuevoJSON = JSON.stringify(personas);
        // Guardar el JSON en la cookie
        setCookie(tipoPersona, nuevoJSON);
    }   
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa las cookies y las guarda en un arreglo
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            // devolver la infromacion de la cookie que se llama igual
            return decodeURIComponent(cookie[1]);
        }
    }
    //devolver vacio si no encuentra cookie
    return "";
}

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}

function clearInputs(){    
    document.getElementById("myform").reset();
}
