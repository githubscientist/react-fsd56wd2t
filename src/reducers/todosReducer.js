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
        default: 
            return state;
    }
}

export {
    initialState,
    todosReducer
}