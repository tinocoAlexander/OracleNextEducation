/**
 *
 * @param {string} carta
 * @param {number} turno
 */

const crearCarta = ( carta, turno) => {
    const imgCarta = document.createElement('img');
    const divCartasJugadores = document.querySelectorAll('.divCartas');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}

export default crearCarta;