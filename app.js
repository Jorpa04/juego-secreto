let numerosecreto = 0;
let intentos = 0;
let numeromaximo = 10;
let maximosIntentos = 3;


function asignartextoelemento (elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 }


function verificarintento() {
    let numerousuario = parseInt(document.getElementById('valorusuario').value) ;
    if (isNaN(numerousuario)) {
        asignartextoelemento('p', 'Por favor, ingresa un número válido');
        limpiarcaja();
        return;
}
    intentos++;
    console.log(intentos)

    console.log(intentos);
    if ( numerousuario === numerosecreto) {
    asignartextoelemento( 'p', `Acertaste el numero secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`) ; 
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('valorusuario').setAttribute('disabled', 'true');



    } else if (intentos >= maximosIntentos) {
        asignartextoelemento('p', `Llegaste al número máximo de ${maximosIntentos} intentos. El número secreto era ${numerosecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('valorusuario').setAttribute('disabled', 'true');

    
    }else {
        //el usuario no acerto 
        if ( numerousuario > numerosecreto){
            asignartextoelemento('p', 'El numero secreto es menor');
        } else{
            asignartextoelemento('p', 'El numero secreto es mayor');
        } 
            
            limpiarcaja();
    }
    
    return;
} 

function limpiarcaja() {
let valorcaja = document.querySelector('#valorusuario').value = '';

}


function generarnumerosecreto () {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(numerogenerado);

    return numerogenerado;
    }

    
        
    



function condicionesiniciales(){
    asignartextoelemento('h1', 'juego del numero secreto');
     asignartextoelemento('p',`Inserte un numero del 1 al ${numeromaximo}`);
     numerosecreto = generarnumerosecreto();
     intentos = 0;
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
     document.getElementById('valorusuario').removeAttribute('disabled');

}
function reiniciarjuego() {
    //,limpiar caja 
    limpiarcaja();

    // indicar mensaje de intervalo de numero
    condicionesiniciales();
 
}

condicionesiniciales();