

//map filçter e reduxcem retornam uma rray mnova
const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];
  
  //filter faz uma verificação para filtrar uma codição e retorna uma array  com os items q satisfazem
  const precosFiltroRS = precos.filter(preco => preco.includes("R$"));

  console.log(precosFiltroRS)


//função map - pega uma array e retorna uma nova array modificando
const precoNumeros = precosFiltro.map((preco) =>
    Number(preco.replace("R$ ", ""))
);