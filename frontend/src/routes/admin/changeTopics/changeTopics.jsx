import { Button, Center, Loader, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { HandleDelete } from "./handleDelete";
import { useForm } from "@mantine/form";
import { HandleCreate } from "./handleCreate";


export const ChangeTopics = () => {

  const [topics, setTopics] = useState([]);
  const [pressedButton, setPressedButton] = useState('');

  const form = useForm({
    initialValues: {
      title: ''
    }
  });

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

    fetch('http://localhost:4000/api/topics/all-topics', {
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
      .then(data => {
        setTopics(data.topics);
        console.log('Fetched topics:', data.topics);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleCreateClick = () => {
    setPressedButton('create');
  };

  const handleSubmit = (token, values) => {
    HandleCreate(token, values);
    setPressedButton('');
  };

  const handleSave = (id) => {
    console.log(id);
  };

  return (
    <div>
      {!topics.length && <Loader color="green" />}

      {topics.length > 0 && topics.map((topic) => (
        <div key={topic._id}>
          <p>{topic.title}</p>
          <Button onClick={() => handleSave(topic._id)}>Save</Button>
          <Button>Edit</Button>
          <Button onClick={() => HandleDelete(topic._id)}>Delete</Button>
        </div>
      ))}

      <Button onClick={handleCreateClick}>Create</Button>
      {pressedButton === 'create' && (
        <Center>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              withAsterisk
              label="Тараудың тақырыбы"
              placeholder="Тараудың тақырыбы"
              {...form.getInputProps('title')}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Center>
      )}
    </div>
  );
};
