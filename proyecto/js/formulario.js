window.addEventListener("load", iniciar, false);
var municipios = [ /*Ahuachapán*/
        ["Ahuachapán", "Apaneca", "Atiquizaya", "Cocepción de ataco", "El refugio", "Guaymango", "Jujutla", "San Francisco Menendez", "San Lorenzo", "San Pedro Puxtla", "Tacuba", "Turín"],
                  /*Cabañas*/
    ["Cinquera", "Dolores", "Guacotecti", "Ilobasco", "Jutiapa", "San Isidro", "Sensuntepeque", "Tejutepeque", "Victoria"],
                  /*Chalatenango*/
    ["Agua Caliente", "Arcatao", "Azacualpa", "Chalatenango", "Comalapa", "Citalá", "Concepción Quezaltepeque", "Dulce Nombre de María", "El Carrizal", "El Paraíso", "La Laguna", "La Palma", "La Reina", "Las Vueltas", "Nueva Concepción", "Nueva Trinidad", "Nombre de Jesús", "Ojos de Agua", "Potonico", "San Antonio de la Cruz", "San Antonio Los Ranchos", "San Fernando", "San Francisco Lempa", "San Francisco Morazán", "San Ignacio", "San Isidro Labrador", "San José Cancasque", "San José Las Flores", "San Luis del Carmen", "San Miguel de Mercedes", "San Rafael", "Santa Rita", "Tejutla"],
                  /*Cuscatlán*/
    ["Candelaria", "Cojutepeque", "El Carmen", "El Rosario", "Monte San Juan", "Oratorio de Concepción", "San Bartolomé Perulapía", "San Cristóbal", "San José Guayabal", "San Pedro Perulapán", "San Rafael Cedros", "San Ramón", "Santa Cruz Analquito", "Santa Cruz Michapa", "Suchitoto", "Tenancingo"],
                  /*La Libertad*/
    ["Antiguo Cuscatlán", "Chiltiupán", "Ciudad Arce", "Colón", "Comasagua", "Huizúcar", "Jayaque", "Jicalapa", "La Libertad", "Nueva San Salvador (Santa Tecla)", "Nuevo Cuscatlán", "San Juan Opico", "Quezaltepeque", "Sacacoyo", "San José Villanueva", "San Matías", "San Pablo Tacachico", "Talnique", "Tamanique", "Teotepeque", "Tepecoyo", "Zaragoza"],
                  /*La Paz*/
    ["Cuyultitán", "El Rosario", "Jerusalén", "Mercedes La Ceiba", "Olocuilta", "Paraíso de Osorio", "San Antonio Masahuat", "San Emigdio", "San Francisco Chinameca", "San Juan Nonualco", "San Juan Talpa", "San Juan Tepezontes", "San Luis Talpa", "San Luis La Herradura", "San Miguel Tepezontes", "San Pedro Masahuat", "San Pedro Nonualco", "San Rafael Obrajuelo", "Santa María Ostuma", "Santiago Nonualco", "Tapalhuaca", "Zacatecoluca"],
                  /*La Unión*/
    ["Anamorós", "Bolivar", "Concepción de Oriente", "Conchagua", "El Carmen", "El Sauce", "Intipucá", "La Unión", "Lislique", "Meanguera del Golfo", "Nueva Esparta", "Pasaquina", "Polorós", "San Alejo", "San José", "Santa Rosa de Lima", "Yayantique", "Yucuaiquín"],
                  /*Morazán*/
    ["Arambala", "Cacaopera", "Chilanga", "Corinto", "Delicias de Concepción", "El Divisadero", "El Rosario", "Gualococti", "Guatajiagua", "Joateca", "Jocoaitique", "Jocoro", "Lolotiquillo", "Meanguera", "Osicala", "Perquín", "San Carlos", "San Fernando", "San Francisco Gotera", "San Isidro", "San Simón", "Sensembra", "Sociedad", "Torola", "Yamabal", "Yoloaiquín"],
                  /*San Miguel*/
    ["Carolina", "Chapeltique", "Chinameca", "Chirilagua", "Ciudad Barrios", "Comacarán", "El Tránsito", "Lolotique", "Moncagua", "Nueva Guadalupe", "Nuevo Edén de San Juan", "Quelepa", "San Antonio del Mosco", "San Gerardo", "San Jorge", "San Luis de la Reina", "San Miguel", "San Rafael Oriente", "Sesori", "Uluazapa"],
                  /*San Salvador*/
    ["Aguilares", "Apopa", "Ayutuxtepeque", "Cuscatancingo", "Ciudad Delgado", "El Paisnal", "Guazapa", "Ilopango", "Mejicanos", "Nejapa", "Panchimalco", "Rosario de Mora", "San Marcos", "San Martín", "San Salvador", "Santiago Texacuangos", "Santo Tomás", "Soyapango", "Tonacatepeque"],
                  /*San Vicente*/
    ["Apastepeque", "Guadalupe", "San Cayetano Istepeque", "San Esteban Catarina", "San Ildefonso", "San Lorenzo", "San Sebastián", "San Vicente", "Santa Clara", "Santo Domingo", "Tecoluca", "Tepetitán", "Verapaz"],
                  /*Santa Ana*/
    ["Candelaria de la Frontera", "Chalchuapa", "Coatepeque", "El Congo", "El Porvenir", "Masahuat", "Metapán", "San Antonio Pajonal", "San Sebastián Salitrillo", "Santa Ana", "Santa Rosa Guachipilín", "Santiago de la Frontera", "Texistepeque"],
                  /*Sonsonate*/
    ["Acajutla", "Armenia", "Caluco", "Cuisnahuat", "Izalco", "Juayúa", "Nahuizalco", "Nahulingo", "Salcoatitán", "San Antonio del Monte", "San Julián", "Santa Catarina Masahuat", "Santa Isabel Ishuatán", "Santo Domingo Guzmán", "Sonsonate", "Sonzacate"],
                  /*Usulután*/
    ["Alegría", "Berlín", "California", "Concepción Batres", "El Triunfo", "Ereguayquín", "Estanzuelas", "Jiquilisco", "Jucuapa", "Jucuarán", "Mercedes Umaña", "Nueva Granada", "Ozatlán", "Puerto El Triunfo", "San Agustín", "San Buenaventura", "San Dionisio", "San Francisco Javier", "Santa Elena", "Santa María", "Santiago de María", "Tecapán", "Usulután"]];

