var Teemo = {
   
    get: function(id){
        
        return  Teemo.extend(document.getElementById(id), Teemo);
    },
    extend: function(elemento, opciones){
        
        for (var name in opciones) elemento[name] = opciones[name];
        return elemento;
    },
    click: function(){
        if(this.addEventLister){
            console.log(this.eve);
        }
    }
}
//alias
window.$ = Teemo.get;