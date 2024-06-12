export const CreateOptions = async (values, topicId, subtopicId, subsubtopicId, testId, token) => {
    console.log(values, topicId, testId);
  
    const newOption = {
      text: values.option,
      isCorrect: values.isCorrect,
    };

    console.log(newOption)
  
    const url = `http://localhost:4000/api/admin/topics/${topicId}/subtopics/${subtopicId}/subsubtopic/${subsubtopicId}/tests/${testId}/addOption`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({newOption}),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Error response from server:', JSON.stringify(errorResponse, null, 2));
        throw new Error('Server responded with an error');
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error during fetch:', error); // Debug log
      throw error;
    }
  };
  