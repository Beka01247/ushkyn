export const HandleRegistration = async (values) => {
  // Construct the new user object
  const newUser = {
    phone: values.phone,
    password: values.password,
    city: values.city,
    school: values.school,
    grade: values.grade,
    name: values.name
  };

  // Retrieve user data from localStorage
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
    // Make the POST request to the server
    const response = await fetch('http://localhost:4000/api/admin/add-user', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    });

    // Parse the response as JSON
    const responseData = await response.json();

    // Handle non-OK responses
    if (!response.ok) {
      console.error('Error:', JSON.stringify(responseData.error));
      return JSON.stringify(responseData.error);
    }

    // Return the parsed response data
    if (response.ok){
      return JSON.stringify(responseData.name + " жүйеге тіркелді!")
    }
    

  } catch (error) {
    // Log and return fetch error
    console.error('Fetch error:', error);
    return 'Fetch error: ' + JSON.stringify(error.message)
  }
};
