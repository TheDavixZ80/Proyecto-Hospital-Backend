const pacientesCookie = JSON.parse(getCookie('doctores'));
const medicosCookieArr = JSON.parse(getCookie('doctores' || "[]"))
//buscar la tabla mascotas en HTML para agregar las nuevas mascotas
const tablaDoctores = document.getElementById("tabla-doctores");
const cuerpoTabla = tablaDoctores.querySelector("tbody");

for (let i = 0; i < pacientesCookie.length; i++) {
    const doctor = pacientesCookie[i];
    //insertar fila para agregar mascotas
    const fila = cuerpoTabla.insertRow();
    //insertar celdas para agregar cada uno de los datos de las mascotas
    const celdaNombreDoctor = fila.insertCell();
    const celdaApellidoDoctor = fila.insertCell();
    const celdaCedulaDoctor = fila.insertCell();
    const celdaEmailDoctor = fila.insertCell();    
    const celdaEspecialidad = fila.insertCell();
    const celdaConsultorioDoctor = fila.insertCell();
    //agregar la informaciona cada una de las celdas de la tabla
    celdaNombreDoctor.textContent = doctor.nombreDoctor;
    celdaApellidoDoctor.textContent = doctor.apellidoDoctor;
    celdaCedulaDoctor.textContent = doctor.cedulaDoctor;
    celdaEmailDoctor.textContent = doctor.emailDoctor;
    celdaEspecialidad.textContent = doctor.especialidadDoctor;
    celdaConsultorioDoctor.textContent = doctor.consultorioDelDoctor;    
    
    //mediante find encontramos el medico que tenga la especialidad
    //devuelde el medico que tenga esa especialidad
    const medicoEspecialidad = medicosCookieArr.find(medico => medico.especialidad === doctor.especialidad);
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