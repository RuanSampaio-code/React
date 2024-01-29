
//TUDO É OBJETO
//Criando objeto e acessando suas propriedades e metodos
const menu = {
    class: ".principal",
    ativar() {
        const menuElement = document.querySelector(this.class)
        console.log(menuElement)
    } 
}

menu.ativar();