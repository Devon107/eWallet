var bandera_sesion = false;

function iniciar_controles_login() {
    var btn_login = document.getElementById("iniciar_sesion");

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
        barraLateralDesplegar();
        agregarVista();
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
function barraLateralDesplegar(){

    var uls = document.querySelectorAll('#VistaUl .Primer .sub');
    var lis = document.querySelectorAll('#VistaUl .Primer');
 
    lis[0].addEventListener('click',function(){
        
         let cl = uls[0].getAttribute('class').trim();
       
         if(cl == 'sub'){
            uls[0].classList.remove('sub');
            uls[0].classList.add('act');
         }else if(cl == 'act'){
            uls[0].classList.remove('act');
            uls[0].classList.add('sub');
         }
     })
     lis[1].addEventListener('click',function(){
        
         let cl = uls[1].getAttribute('class').trim();
       
         if(cl == 'sub'){
            uls[1].classList.remove('sub');
            uls[1].classList.add('act');
         }else if(cl == 'act'){
            uls[1].classList.remove('act');
            uls[1].classList.add('sub');
         }
     })
     lis[2].addEventListener('click',function(){
        
         let cl = uls[2].getAttribute('class').trim();
       
         if(cl == 'sub'){
            uls[2].classList.remove('sub');
            uls[2].classList.add('act');
         }else if(cl == 'act'){
            uls[2].classList.remove('act');
            uls[2].classList.add('sub');
         }
     })
     lis[3].addEventListener('click',function(){
        
         let cl = uls[3].getAttribute('class').trim();
       
         if(cl == 'sub'){
            uls[3].classList.remove('sub');
            uls[3].classList.add('act');
         }else if(cl == 'act'){
            uls[3].classList.remove('act');
            uls[3].classList.add('sub');
         }
     })

}

function agregarVista(){
    subVista = document.querySelectorAll('.vistas');
    
    subVista[0].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[0];
    })

    subVista[1].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[1];
    })

    subVista[2].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[2];
    })

    subVista[3].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[3];
    })

    subVista[4].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[4];
    })

    subVista[5].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[5];
    })

    subVista[6].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[6];
    })


    subVista[7].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[7];
    })

    subVista[8].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[8];
    })

    subVista[9].addEventListener('click',function(){
        document.getElementsByClassName('info')[0].innerHTML = "";
        document.getElementsByClassName('info')[0].innerHTML = VistasTotales[9];
    })


    document.getElementById('cerrar').addEventListener('click',function(){
        contenedor.innerHTML = "";
        contenedor.innerHTML = htmlIndex;
    })
}

