import { createContext, useEffect, useReducer } from "react";

export const TopicContext = createContext()

export const TopicReducer = (state, action) => {
    switch (action.type){
        case 'EDIT':
            return{ topic: action.payload }
        case 'DELETE':
            return{ topic:null }
        default: 
            return state
    }
}

export const TopicContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(TopicReducer, {
        topic: null
    })

useEffect(() => {
    const topic = JSON.parse(localStorage.getItem('topic'))
    if(topic){
        dispatch({ type:'TOPIC', payload: topic })
    }
}, [])
console.log(state)

return ( 
    <TopicContext.Provider value={{...state, dispatch}}>
        {children}
    </TopicContext.Provider>
)
}