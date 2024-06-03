export const handleSave = async (subtopicId, newTitle) => {
    const userString = localStorage.getItem('user');
    if (!userString) {
      console.error('User not found in localStorage');
      return;
    }
  
    const user = JSON.parse(userString);
    const token = user.token;
  
    if (!token) {
      console.error('Token not found');
      return;
    }
  
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
  
      // Access the topics array within the result object
      const topics = result.topics;
  
      // Ensure topics is an array
      if (!Array.isArray(topics)) {
        throw new Error('Unexpected response format: topics is not an array');
      }
  
      const topic = topics.find(topic => topic._id === id);
  
      if (!topic) {
        throw new Error('Topic not found');
      }
  
      // Modify the subtopic with the new title
      const updatedSubtopics = topic.subtopics.map(subtopic => 
        subtopic._id === subtopicId ? { ...subtopic, title: newTitle } : subtopic
      );
  
      // Create the payload to update the topic
      const updatedTopic = {
        subtopics: updatedSubtopics
      };
  
      console.log('Sending request with payload:', JSON.stringify(updatedTopic, null, 2)); // Debug log
  
      const updateResponse = await fetch(`http://localhost:4000/api/admin/edit-topics/${id}`, {
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
      setSubtopics(data.subtopics); // Update the state with the new subtopics
      setEditingSubtopicId(null);
      setRefresh(true);
    } catch (error) {
      console.error('There was a problem with the update operation:', error);
    }
  };
  