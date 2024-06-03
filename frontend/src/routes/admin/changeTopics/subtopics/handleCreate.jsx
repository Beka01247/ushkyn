export const HandleCreate = async (token, topicId, title) => {
    try {
      // Fetch the existing topic to get current subtopics
      const response = await fetch(`http://localhost:4000/api/topics/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching existing topic:', JSON.stringify(error, null, 2));
        throw new Error('Failed to fetch existing topic');
      }
  
      const topics = await response.json();
  
      // Create the new subtopic payload
      const newSubtopic = {
        title: title,
        subsubtopics: []
      };
  
      // Append the new subtopic to the existing subtopics
      const updatedSubtopics = [...topics._id.subtopics, newSubtopic];
  
      // Create the payload to update the topic
      const updatedTopic = {
        subtopics: updatedSubtopics
      };
  
      console.log('Sending request with payload:', JSON.stringify(updatedTopic, null, 2)); // Debug log
  
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
    }
  };
  