import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodo = () => {

    const initialState = [];
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    const hadleNewTodo = (todo) => {
        const action = {
            type: "Add Todo",
            payload: todo,
        }
        dispatchTodo(action);
    }

    const hadleDeleteTodo = (id) => {
        const action = {
            type: "Delete Todo",
            payload: id
        }
        dispatchTodo(action)
    }

    const hadleToggleTodo = (id) => {
        const action = {
            type: "Toggle Todo",
            payload: id
        }
        dispatchTodo(action);
    }

    return {
        todos,
        todosCounter: todos.length,
        pendingTodosCounter: todos.filter(todo => !todo.done).length,
        hadleNewTodo,
        hadleDeleteTodo, 
        hadleToggleTodo
    }
}
