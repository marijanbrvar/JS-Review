/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';
import Dnd from './classes/dnd';
import Toggle from './classes/toggle';
import App from './classes/app';

const app = new App(new Task(), new View(), new Dnd(), new Toggle());
