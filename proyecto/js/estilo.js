function cargarRegistro(){
    var inputs = document.getElementsByClassName('txt');
    var labels = document.getElementsByClassName("lbl");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', funo(i));
        console.log(this)
    }

    function funo(i) {
        inputs[i].addEventListener('focus', function () {
           
            labels[i].classList.add('active', 'stay');
        })
        inputs[i].addEventListener('blur', function () {
            if (inputs[i].value.length > 0) {
                console.log('cant delete')
            } else {
                labels[i].classList.remove('active', 'stay');
            }
        })
    }
}
