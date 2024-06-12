export const TestHandleCreate = async (value, topicId, subtopicId, subsubtopicId, token) => {
    try {
      // Fetch the existing topics to get the current subtopics of the specific topic
      const response = await fetch(`http://localhost:4000/api/topics/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching existing topics:', JSON.stringify(error, null, 2));
        throw new Error('Failed to fetch existing topics');
      }
  
      const result = await response.json();
      const topics = result.topics;
  
      const topic = topics.find(topic => topic._id === topicId);
  
      // Create the new test payload
      const newTest = {
        question: value.question,
        type: value.type
      };
  
      // Find the subtopic that needs to be updated
      const subtopic = topic.subtopics.find(subtopic => subtopic._id === subtopicId);
  
      // Find the subsubtopic that needs to be updated
      const subsubtopic = subtopic.subsubtopics.find(subsubtopic => subsubtopic._id === subsubtopicId);
  
      // Append the new test to the existing tests
      const updatedTests = [...(subsubtopic.tests || []), newTest];
  
      // Update the specific subsubtopic with new tests
      const updatedSubSubtopic = { ...subsubtopic, tests: updatedTests };
  
      // Update the subsubtopics array in the subtopic
      const updatedSubSubtopics = subtopic.subsubtopics.map(sst =>
        sst._id === subsubtopicId ? updatedSubSubtopic : sst
      );
  
      // Update the specific subtopic with new subsubtopics
      const updatedSubtopic = { ...subtopic, subsubtopics: updatedSubSubtopics };
  
      // Update the subtopics array in the topic
      const updatedSubtopics = topic.subtopics.map(st =>
        st._id === subtopicId ? updatedSubtopic : st
      );
  
      // Create the payload to update the topic
      const updatedTopic = { subtopics: updatedSubtopics };

      console.log('Sending request with payload and test:', newTest, JSON.stringify(updatedTopic, null, 2)); // Debug log
  
      const updateResponse = await fetch(`http://localhost:4000/api/admin/edit-topics/${topicId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTopic),
      });
  
      if (!updateResponse.ok) {
        const error = await updateResponse.json();
        console.error('Error response from server:', JSON.stringify(error, null, 2)); // Debug log
        throw new Error('Server responded with an error');
      }
  
      const data = await updateResponse.json();
      console.log('Server response:', JSON.stringify(data, null, 2)); // Debug log
      return data;
  
    } catch (error) {
      console.error('Error during fetch:', error); // Debug log
      throw error;
    }
  };
  