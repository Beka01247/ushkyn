import { useContext } from "react"
import { TopicContext } from "../context/topicContext"

export const useTopicContext = () => {
    const context = useContext(TopicContext)

    if(!context){
        throw Error('use topiccontext must be inside a topic context provider')
    }

    return context
}