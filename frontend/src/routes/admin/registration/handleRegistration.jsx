export const HandleRegistration = async (values) => {
  // Retrieve user data from localStorage
  const body = JSON.stringify(values)
  const userString = localStorage.getItem('user');
  if (!userString) {
    console.error('User not found in localStorage');
    return 'User not found in localStorage';
  }

  // Parse user data and retrieve token
  const user = JSON.parse(userString);
  const token = user.token;
  if (!token) {
    console.error('Token not found');
    return 'Token not found';
  }

  try {
    const response = await fetch('http://localhost:4000/api/admin/add-user', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: body
    });

    const json = JSON.stringify(response)

    // Handle non-OK responses
    if (!response.ok) {
      console.error('Error:', json.error);
      return json.error;
    }
    
    if(response.ok)
      return json

  } catch (error) {
    // Log and return fetch error
    console.error('Fetch error:', error);
    return 'Fetch error: ' + error.message;
  }
};
