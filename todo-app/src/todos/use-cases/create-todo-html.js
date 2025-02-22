import { Todo } from '../models/todo.model.js';

/**
 *
 * @param {Todo} todo
 */
export const createTodoHtml = ( todo ) => {
    if ( !todo ) throw new Error("Todo is required");

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.done ? 'checked': ''}>
            <label>${ todo.description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement( 'li' );
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id );
    if (todo.done){
        liElement.classList.add('completed');
    }

    return liElement;
}