function mousemove(event){

    const clientx = event.clientx
    const client = event.clienty
    
    console.log(clientx , client )
}


//forma mais simples - desustrutração de um objeto
function mousemove(event){
    const {clientX, clientY} = event;
    
    console.log(clientX , clientY )
}

//outra forma tmb

function mousemove({clientX, clientY}){
    //const {clientX, clientY} = event;
    
    console.log(clientX , clientY )
}

document.documentElement.addEventListener("mousemove", mousemove);

//desestrutrando array

//explo basico
const frutas = ["uva", 'banan']


//exemplo com destruticting
const [fruta1, fruta2] = frutas

//é muito comum no react

const useState = [
    "blue",
    function(color){
        useState[0] = color
    }
]

const [color, setcolor] = useState;


const usequadrado = [ 4, 
    function(lado){
        return 4 * lado
    }
]

//desestruturando
const [lados, perimetro] = usequadrado;
console.log(lados) //4
console.log(perimetro(10)) // function