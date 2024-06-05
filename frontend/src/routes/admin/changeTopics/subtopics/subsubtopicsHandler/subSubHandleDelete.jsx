export const SubSubHandleDelete = async (token, topicId, subtopicId, subsubtopicId) => {
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

    // Ensure topics is an array
    if (!Array.isArray(topics)) {
      throw new Error('Unexpected response format: topics is not an array');
    }

    // Find the target topic and subtopic
    const topic = topics.find(topic => topic._id === topicId);
    if (!topic) {
      throw new Error('Topic not found');
    }

    const subtopic = topic.subtopics.find(subtopic => subtopic._id === subtopicId);
    if (!subtopic) {
      throw new Error('Subtopic not found');
    }

    // Remove the subsubtopic from the existing subsubtopics
    const updatedSubSubtopics = subtopic.subsubtopics.filter(subsubtopic => subsubtopic._id !== subsubtopicId);

    // Update the subtopic with the modified subsubtopics
    subtopic.subsubtopics = updatedSubSubtopics;

    // Create the payload to update the topic
    const updatedTopic = {
      subtopics: topic.subtopics
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
    throw error;
  }
};
