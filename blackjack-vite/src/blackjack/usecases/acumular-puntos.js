import valorCarta from './valor-carta.js'

/**
 *
 * @param {string} carta
 * @param {number} turno
 * @param {array<string>} puntosJugadores
 * @param puntosHTML
 * @returns {*}
 */

const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];

}

export default acumularPuntos;