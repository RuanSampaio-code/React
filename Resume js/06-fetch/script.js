

const requisic = fetch("https://ranekapi.origamid.dev/json/api/produto")
    .then(response =>response.json())
    
    .then(jsonbody=>{
    document.querySelector('#app').innerHTML = jsonbody[0].nome;
    console.log(jsonbody)
    response.json()
})

//escrevendo infomação no servidor
//criando novos usuarios
const data = {
    id: 'andrerafa',
    nome: 'Andre',
    email: 'andrerafa@origamid.com',
    senha: '123456',
    cep: '123456',
    rua: 'Ali Perto',
    numero: '230',
    bairro: 'Botafogo',
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
  };


fetch("https://ranekapi.origamid.dev/json/api/usuario ", {
    method: "post",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
})


