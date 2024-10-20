const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

const rollDice = async () => Math.floor(Math.random() * 6) + 1;
const getRandomBlock = async () => {
    let random = Math.random();
    let result;

    switch(true) {
        case random < 0.33:
            result = 'RETA';
            break;
        case random < 0.66:
            result = 'CURVA';
            break;
        default:
            result = 'CONFRONTO'
    }

    return result;
} 
const playRaceEngine = async (character1, character2) => {
    for(let round = 1; round <= 5; round++) {
        console.log(`Rodada ${round}`);
        // sortear bloco
        let block = await getRandomBlock();
        console.log(`O bloco ${block} foi selecionado.`)
    }
}

(async function main() {
    console.log(`Corrida entre ${player1.nome} e ${player2.nome} começando...`);
    await playRaceEngine(player1, player2);
})();