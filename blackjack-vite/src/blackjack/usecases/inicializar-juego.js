import crearDeck from './crear-deck.js'

const inicializarJuego = ( numJugadores, puntosHTML, divCartasJugadores, btnPedir, btnDetener, deck, puntosJugadores ) =>{
    console.clear();
    const tipos      = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
    deck = crearDeck( tipos, especiales, deck );
    for ( let i = 0; i < numJugadores; i++ ) {
        puntosJugadores.push(0);
    }
    puntosHTML.forEach( elem  => elem.innerHTML = '' );
    divCartasJugadores.forEach( elem  => elem.innerHTML = '' );
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    return { deck, puntosJugadores };
}

export default inicializarJuego;