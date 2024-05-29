export const HandleCreate = (title, token) => {
    const newTopic = { title: title };
  
    return fetch('http://localhost:4000/api/admin/add-topics', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newTopic),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(errorData => {
            throw new Error(`HTTP error! status: ${res.status} - ${errorData.message}`);
          });
        }
        return res.json();
      })
      .then(data => {
        const createdTopic = data || { ...newTopic, _id: Date.now() };
        return createdTopic; // Return the created topic
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  