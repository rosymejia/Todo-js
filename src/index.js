
import './styles.css';
//import { Todo } from './clases/todo.class';
//import { TodoList } from './clases/todo-list-class';

//caando no encuentre un archivo el buscar en index y dedsde ahi ya hemos exportando estas clases
import { Todo, TodoList } from './clases';

import { crearTodoHtml } from './js/componentes';

export const todoList =new TodoList();//creo instancia de todolista es donde estan todas las tareas osea el arreglo con todo sus metodos de elimin marcar como hecho etc esta es una clase

//const tarea=new Todo('Aprender JavaScrit');//creo instancia de prueba para ver su funcionalidad creando una instancia a la clase todo esta me guardara la tarea mas la fecha mas si esta completada o no

//todoList.nuevoTodo( tarea );//agrego la tarea creada(instancia de la clase todo) y la agrego a la lista de tareas llamdo a la clase todo list y asu metodo nuevo q lo q hace es agreagr una tarea al arrelo de tarea
//console.log( todoList );



//crearTodoHtml( tarea );//aqui le mando la tareaa la clase que me crea el html

//const tarea2=new Todo('aprender python');
//todoList.nuevoTodo(tarea2);
//crearTodoHtml(tarea2);

//local storage
//localStorage.setItem('mi-key','abc')
//sessionStorage.setItem( 'mi-key','abc')
  //  setTimeout(()=>{
    //    localStorage.removeItem('my-key');
 //   }, 1500)

 //RECONTRUIR LOS DATOS EN EL HTML
 todoList.todos.forEach(todo => crearTodoHtml( todo ));
 //todoList.todos.forEach(crearTodoHtml);

 //incomvvnientes viedo casi fianla
 const newtodo = new Todo('aprender javascrit');
 //newtodo.imprmirclase();
todoList.todos[0].imprimirclase();
console.log('todos', todoList.todos);

