const filmes = ['A freira', 'corra', 'O pacto'];
console.log(`O primeiro filme é ${filmes[0]}`)


const dataNc = 2003;
const dataAtual = new Date().getFullYear();

const idade = dataAtual- dataNc;
console.log(` Sua idade é ${idade} anos`)

const musicas = ['Shirt', 'Cruel Summer', 'Into you'];
console.log(musicas)
musicas.push('7 rings')
musicas.push('Everyday')
for (musica of musicas) {
  console.log(musicas);
}
