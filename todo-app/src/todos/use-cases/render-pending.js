import todoStore, {Filters} from "../../store/todo.store.js";

let element;
/**
 *
 * @param {String} elementId
 */
export const renderPending = (elementId) => {
    if (!element) {
        element = document.querySelector(elementId);
    }
    if (!element) throw new Error('No element with id ' + elementId);

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;
}