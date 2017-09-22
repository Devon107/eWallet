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
})();