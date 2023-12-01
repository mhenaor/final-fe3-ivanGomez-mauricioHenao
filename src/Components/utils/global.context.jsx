import { createContext, useEffect, useReducer, useMemo } from 'react'
import axios from 'axios'

export const initialState = { theme: 'light', data: [], doctor: [] }

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DOCTOR':
            return { ...state, doctor: action.payload }
        case 'TOGGLE_DARK_MODE':
            return { ...state, theme: !state.theme }
        default:
            return state
    }
}

export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            dispatch({ type: 'TOGGLE_DARK_MODE', payload: storedTheme })
        }

        axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
            dispatch({ type: 'SET_DOCTOR', payload: result.data })
        })
    }, [])

    const toggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' })
        localStorage.setItem('theme', state.theme ? 'dark' : 'light')
    }
    const activeTheme = state.theme ? 'light' : 'dark'

    const contextValue = useMemo(
        () => ({
            doctor: state.doctor,
            theme: state.theme,
            toggleDarkMode,
            activeTheme
        }),
        [state.doctor, state.theme]
    )

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    )
}
