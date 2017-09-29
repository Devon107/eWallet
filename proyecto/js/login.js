function iniciar_controles_login() {
    var btn_login = document.getElementById("iniciar_sesion");


    btn_login.addEventListener("click", function () {
        var login_correo = document.getElementById("correo").value;
        var login_contra = document.getElementById("contra").value;
        iniciar_login(login_correo, login_contra);
    })

}

function iniciar_login(correo, contra) {

    if (correo == datos[2]) {
        if (contra == datos[3]) {
            alert("Logeado");
        } else {
            alert("No logeado");
        }
    } else {
        alert("No logeado");
    }
}
