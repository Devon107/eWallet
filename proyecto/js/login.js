var bandera_sesion = false;

function iniciar_controles_login() {
    var btn_login = document.getElementById("iniciar_sesion");

    datos[2] = "ola";
    datos[3] = "123";


    btn_login.addEventListener("click", function () {
        var login_correo = document.getElementById("correo").value;
        var login_contra = document.getElementById("contra").value;
        iniciar_login(login_correo, login_contra);
    })

}

function psesion() {
    if (bandera_sesion == false) {
        primera_sesion();
    } else {
        
        contenedor.innerHTML = "";
        contenedor.innerHTML = htmlVista;
        document.getElementById('mostrar_dinero').innerHTML = monto;
    }
}

function iniciar_login(correo, contra) {
    var footer = document.getElementById("cont_footer");
    if (correo == datos[2]) {
        if (contra == datos[3]) {
            alert("Logeado");
            footer.innerHTML = "";
            psesion();


        } else {
            alert("No logeado");
        }
    } else {
        alert("No logeado");
    }
}
