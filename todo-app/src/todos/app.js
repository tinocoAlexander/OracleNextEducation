import html from './app.html?raw';
import todoStore, { Filters } from "../store/todo.store.js";
import {renderTodos, renderPending} from "./use-cases/index.js";


const ElementIdDs = {
    ClearCompleted: ".clear-completed",
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    DeleteTodo: '.destroy',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 *
 * @param {string} elementId
 */
export const app = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIdDs.TodoList, todos );
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending( ElementIdDs.PendingCountLabel );
    }

    // Cuando la funcion App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document. querySelector( ElementIdDs.NewTodoInput );
    const todoListUL = document.querySelector( ElementIdDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIdDs.ClearCompleted );
    const filtersUL = document.querySelectorAll( ElementIdDs.TodoFilters );

    // Listeners
    newDescriptionInput.addEventListener('keyup', ( event) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0  ) return;

        todoStore.addTodo(  event.target.value );
        displayTodos();
        event.target.value = '';

    });

    todoListUL.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
        if ( event.target.matches(ElementIdDs.DeleteTodo) || event.target.closest(ElementIdDs.DeleteTodo) ) {
            const element = event.target.closest('[data-id]');
            todoStore.deleteTodo( element.getAttribute('data-id') );
            displayTodos();
        }
    });

    clearCompletedButton.addEventListener('click', ( event ) => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersUL.forEach( element => {
        element.addEventListener('click', ( element ) => {
            filtersUL.forEach( el => el.classList.remove('selected'));
            element.target.classList.add("selected");
            switch( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.ALl )
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed )
                    break;
            }

            displayTodos();
        })
    });
}