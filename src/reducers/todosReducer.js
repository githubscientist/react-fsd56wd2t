const initialState = {
    todos: [
        
    ],
    filter: 'All'
}

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                filter: action.payload.status,
            }
        case 'TODOS_ALL':
            return {
                todos: action.payload.todos,
                filter: 'All'
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case 'UPDATE_TODO':
            let todoToUpdate = state.todos.find(todo => todo.id === action.payload.id);
            todoToUpdate = {
                ...todoToUpdate,
                text: action.payload.text
            }
            let updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return todoToUpdate
                }
                return todo
            })
            return {
                ...state,
                todos: updatedTodos
            }

        default: 
            return state;
    }
}

export {
    initialState,
    todosReducer
}