import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tipos Ejemplo: ['C','D','H','S']
 * @param {array<string>} especiales Ejemplo: ['A','J','Q','K']
 * @param {array<string>} deck Ejemplo: [];
 * @returns {array<string>}
 */

const crearDeck = ( tipos, especiales, deck ) => {
    if (!tipos || !tipos.length>0) throw new Error('Tipos de carta obligatorio');
    if (!especiales || !especiales.length>0) throw new Error('Especiales de carta obligatorio');
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }

    return _.shuffle( deck );
}

export default crearDeck;