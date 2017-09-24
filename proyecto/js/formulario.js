window.addEventListener("load", iniciar, false);
var municipios = [["Ahuachapán", "Apaneca", "Atiquizaya", "Cocepción de ataco", "El refugio", "Guaymango", "Jujutla", "San Francisco Menendez", "San Lorenzo", "San Pedro Puxtla", "Tacuba", "Turín"], ["Cinquera", "Dolores", "Guacotecti", "Ilobasco", "Jutiapa", "San Isidro", "Sensuntepeque", "Tejutepeque", "Victoria"],["Agua Caliente", "Arcatao", "Azacualpa", "Chalatenango", "Comalapa", "Citalá", "Concepción Quezaltepeque", "Dulce Nombre de María", "El Carrizal", "El Paraíso", "La Laguna", "La Palma", "La Reina", "Las Vueltas", "Nueva Concepción", "Nueva Trinidad", "Nombre de Jesús", "Ojos de Agua", "Potonico", "San Antonio de la Cruz", "San Antonio Los Ranchos", "San Fernando", "San Francisco Lempa", "San Francisco Morazán", "San Ignacio", "San Isidro Labrador", "San José Cancasque", "San José Las Flores", "San Luis del Carmen", "San Miguel de Mercedes", "San Rafael", "Santa Rita", "Tejutla"]];





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
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'llibertad':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'lpaz':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'lunion':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'morazan':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'smiguel':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'ssalvador':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'svicente':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'sana':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'sonsonate':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
        case 'usulutan':
            for (i = 0; i < municipios[0].length; i++) {
                menu_municipios[i] = new Option(municipios[0][i]);
            }
            break;
    }
}
