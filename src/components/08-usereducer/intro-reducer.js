//se declara el estado inicial
const initialState = [{
    id: 1,
    todo: 'Hola mundo',
    done: false
}];

//se declara el reducer, con el estado inicial y la accion que se va a realizar en el estado
const todoReducer = (state = initialState, action = {}) => {
    //si el tipo de accion es de agregar, se agrega un nuevo elemento al estado
    if(action.type === 'ADD_TODO'){
        //este objeto es el nuebo state
        return [...state, action.payload]
    };
    //siempre se regresar el state 
    return state;
};

//se declara el todos que es dpnde se va a consumir el reducer
let todos = todoReducer();

//se crea una nueva tarea
const newTodo = {
    id: 2,
    todo: 'Hola mundo 2',
    done: false
};

//accion y estado para agregar una nueva tarea
const todoAction = {
    type: 'ADD_TODO',
    payload: newTodo
};
//se ejecuta el reducer con la accion y el estado nuevo
todos = todoReducer(todos, todoAction);

console.log(todos);
