import {Todo} from '../models/todo.model.js';
import {createTodoHtml} from "./create-todo-html.js";
let element;
/**
 *
 * @param {String} elementId
 * @param {array} todos
 */
export const renderTodos = ( elementId, todos = [] ) => {
    if (!element) element = document.querySelector( elementId );

    if (!element) throw new Error("Element id not found");

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHtml( todo ) );
    });
}