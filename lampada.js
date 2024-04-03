var lamp = document.getElementById('lamp2')

function quebrar(){
    lamp.src = 'lamp3.svg'
}
function ligar(){
    lamp.src = 'lamp1.svg'
    window.alert('funcionei')
}
function desligar(){
    lamp.src = 'lamp2'
}
