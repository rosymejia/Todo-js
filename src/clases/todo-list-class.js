import { Todo } from "./todo.class";

export class TodoList{

constructor(){
        //this.todos=[];//creamos un arreglo de cosas por hacer 
        this.cargarlocalstorage()
    }

    nuevoTodo( todo ){
         this.todos.push( todo ); //agrega un tarea al arreglo de cosas x hacer
        this.guardarlocalstorage();
        }

    eliminarTodo( id ){
        this.todos=this.todos.filter( todo=>todo.id != id)//devuleve una copia del arreglo pero sin el q tiene el id q le decimos
        this.guardarlocalstorage();
    }

    marcadoConpletado( id ){
        
        for(const todo of this.todos){
           // console.log(id+todo.id);
            if(todo.id==id){
                todo.completado=!todo.completado;
                this.guardarlocalstorage();
                break;
            }
        }
    }

    eliminarCompletados(){
       this.todos=this.todos.filter( todo=>!todo.completado); //todos los q nos esten completados
      this.guardarlocalstorage();
       
    }

    guardarlocalstorage()
    {
        localStorage.setItem('todo',JSON.stringify(this.todos))//OBJETO PERFECTO LO convierte es te tipo a json
    }
    cargarlocalstorage()
    {
        if(localStorage.getItem('todo'))
        {
            this.todos=JSON.parse(localStorage.getItem('todo'))
        }
        else
        {
            this.todos=[];
        }
    this.todos=this.todos.map(obj=>Todo.fromjason( obj ))
        //this.todos=(localStorage.getItem('todo')) CON OPERADOR TERNARIO
        //?   JSON.parse(localStorage.getItem('todo'))
        //:[];
    }
}