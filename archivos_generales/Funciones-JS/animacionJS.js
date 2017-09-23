(()=>{
    var li  = document.querySelectorAll('#blqMen li');
    var obj;

    document.getElementById('btnMenu').addEventListener('click',function(){
        document.getElementById('sideBar').classList.toggle('act-menu');
    })

    

    for(var i = 0; i < li.length; i++){
        li[i].addEventListener('click',function(){  

            obj = this.getAttribute('class').trim();

            if(obj == 'activado' ){
                this.classList.remove('activado');
            }else{
                
                this.classList.add('activado');
            }
           
        })
    }
<<<<<<< HEAD


    
=======
    
    
    //Esta wea son las animaciones de labels e inputs ya funcionan, podes ver en la master brench
    /*
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
    */
>>>>>>> 3360d53c7366517fc725e1238965dafe8bb93d44
})();