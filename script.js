var jogadores = []; 

function adicionarNovoJogador() {
    var nomeNovoJogador = document.getElementById("nomeNovoJogador").value;

    if (nomeNovoJogador.trim() !== "") {
        var novoJogador = {
            nome: nomeNovoJogador,
            vitoria: 0,
            empate: 0,
            derrota: 0,
            pontos: 0
        };

        jogadores.push(novoJogador);
        exibirNaTela();
    }

    document.getElementById("nomeNovoJogador").value = "";
}

function removerJogador(index) {
    jogadores.splice(index, 1);
    exibirNaTela();
}

function exibirNaTela() {
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = ""; 
  
    for (var i = 0; i < jogadores.length; i++) {
        tabelaJogadores.innerHTML += `
            <tr>
                <td>${jogadores[i].nome}</td>
                <td>${jogadores[i].vitoria}</td>
                <td>${jogadores[i].empate}</td>
                <td>${jogadores[i].derrota}</td>
                <td>${jogadores[i].pontos}</td>
                <td><button onclick="adicionarVitoria(jogadores[${i}])">Vitória</button></td>
                <td><button onclick="adicionarEmpate(jogadores[${i}])">Empate</button></td>
                <td><button onclick="adicionarDerrota(jogadores[${i}])">Derrota</button></td>
                <td><button onclick="removerJogador(${i})">Remover</button></td>
            </tr>
        `;
    }
}

function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos += 3;
    exibirNaTela();
}

function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
}
