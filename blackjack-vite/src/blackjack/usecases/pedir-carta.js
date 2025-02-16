/**
 *
 * @param {array<string>} deck
 * @returns {string}
 */

const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}

export default pedirCarta;