var expresiones = [ /*Solo letras 0*/
    /^([A-Z]|\s)+$/i,
                   /*e-Mail 1*/
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  /*Contraseña*/
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&])([A-Za-z\d$@$!%*?&]|[\S]){8,}$/,
                  /*Dui*/
    /^[0-9]{8}-?[0-9]$/,
                  /*NIT*/
    /^(\d{4}-\d{6}-\d{3}-\d{1}|\d{14})$/,
/*Telefono 5*/
/^([76]\d{3}-?\d{4}|\+?503[76]\d{7})$/];

var validarfinal = [];
var datos = [];

/*Objeto*/
function Cliente() {
    this.nombres = "";
    this.apellidos = "";
    this.email = "";
    this.contrasena = "";
    this.direccion = "";
    this.pregunta = "";
    this.respuesta = "";
    this.dui = "";
    this.nit = "";
    this.telefono = "";
    this.fnacimiento = "";
}

var nuevocliente = new Cliente();

function iniciar() {
    var dias = document.getElementById("dia");
    for (i = 0; i < 31; i++) {
        dias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
    }

    var dpto = document.getElementById("departamento");
    dpto.addEventListener("change", function () {
        var departamento = dpto.value;
        llenar_municipios(departamento, document.getElementById("municipio"));
    })

    var contra1 = document.getElementById("pass");
    var contra2 = document.getElementById("pass2");

    contra1.addEventListener("keyup", function () {
        validar_contra(contra1.value, expresiones[2]);
    })

    contra2.addEventListener("keyup", function () {
        var a = contra1.value;
        var b = contra2.value;
        validar_contra2(a, b)
    })

    var nombre = document.getElementById("nombres");
    nombre.addEventListener("keyup", function () {
        validar_nombre(nombre.value, expresiones[0]);
    })

    var apellido = document.getElementById("apellidos");
    apellido.addEventListener("keyup", function () {
        validar_apellido(apellido.value, expresiones[0]);
    })

    var correo = document.getElementById("email");
    correo.addEventListener("keyup", function () {
        validar_correo(correo.value, expresiones[1]);
    })
    var dui = document.getElementById("dui");
    dui.addEventListener("keyup", function () {
        validar_dui(dui.value, expresiones[3]);
    })

    var nit = document.getElementById("nit");
    nit.addEventListener("keyup", function () {
        validar_nit(nit.value, expresiones[4])
    })
    var telefono = document.getElementById("celular");
    telefono.addEventListener("keyup", function () {
        validar_telefono(telefono.value, expresiones[5]);
    })

    var boton_enviar = document.getElementById("enviar");
    boton_enviar.addEventListener("click", function () {
        introducir_campos();
    })
}

/*Validaciones*/
function validar_nombre(valor, exp) {
    var label = document.getElementById("lbl1");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Solo se permiten letras";
        validarfinal[0] = false;
    } else {
        label.innerHTML = "Nombres: ";
        validarfinal[0] = true;
        datos[0] = valor;
    }
}

function validar_apellido(valor, exp) {
    var label = document.getElementById("lbl2");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Solo se permiten letras";
        validarfinal[1] = false;
    } else {
        label.innerHTML = "Apellidos: ";
        validarfinal[1] = true;
        datos[1] = valor;
    }
}

function validar_correo(valor, exp) {
    var label = document.getElementById("lbl3");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Ingrese un e-mail válido";
        validarfinal[2] = false;
    } else {
        label.innerHTML = "e-Mail: ";
        validarfinal[2] = true;
        datos[2] = valor;
    }
}

