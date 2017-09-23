(() => {
    var ac = document.getElementById('txt');
    document.getElementById('txt').addEventListener('focus', function () {
        document.getElementById('lbl1').classList.add('active', 'stay');
    })
    document.getElementById('txt').addEventListener('blur', function () {
        if (ac.value.length > 0) {
            console.log('cant delete')
        }
        else {
            document.getElementById('lbl1').classList.remove('active', 'stay');
        }
    })
})();