(()=>{
    var li  = document.querySelectorAll('#blqMen li');
    var obj;

    
    

    // for(var i = 0; i < li.length; i++){
    //     li[i].addEventListener('click',function(){  

    //         obj = this.getAttribute('class').trim();

    //         if(obj == 'activado' ){
    //             this.classList.remove('activado');
    //         }else{
                
    //             this.classList.add('activado');
    //         }
           
    //     })
    // }

   
    // console.log(lis)
    // for(var i = 0; i<lis.length; i++){
        
    // }
   


  

    var inputs = document.getElementsByClassName('txt');
    var labels = document.getElementsByClassName("lbl");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', funo(i));
    }

    function funo(i) {
        inputs[i].addEventListener('focus', function () {
            labels[i].classList.add('active', 'stay');
        })
        inputs[i].addEventListener('blur', function () {
            if (inputs[i].value.length > 0) {
                console.log('cant delete')
            }
            else {
                labels[i].classList.remove('active', 'stay');
            }
        })
    }
    
})();

function verSelect(){
    var tipoPago = document.getElementById('tipoP');
   if(tipoPago.options[tipoPago.selectedIndex].value == 'c'){
    document.getElementById('cuentas').style.display = 'block';
    document.getElementById('tarjetas').style.display = 'none';
   }else if(tipoPago.options[tipoPago.selectedIndex].value == 't'){
    document.getElementById('cuentas').style.display = 'none';
    document.getElementById('tarjetas').style.display = 'block';
   }else if(tipoPago.options[tipoPago.selectedIndex].value == 'e'){
    document.getElementById('cuentas').style.display = 'none';
    document.getElementById('tarjetas').style.display = 'none';
   }
}
