const initialState = {
    todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Redux', completed: false },
        { id: 3, text: 'Build something fun!', completed: false }
    ]
}

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            }
        default: 
            return state;
    }
}

export {
    initialState,
    todosReducer
}