//esta linha seleciona o elemento HTML com o ID 'calculate' e adiciona um ouvinte de evento de clique (click).
document.getElementById('calculate').addEventListener('click', function(){

// esta linha obtém o valor digitando no elemento HTML com o ID 'value' e armazena na variável 'value'.
const value = document.getElementById('value').value;

// esta linha obtém o valor digitando no elemento HTML com ID 'value' e o divide por 100 para obter uma taxa em decimal.
// o resultado é armazenado na variável 'fee'.
const fee = (document.getElementById('fee').value);

// eta linha obtém o valor digitando no elemento HTML com o ID 'time' e armazena na variável 'time'.
const time = document.getElementById('time').value;

// esta linha calcula o total com base nos valores obtidos anteriormente. O cálculo realizado usando a 
//formula de juros compostos.
const total = value * (1 + fee)**time;

// esta linha atualiza o conteúdo do elemento HTML com o ID 'total' para mostrar o resultado formato
// como uma string no formato "R$ x,xx".
document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});


