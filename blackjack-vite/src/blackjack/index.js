import pedirCarta from "./usecases/pedir-carta.js";
import turnoComputadora from "./usecases/turno-computadora.js";
import inicializarJuego from "./usecases/inicializar-juego.js";
import acumularPuntos from "./usecases/acumular-puntos.js";
import crearCarta from "./usecases/crear-carta.js";

const miModulo = (() => {
    'use strict'
    let deck = [],
        puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo   = document.querySelector('#btnNuevo'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    // Desactivacion de botones hasta nuevo juego
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    // Botones

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(deck);
        const puntosJugador =  acumularPuntos( carta, 0, puntosJugadores, puntosHTML);

        crearCarta(carta, 0);

        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores[0], pedirCarta(deck), puntosJugadores, puntosHTML);

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores[0], pedirCarta(deck), puntosJugadores, puntosHTML);
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], pedirCarta(deck), puntosJugadores, puntosHTML);
    });

    btnNuevo.addEventListener('click', () => {
        deck = [];
        inicializarJuego( 2, puntosHTML, divCartasJugadores, btnPedir, btnDetener, deck, puntosJugadores );
        console.log(deck);
    });

    return {
        nuevoJuego: inicializarJuego
    }
})();