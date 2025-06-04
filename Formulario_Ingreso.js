let control = 0;
let contraseña = 'ACCESO';

function acceso(){
    let clave = document.getElementById('clave').value;

    if (clave != contraseña || clave ==''){
        alert('La contraseña ingresada no es correcta');
        control ++;
        if (control >=3){
            alert('No. de intentos agotados. Intente más tarde');
        }
    } else{
        window.open('https://www.youtube.com/')
    }
}   