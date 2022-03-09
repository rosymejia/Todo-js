import { Todo } from "../clases";
import { todoList } from "../index";//importo la instancia a la clase q contiene la lista de tareas para no tener q crear otra


//referencias al html
const divTodoList=document.querySelector('.todo-list');//creo la instancia a la lista odenada del html ul
const txtinput=document.querySelector('.new-todo');
const btnborrar=document.querySelector('.clear-completed');
const ulfiltros=document.querySelector('.filters');
const ancorfiltros=document.querySelectorAll('.filtro');

export const crearTodoHtml=( todo )=>{
    
    const htmlTodo=`
    <li class="${ (todo.completado) ? 'completed':'' }" data-id="${ todo.id }">
		<div class="view" >
			<input class="toggle" type="checkbox"  ${ (todo.completado) ? 'checked':''} >
				<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
	<input class="edit" value="Create a TodoMVC template">
	</li>
    `
	//creo un div y en el en el meto el hmlttodo osea el item la lista agregada q me spasan x parametro
    const div=document.createElement('div');
    div.innerHTML=htmlTodo;

   // divTodoList.append( div );//meto el div que contiene un li dentro dentro de la lista ordenada
	divTodoList.append( div.firstElementChild );

	return div.firstElementChild;
}

//crear eventos
txtinput.addEventListener('keyup',( evento)=>{//s inpresiona enter
	if(evento.keyCode===13 &&txtinput.value.length>0){//es el codio de cada letra en esete caso es el codigo de la tecla enter
		const nuevoTodo=new Todo(txtinput.value); //ingresa el nuevo todo a las clase
		todoList.nuevoTodo( nuevoTodo );//agregamos el todo a la lista(esta es un array de todo del tipo clase Todo tiene 3 propiedades)
		crearTodoHtml(nuevoTodo);
		txtinput.value=''
	}		
})



//evento para saber q todo lis esta marcando
divTodoList.addEventListener('click',(evento)=>{
	//console.log("click");
	//console.log (evento); //en target salen todas las propiedades de ese evento sale exactamente en que parte de list hizo click 
	const nombreElemento=evento.target.localName;//sera input label o buton xq eso es lo que tenemos en  en el dive que contiene la lista esta explicacion no tiene sentido
	const todoElemento=evento.target.parentElement.parentElement;//regresa a su padre y el padre de ese
	const todoid=todoElemento.getAttribute('data-id');//obtengo el id de donde estoy
	
	if( nombreElemento.includes( 'input' ))
	{
		todoList.marcadoConpletado( todoid ) ;
		todoElemento.classList.toggle('completed');//le agrego la clase toggle esa ya esta denidida en css q lo q hace es rayas el string
	
	}else if (nombreElemento.includes( 'button' )){
		todoList.eliminarTodo( todoid );//lo emiminadnos del arreglo
		divTodoList.removeChild(todoElemento);//lo eliminados del html osea de la lista en el html
	}

})
//borrar los completados
btnborrar.addEventListener('click',()=>{
	todoList.eliminarCompletados();
	for(let i=divTodoList.children.length-1; i>=0;i--){
		const elemento=divTodoList.children[i];//mustra todos los hijos de esta lista ordenada todo lo que esta dentro de ella
		if(elemento.classList.contains('completed')){//esto es para eliminaelo del html
			divTodoList.removeChild(elemento);
		}
	}
});

//
ulfiltros.addEventListener('click',(event)=>{
	//console.log( event );
	//console.log( event.target.text );
	const filtro=event.target.text;//aqui revuisamos si si en le texto dice completdo o pendentes
	if(!filtro){return;}//si esta vacii

	ancorfiltros.forEach(elem => elem.classList.remove('selected'));
	event.target.classList.add('selected')


	for(const elemento of divTodoList.children){

		elemento.classList.remove('hidden');

		const completado=elemento.classList.contains('completed');
		
		switch( filtro )
		{
			case 'Pendientes':
				if(completado)
				{elemento.classList.add('hidden'); }
			break;
			case 'Completados':
					if(!completado)
					{elemento.classList.add('hidden'); }
			break;
			
		}
	}
});