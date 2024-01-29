function area(raio){
    return Math.PI * raio * raio;
}

function circunf(raio){
    return 2*raio*Math.PI;
}

function aleatorio(){
    return Math.random
}

//expeortando em um objeto unico
const Circulo = {
    area,
    circunf,
    aleatorio
}


export default Circulo;





