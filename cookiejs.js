const mascotasCookie = JSON.parse(getCookie('mascotas'));
const medicosCookie = JSON.parse(getCookie('mascotas' || "[]"))
//buscar la tabla mascotas en HTML para agregar las nuevas mascotas
const tablaDoctores = document.getElementById("tabla-doctores");
const cuerpoTabla = tablaDoctores.querySelector("tbody");

for (let i = 0; i < mascotasCookie.length; i++) {
    const mascota = mascotasCookie[i];
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
    celdaNombreDoctor.textContent = mascota.nombreDoctor;
    celdaApellidoDoctor.textContent = mascota.apellidoDoctor;
    celdaCedulaDoctor.textContent = mascota.cedulaDoctor;
    celdaEmailDoctor.textContent = mascota.emailDoctor;
    celdaEspecialidad.textContent = mascota.especialidadDoctor;
    celdaConsultorioDoctor.textContent = mascota.consultorioDelDoctor;    
    //colocar el medico que va a tratar la mascota
    //mediante find encontramos el medico que tenga la especialidad
    //devuelde el medico que tenga esa especialidad
    const medicoEspecialidad = medicosCookie.find(medico => medico.especialidad === mascota.especialidad);
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