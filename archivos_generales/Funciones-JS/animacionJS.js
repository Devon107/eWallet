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


    // Codigo para e sider, para desblegar el ul cuando le den click
    $('liOp').addEventListener('click',function(){
        obj = $('liD').getAttribute('class');
        
        if(obj == 'des'){
            $('liD').classList.remove('des');
            $('liD').classList.add('act');
        }else{
            $('liD').classList.remove('act');
            $('liD').classList.add('des');
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