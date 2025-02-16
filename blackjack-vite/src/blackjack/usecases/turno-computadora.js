import acumularPuntos from './acumular-puntos.js';
import crearCarta from "./crear-carta.js";
//import determinarGanador from './determinar-ganador.js';

/**
 *
 * @param {number} puntosMinimos
 * @param {string} carta
 * @param {array<string>} puntosJugadores
 * @param puntosHTML
 */

const turnoComputadora = ( puntosMinimos, carta, puntosJugadores, puntosHTML ) => {
    let puntosComputadora = 0;
    do {
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length-1, puntosJugadores, puntosHTML );
        crearCarta(carta, puntosJugadores.length-1);

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    //determinarGanador( puntosMinimos, puntosComputadora, puntosJugadores );
}

export default turnoComputadora;