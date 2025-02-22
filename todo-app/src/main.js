import './style.css';
import { app } from './todos/app.js';
import todoStore from './store/todo.store.js';

todoStore.initStore();

app('#app');