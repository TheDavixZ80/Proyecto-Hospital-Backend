const pacientesCookie = JSON.parse(getCookie('pacientes'));
const pacientesCookieArr = JSON.parse(getCookie('pacientes' || "[]"))
//buscar la tabla mascotas en HTML para agregar las nuevas mascotas
const tablaPacientes = document.getElementById("tabla-pacientes");
const cuerpoTabla = tablaPacientes.querySelector("tbody");

for (let i = 0; i < pacientesCookie.length; i++) {
    const paciente = pacientesCookie[i];
    //insertar fila para agregar mascotas
    const fila = cuerpoTabla.insertRow();
    //insertar celdas para agregar cada uno de los datos de las mascotas
    const celdaNombrePaciente = fila.insertCell();
    const celdaApellidoPaciente = fila.insertCell();
    const celdaCedulaPaciente = fila.insertCell();
    const celdaEdadPaciente = fila.insertCell();    
    const celdaTelefono = fila.insertCell(); 
    const celdaEspecialidad = fila.insertCell();    
    //agregar la informaciona cada una de las celdas de la tabla
    celdaNombrePaciente.textContent = paciente.nombrePaciente;
    celdaApellidoPaciente.textContent = paciente.apellidoPaciente;
    celdaCedulaPaciente.textContent = paciente.cedulaPaciente;
    celdaEdadPaciente.textContent = paciente.edadPaciente;
    celdaTelefono.textContent = paciente.telefonoPaciente;    
    celdaEspecialidad.textContent = paciente.especialidadPaciente;
    
    //mediante find encontramos el medico que tenga la especialidad
    //devuelde el medico que tenga esa especialidad
    // <------- IMPLEMENTAR??
    const medicoEspecialidad = pacientesCookieArr.find(medico => medico.especialidad === paciente.especialidad);
    //crear la celda
    const celdaMedicoMascota = fila.insertCell();
    //si hay medicos colocar el nombre del medico, de lo contrario colocar por asignar
    celdaMedicoMascota.textContent = medicoEspecialidad ? medicoEspecialidad.nombreMedico : "Por asignar";
}

function getCookie(nombre) {
    //separa todas las cookies que se tengan
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        //busca la cookie que necesitemos en este caso la cookie llamada mascota
        if (cookie[0] === nombre) {
            //si encuentra la cookie devuelve la informacion desencriptada (en formato JSON)
            return decodeURIComponent(cookie[1]);
        }
    }
    //si no encuentra ninguna cookie devuelve vacio
    return "";
}