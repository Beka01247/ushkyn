export const SubSubHandleCreate = async (token, topicId, subtopicId, title) => {
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

    // Create the new subtopic payload
    const newSubSubtopic = {
      title: title
    };

    // Find the subtopic that needs to be updated
    const subtopic = topic.subtopics.find(subtopic => subtopic._id === subtopicId);
    if (!subtopic) {
      throw new Error('Subtopic not found');
    }

    // Append the new subtopic to the existing subtopics
    const updatedSubSubtopics = [...(subtopic.subsubtopics || []), newSubSubtopic];

    // Update the specific subtopic with new subsubtopics
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
