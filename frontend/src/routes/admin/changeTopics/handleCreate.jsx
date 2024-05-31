export const HandleCreate = (token, title) => {
  // Ensure the title is a string
  const newTopic = {
    title: String(title.title),
    subtopics: []
  };

  console.log('Sending request with payload:', JSON.stringify(newTopic, null, 2)); // Debug log

  return fetch('http://localhost:4000/api/admin/add-topics', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTopic),
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(error => {
        console.error('Error response from server:', JSON.stringify(error, null, 2)); // Debug log
        throw new Error('Server responded with an error');
      });
    }
    return response.json();
  })
  .then(data => {
    console.log('Server response:', JSON.stringify(data, null, 2)); // Debug log
    return data;
  })
  .catch(error => {
    console.error('Error during fetch:', error); // Debug log
  });
};

