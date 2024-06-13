export const DeleteOption = async (token, topicId, subtopicId, subsubtopicId, testId, optionId) => {
    const url = `http://localhost:4000/api/admin/topics/${topicId}/subtopics/${subtopicId}/subsubtopic/${subsubtopicId}/tests/${testId}/options/${optionId}/delete`;
    
    try {
    const response = await fetch (url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        const errorResponse = await response.json() 
        console.log(JSON.stringify(errorResponse))
        throw new Error('Server responded with an error')
}
    
    }
    catch (error) {
        console.error(error)
        throw error
    }
}