url: `https://api.coincap.io/v2/assets`

const lista = document.querySelector('#ul');

const creatLi = ({ name, symbol, priceUsd }, real) => {
  const criarLi = document.createElement('li');
  criarLi.innerText = `${name} (${symbol}): ${parseFloat(priceUsd * real).toFixed(2)}`
  lista.appendChild(criarLi);  
}

const getCripto = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  try {
    const fet = await fetch(url);
    const data = await fet.json();
    const dados = data.data;
    const fetConvert = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
    const dataConvert = await fetConvert.json();
    const convertReal = dataConvert.usd.brl;
    dados.filter((element, index) => index < 10? creatLi(element, convertReal) : element);
  } catch (error) {
    console.log(error);
  }
};
getCripto();

