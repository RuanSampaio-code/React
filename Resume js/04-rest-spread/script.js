
//rest - array 

/*Os três pontos (...) antes de clientes indicam que este parâmetro é um "rest parameter" (parâmetro restante). 
Isso significa que ele pode aceitar um número variável de argumentos, e todos esses argumentos serão agrupados em um array chamado clientes. 
Em outras palavras, clientes será um array que contém todos os argumentos adicionais passados para a função após o primeiro parâmetro (empresa). */


function show(empresa, clientes){
    clientes.forEach(cliente => {
        console.log("ola")
    });
}



function showList(empresa, ...clientes){
    console.log(empresa)
    console.log(clientes)

}

showList("empessa teste", "ruan", "amigo")



//spread - expalhar

const numeros = [ 1,2,3,3,66,8585,66]
console.log(Math.max(numeros)) // cojnnsole -> NaN

//resolvendo
console.log(Math.max(...numeros)) 

//outro exemplo

const items = document.querySelectorAll("li");
console.log(items) // NaN
/* 
[...items].map(item => {
    console.log(item)
}) */


//tranfomrandop essa lista de items em array

const item2 = Array.from( document.querySelectorAll("li"));
console.log(item2) // NaN


//clonando objeto utulizando spread
/* const carro = {
    cor: 'azul',
    portas: 4,
    ano: 2020
} */

//clone aplicado
//const cloneCarro = {...carro} 

//aplcioando idea de classes:
class Transporte {
    constructor(){
        this.terrrestre = true
    }
}


class Carro extends Transporte{
    constructor(){
        super();
        this.cor = cor;
        this.portas = portas
    }

}


const carro = new Carro("vermelhgo", 4);

//clone de carro
const cloneCarro =  {...carro}

console.log(carro)
console.log(cloneCarro)
