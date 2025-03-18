// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista = '';

function agregarAmigo(){ 
    
    let valorCampo = document.getElementById('amigo').value

    if(valorCampo === ''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = '';
        recorreAmigos(amigos);
    }

}

function recorreAmigos(amigos){
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
   

    for (let index = 0; index < amigos.length; index++) {
        let amigo = amigos[index];
        //console.log(amigo);
        lista.innerHTML += '<li>'+amigo+'</li>';         
    }

    

}

function sortearAmigo(){

    if(amigos.length >0){
        maximoNumeroAmigos = amigos.length - 1;
        console.log(maximoNumeroAmigos);
        let numeroRandom = Math.floor(Math.random()*maximoNumeroAmigos);
        resultado.innerHTML = amigos[numeroRandom];
    }else{
        alert('La lista de amigos está vacía. Ingrese amigos por favor.')
    }

    
}