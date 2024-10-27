//Crie uma função com parâmetros tipados (number, string, boolean, etc.). Ex:
function apresentar (nome: string, idade: number, exibirIdade: boolean): string{
  let apresentacao = exibirIdade ? `Olá ${nome} você possui ${idade.toString()} de idade` : `Olá ${nome}`;
  return `Olá ${nome}`;
}
console.log(apresentar("Wagner Worst", 28, true));

function exibirFilme() : string{
//Defina variáveis com os tipos string, number e boolean e um objeto qualquer.
  let nomeFilme: string;
  let anoLancamento: number;
  let emCartaz: boolean;

  nomeFilme = "Drácula de Bram Stoker";
  anoLancamento = 1992;
  emCartaz = false;

  let Filme = {
    nome: nomeFilme,
    ano: anoLancamento,
    emExibicao: emCartaz,
  };  
//Exiba o valor dessas variáveis no console.
  return `${Filme.nome}\nAno: ${Filme.ano.toString()}\nEm Cartaz:${Filme.emExibicao}`;
};
//Chame a função criada e mostre o resultado no console. Ex:
console.log(exibirFilme());