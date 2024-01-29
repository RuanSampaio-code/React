
/* function upper(nome) {
    return nome.toUpperCase();
};

//outra forma
const upperisso = function(nome1){
    return nome1.toUpperCase();
};

//arrow function

const uppen2 = (nome2) =>{
    return nome2.toUpperCase();
};

//arrow function mais simplificado caso retorne apenas uma coisa
const uppen3 = (nome3) => nome3.length;
console.log(uppen3("ola"));
 */

//coneito de class
class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu);
    }

    addActiveEvent(){
        this.menuElement.addEventListener("click", (event) =>{
            event.target.classList.add("active");
        });
    }
}

const menu = new Menu(".principal");
menu.addActiveEvent();
console.log(menu)