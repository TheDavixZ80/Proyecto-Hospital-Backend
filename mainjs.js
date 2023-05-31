function recolectarDatos() {
    // Todo esto es STRING
    const nombre = document.getElementById('form_nombre').value;
    const apellido = document.getElementById('form_apellido').value;
    const cedula = document.getElementById('form_cedula').value;
    const email = document.getElementById('form_email').value;
    const especialidad = document.getElementById('form_especialidades').value; 
    const consultorio = document.getElementById('form_consultorio').value; 

   

    /* De aqui para abajo deberia organizar*/
    // AQUI SE GENERA EL OBJETO (PUNTO 4)
    // AHORA DEBERIA PASAR A JSON Y LUEGO A COOKIE
    const doctor = {
        nombreDoctor: nombre,
        apellidoDoctor: apellido,
        cedulaDoctor: cedula,
        emailDoctor: email,
        especialidadDoctor: especialidad,
        consultorioDelDoctor: consultorio
    }  

    // Aqui me invento un JSON
    const myJson = JSON.stringify(doctor);
        
    console.log("te imprimo mi objeto: " + doctor.firstName + " " +doctor.apellidoDoctor);
    // Sale Object object
    console.log("te imprimo mi objeto full: " + doctor); 
    console.log("te imprimo mi JSON: " + myJson);
    console.log(typeof(myJson));

    // Aqui esta la COOKIE
    document.cookie = "";

    guardarEnCookie(doctor);
    alert("¡Los datos han sido registrados!");
    
  }
  
function setCookie(c_name, c_value, c_daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (c_daysToLive*24*60*60*1000))
    let expires = "expires=" + date.toUTCString();
    document.cookie = c_name + "=" + c_value + ";" + expires + ";path=/";
}

function getCookie(c_name) {
    const name = c_name + "="; // Con esto quitaba el "=" que aparecia en label
    const c_Decoded = decodeURIComponent(document.cookie);
    const c_Array = c_Decoded.split("; ");
    for (var i = 0; i < c_Array.length; i++){
        var myCookie = c_Array[i];
        while(myCookie.charAt(0) == ' '){
            myCookie = myCookie.substring(1);
        }
        if(myCookie.indexOf(name) == 0){
            return myCookie.substring(name.length, myCookie.length);
        }
    }
    return "";
}

//Todo el codigo de profe
function guardarEnCookie(mascota) {
    // Obtener los datos de la cookie actual de mascotas
    let datosMasco = getCookie("mascotas");
    // Si la cookie está vacía, inicializarla como un arreglo vacío
    if (datosMasco === "") {
        datosMasco = "[]";
    }
    // Convertir la cookie en un arreglo de objetos
    const mascotas = JSON.parse(datosMasco);
    // Agregar la nueva mascota al arreglo
    mascotas.push(mascota);
    // Convertir el arreglo de mascotas de nuevo a un JSON
    const nuevoJSON = JSON.stringify(mascotas);
    // Guardar el JSON en la cookie
    setCookie("mascotas", nuevoJSON);
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

