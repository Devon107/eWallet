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

    var uls = document.querySelectorAll('#VistaUl .Primer .sub');
    var lis = document.querySelectorAll('#VistaUl .Primer');
    // console.log(lis)
    // for(var i = 0; i<lis.length; i++){
        
    // }
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
