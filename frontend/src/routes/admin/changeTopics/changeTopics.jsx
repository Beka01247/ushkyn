import { Button, Center, Flex, Loader, TextInput, Anchor } from "@mantine/core";
import { useEffect, useState } from "react";
import { HandleDelete } from "./handleDelete";
import { useForm } from "@mantine/form";
import { HandleCreate } from "./handleCreate";


export const ChangeTopics = () => {

  const [topics, setTopics] = useState([]);
  const [pressedButton, setPressedButton] = useState('');
  const [refresh, setRefresh] = useState(true)

  const form = useForm({
    initialValues: {
      title: ''
    }
  });


  useEffect(() => {
    const fetchData = async () =>{
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
    }
    fetchData()
    setRefresh(false)
    console.log('they called me')
  }, [refresh]);
 
  const handleCreateClick = () => {
    setPressedButton('create');
  };

  const handleSubmit = async (values) => {
    const userString = localStorage.getItem('user');
    if (!userString) {
      console.error('User not found in localStorage')
      return;
    }
  
    const user = JSON.parse(userString);
    const token = user.token;
  
    if (!token) {
      console.error('Token not found');
      return;
    }

    setPressedButton('submit')
    console.log(pressedButton)
    await HandleCreate(token, values)
    setRefresh(true)
  };

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
      {!topics.length && <Loader color="green" />}

      {topics.length > 0 && topics.map((topic) => (
        <div key={topic._id}>
          <Anchor href="https://mantine.dev/" target="_blank" underline="never">{topic.title}</Anchor>
          <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'}>
          <Button color='green' onClick={() => {handleSave(topic._id)}}>Save</Button>
          <Button color='blue'>Edit</Button>
          <Button color='red' onClick={() => {handleDelete(topic._id)}}>Delete</Button>
          </Flex>
        </div>
      ))}

      <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'} mt={32}>
        <Button onClick={handleCreateClick}>Create</Button>
      </Flex>
      <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'} mt={16}>
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
      </Flex>
    </div>
  );
};
