/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes)
 * 2H = Two of hearths (Corazones)
 * 2S = Two of spades (espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
    puntosComputadora = 0;
const puntosSmall = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');


const createDeck = () => {
    for (let i = 2; i<=10; i++ ) {
        for( let tipo of tipos ){
        deck.push( i + tipo);
        }
    }

    for(let tipo of tipos){
        for (let esp of especiales){                                                                                                                                                                                                                                                                            
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

const pedirCarta = () => {
    deckJugador = [];
    if (deck.length > 0){
        obtenerCarta = deck.pop();
    }
    else {
        throw 'No hay cartas en el deck';
    }

    return obtenerCarta;
}

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11:10
        : valor * 1;
}

/**
 * Turnos de computadora
 */
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosSmall[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.alt = 'Error while loading the image';
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos < 21) );

    setTimeout( () => {
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie ganó");
        }
        else if (puntosMinimos > 21) {
            alert("La computadora gana");
        }
        else if (puntosComputadora > 21) {
            alert("El jugador gana");
        }
        else {
            alert("La computadora gana");
        }
    },500);

}


/**
 * Turnos de jugador
 */
createDeck(); // Declaro mi deck

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosSmall[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = 'Error while loading the image';
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
    else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click', () => {
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    deck = []
    createDeck();
    puntosJugador=0;
    puntosComputadora=0;
    puntosSmall[0].innerText = 0;
    puntosSmall[1].innerText = 0;
    document.querySelectorAll('.carta').forEach(carta => carta.remove());
})

console.log(deck);
