import { Button, Center, Flex, Loader, TextInput, Anchor } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HandleDelete } from "./handleDelete";
import { Table } from '@mantine/core';
import { Demo } from "./studentsTable";

export const Students = () => {

  const [users, setUsers] = useState([]);
  const [pressedButton, setPressedButton] = useState('');
  const [refresh, setRefresh] = useState(false)

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

  useEffect(() => {
    
    const fetchData = async() => {
          fetch('http://localhost:4000/api/admin/users', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log('Fetched users:', data)
            setUsers(data)
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      };
    fetchData() 
    setRefresh(false)
  }, [refresh]);

  const handleDelete = async (_id) => {
    
    await HandleDelete(_id)
    setRefresh(true)
    
  };

  const handleSave = (id) => {
    setPressedButton('save');
    setRefresh(true)
  };

  return (
    <div>
      <Center>{!users.length && <Loader color="green" />}</Center>

      {users.length > 0 && users.map((user) => (
        <div key={user._id}>
          <Center>
          <Anchor component={Link} to="/home" target="/home" underline="never" c={'black'}>{user.name}</Anchor>
          </Center>
          <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'}>
          <Button color='green' onClick={() => {handleSave(user._id)}}>Save</Button>
          <Button color='blue'>Edit</Button>
          <Button color='red' onClick={() => {handleDelete(user._id)}}>Delete</Button>
          </Flex>
        </div>
      ))}
      <Demo users={users}/>
    </div>
  );
};