function validar_contra(valor, exp) {
    var label = document.getElementById("lbl4");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Contraseña débil o con espacios";
        validarfinal[3] = false;
    } else {
        label.innerHTML = "Contraseña: ";
        validarfinal[3] = true;
    }
}


function validar_contra2(contra1, contra2) {
    var label = document.getElementById("lbl5");
    if (contra2 != contra1) {
        label.innerHTML = "Las contraseñas no coinciden";
        validarfinal[4] = false;
    } else {
        label.innerHTML = "Las contraseñas coinciden";
        validarfinal[4] = true;
        datos[3] = contra2;
    }
}


function validar_dui(valor, exp) {
    var label = document.getElementById("lbl8");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Ingrese un DUI válido";
        validarfinal[5] = false;
    } else {
        label.innerHTML = "Dui:"
        validarfinal[5] = true;
        datos[7] = valor;
    }
}

function validar_nit(valor, exp) {
    var label = document.getElementById("lbl9");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Ingrese un NIT válido";
        validarfinal[6] = false;
    } else {
        label.innerHTML = "NIT: "
        validarfinal[6] = true;
        datos[8] = valor;
    }
}

function validar_telefono(valor, exp) {
    var label = document.getElementById("lbl10");
    if (exp.test(valor) !== true) {
        label.innerHTML = "Ingrese un teléfono celular válido";
        validarfinal[7] = false;
    } else {
        label.innerHTML = "Teléfono: "
        validarfinal[7] = true;
        datos[9] = valor;
    }
}

function introducir_campos() {
    var dpto = document.getElementById("departamento").value;
    var mun = document.getElementById("municipio").value;
    var dir = document.getElementById("direccion").value;
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var annio = document.getElementById("a_nacimiento").value;
    datos[4] = dpto + ", " + mun + ", " + dir;
    datos[5] = document.getElementById("pregunta").value;
    datos[6] = document.getElementById("respuesta").value;
    datos[10] = dia + " de " + mes + " del " + annio;
    nuevocliente.nombres = datos[0];
    nuevocliente.apellidos = datos[1];
    nuevocliente.email = datos[2];
    nuevocliente.contrasena = datos[3];
    nuevocliente.direccion = datos[4];
    nuevocliente.pregunta = datos[5];
    nuevocliente.respuesta = datos[6];
    nuevocliente.dui = datos[7];
    nuevocliente.nit = datos[8];
    nuevocliente.telefono = datos[9];
    nuevocliente.fnacimiento = datos[10];

    for (var i = 0; i <= 10; i++) {
        document.write(datos[i] + "<br><br>");
    }

}

/*Llenado de Select*/

function quitar_municipios(menu_municipios) {
    for (var i = 0; i < menu_municipios.options.length; i++) {
        menu_municipios.options[i] = null;
    }
}

function llenar_municipios(departamento, menu_municipios) {
    var i;
    quitar_municipios(menu_municipios);
    switch (departamento) {

        case 'ahuachapan':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'cabanas':
            for (i = 0; i < municipios[1].length; i++) {
                menu_municipios[i] = new Option(municipios[1][i]);
            }
            break;
        case 'chalatenango':
            for (i = 0; i < municipios[2].length; i++) {
                menu_municipios[i] = new Option(municipios[2][i]);
            }
            break;
        case 'cuscatlan':
            for (i = 0; i < municipios[3].length; i++) {
                menu_municipios[i] = new Option(municipios[3][i]);
            }
            break;
        case 'llibertad':
            for (i = 0; i < municipios[4].length; i++) {
                menu_municipios[i] = new Option(municipios[4][i]);
            }
            break;
        case 'lpaz':
            for (i = 0; i < municipios[5].length; i++) {
                menu_municipios[i] = new Option(municipios[5][i]);
            }
            break;
        case 'lunion':
            for (i = 0; i < municipios[6].length; i++) {
                menu_municipios[i] = new Option(municipios[6][i]);
            }
            break;
        case 'morazan':
            for (i = 0; i < municipios[7].length; i++) {
                menu_municipios[i] = new Option(municipios[7][i]);
            }
            break;
        case 'smiguel':
            for (i = 0; i < municipios[8].length; i++) {
                menu_municipios[i] = new Option(municipios[8][i]);
            }
            break;
        case 'ssalvador':
            for (i = 0; i < municipios[9].length; i++) {
                menu_municipios[i] = new Option(municipios[9][i]);
            }
            break;
        case 'svicente':
            for (i = 0; i < municipios[10].length; i++) {
                menu_municipios[i] = new Option(municipios[10][i]);
            }
            break;
        case 'sana':
            for (i = 0; i < municipios[11].length; i++) {
                menu_municipios[i] = new Option(municipios[11][i]);
            }
            break;
        case 'sonsonate':
            for (i = 0; i < municipios[12].length; i++) {
                menu_municipios[i] = new Option(municipios[12][i]);
            }
            break;
        case 'usulutan':
            for (i = 0; i < municipios[13].length; i++) {
                menu_municipios[i] = new Option(municipios[13][i]);
            }
            break;
    }
}
