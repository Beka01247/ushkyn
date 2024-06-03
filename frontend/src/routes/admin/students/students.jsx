import { Button, Center, Flex, Loader, TextInput, Anchor } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HandleDelete } from "./handleDelete";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DemoWithProviders from "./studentsTable"; // Adjust the import if necessary

const queryClient = new QueryClient();

export const Students = () => {
  const [users, setUsers] = useState([]);
  const [pressedButton, setPressedButton] = useState('');
  const [refresh, setRefresh] = useState(false);

  const userString = localStorage.getItem('user');
  if (!userString) {
    console.error('User not found in localStorage');
    return null;
  }
  const user = JSON.parse(userString);
  const token = user.token;

  if (!token) {
    console.error('Token not found');
    return null;
  }

  useEffect(() => {
    const fetchData = async () => {
      fetch('http://localhost:4000/api/admin/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log('Fetched users:', data);
          setUsers(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
    fetchData();
    setRefresh(false);
  }, [refresh, token]);

  const handleDelete = async (_id) => {
    await HandleDelete(_id);
    setRefresh(true);
  };

  const handleSave = (id) => {
    setPressedButton('save');
    setRefresh(true);
  };

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <DemoWithProviders />
      </QueryClientProvider>
    </div>
  );
};
