import { createContext, useEffect, useReducer } from "react";

export const TopicContext = createContext()

export const TopicReducer = (state, action) => {
    switch (action.type){
        case 'SET_TOPIC':
            return{ topic: action.payload }
        case 'CREATE_TOPIC':
            return{ topic: [action.payload, ...state.topic]}
        case 'DELETE TOPIC':
            return {
                topic: state.topic.filter((w) => w._id !==action.payload._id)
            }
        default: 
            return state
    }
}

export const TopicContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(TopicReducer, {
        topic: null
    })

return ( 
    <TopicContext.Provider value={{...state, dispatch}}>
        {children}
    </TopicContext.Provider>
)
}