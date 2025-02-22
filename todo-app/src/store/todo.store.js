import { Todo } from '../todos/models/todo.model.js'

export const Filters = {
    ALl: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [],
    filter: Filters.ALl
}

const initStore = () => {
    loadStore();
    console.log('Init Store 🥑');
}

const loadStore = () => {
    if (!localStorage.getItem(('state'))) return;
    const { todos = [], filter = Filters.ALl } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateLocalStorage = () => {
    localStorage.setItem( 'state', JSON.stringify( state ) );
    // localStorage.setItem();
}

const getTodos = (filter= Filters.ALl) => {
    switch (filter) {
        case Filters.ALl:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done );

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done );

        default:
            throw new Error(`Option ${filter} not found`);
    }
}

/**
 *
 * @param {String} description
 */
const addTodo = ( description ) => {
    if (!description) throw new Error('Description is required');

    state.todos.push( new Todo(description));
    saveStateLocalStorage();
}

/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    } )
    saveStateLocalStorage()
}

/**
 *
 * @param {String} todoId
 */
const deleteTodo = ( todoId ) => {
    if (!todoId) throw Error("Id es required");
    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
    saveStateLocalStorage();
}


/**
 *
 * @param {Filters} newFilter
 */
const setFilter = ( newFilter = Filters.ALl ) => {
    state.filter = newFilter;
    saveStateLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    getTodos,
    addTodo,
    Filters,
}