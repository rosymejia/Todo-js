
export class Todo{

    static fromjason({ id,tarea,completado, creado} ){
        const temptodo=new Todo(tarea);
        temptodo.id=id;
        temptodo.completado=completado;
        temptodo.creado=creado;//mertmite recuperar los metods de esta clase 

        return temptodo;
    }
    constructor( tarea ){
        this.tarea=tarea;

        this.id=new Date().getTime();//1234455 

        this.completado=false;
        this.creado=new Date();//fecha de la creacion
    }

    imprimirclase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}