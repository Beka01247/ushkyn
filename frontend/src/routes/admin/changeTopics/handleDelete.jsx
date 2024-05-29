export const HandleDelete = (id) => {
    // Function to get the JWT token from localStorage
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
  
    console.log('Deleting topic with id:', id); // Debug log
    if (!id) {
      console.error('Invalid topic id for deletion');
      return;
    }
  
    fetch(`http://localhost:4000/api/admin/del-topics/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        setTopics(prevTopics => prevTopics.filter(topic => topic._id !== id));
        console.log(`Topic with id ${id} deleted successfully`);
      })
      .catch(error => {
        console.error('There was a problem with the delete operation:', error);
      });
  };
  