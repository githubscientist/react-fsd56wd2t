const initialState = {
    todos: [
        { id: 1, text: 'Learn React', completed: true },
        { id: 2, text: 'Learn Redux', completed: false },
        { id: 3, text: 'Build something fun!', completed: false }
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
        default: 
            return state;
    }
}

export {
    initialState,
    todosReducer
}