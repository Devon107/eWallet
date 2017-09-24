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


function iniciar() {
    var dpto = document.getElementById("departamento");
    dpto.addEventListener("change", function () {
        var departamento = dpto.value;
        llenar_municipios(departamento, document.getElementById("municipio"));
    })
}

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
