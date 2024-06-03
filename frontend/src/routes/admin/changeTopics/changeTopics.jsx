import { Button, Center, Flex, Loader, TextInput, Anchor, ActionIcon, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { HandleDelete } from "./handleDelete";
import { useForm } from "@mantine/form";
import { HandleCreate } from "./handleCreate";
import { Link } from "react-router-dom";
import { IconEdit, IconTrash, IconCheck, IconPlus, IconArrowForward} from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";


export const ChangeTopics = () => {
  const [topics, setTopics] = useState([]);
  const [pressedButton, setPressedButton] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [editingTopicId, setEditingTopicId] = useState(null);
  const [deleteTopicId, setDeleteTopicId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm({
    initialValues: {
      title: ''
    }
  });

  const form2 = useForm({
    initialValues: {
      newTitle: ''
    }
  });

  useEffect(() => {
    const fetchData = async () => {
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

      fetch('http://localhost:4000/api/topics/', {
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
    };
    fetchData();
    setRefresh(false);
    console.log('they called me');
  }, [refresh]);

  const handleCreateClick = () => {
    setPressedButton('create');
  };

  const handleSubmit = async (values) => {
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

    setPressedButton('submit');
    console.log(pressedButton);
    await HandleCreate(token, values);
    setRefresh(true);
  };

  const handleDelete = async (_id) => {
    await HandleDelete(_id);
    setRefresh(true);
    setIsModalOpen(false);
  };

  const handleEdit = (topic) => {
    setEditingTopicId(topic._id);
    form2.setValues({ newTitle: topic.title });
    setPressedButton('edit')
  };

  const handleSave = async (id, newTitle) => {
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

    try {
      const response = await fetch(`http://localhost:4000/api/admin/edit-topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title: newTitle })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedTopic = await response.json();
      setTopics(topics.map(topic => (topic._id === id ? updatedTopic : topic)));
      setEditingTopicId(null);
      setRefresh(true);
    } catch (error) {
      console.error('There was a problem with the update operation:', error);
    }
  };

  const openModal = (id) => {
    setDeleteTopicId(id);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Center> {!topics.length && <Loader color="green" />} </Center>
      <Center> {topics.length === 0  && <p>No topics available</p>} </Center>

      {topics.length > 0 && topics.map((topic) => (
        <div key={topic._id}>
          <Center>
            {editingTopicId === topic._id ? (
              <form onSubmit={form2.onSubmit((values) => handleSave(topic._id, values.newTitle), {
                onError: (errors) => console.log('Form errors', errors),
              })}>
                <TextInput
                  mt={16}
                  size="sm"
                  radius="md"
                  placeholder=""
                  {...form2.getInputProps('newTitle')}
                  required
                />
                <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'} mt={16}>
                  <ActionIcon type="submit" color="green">
                    <IconCheck size={16} />
                  </ActionIcon>
                  <ActionIcon color="blue" onClick={() => setEditingTopicId(null)}>
                    <IconArrowForward size={16} />
                  </ActionIcon>
                  <ActionIcon color="red" onClick={() => openModal(topic._id)}>
                    <IconTrash size={16} />
                  </ActionIcon>
                </Flex>
              </form>              
            ) : (
                    <Link to={`/topic/${topic._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                {topic.title}
              </Link>            )}
          </Center>
          {editingTopicId !== topic._id && (
            <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'}>
              <ActionIcon color="blue" onClick={() => handleEdit(topic)}>
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon color="red" onClick={() => openModal(topic._id)}>
                <IconTrash size={16} />
              </ActionIcon>
            </Flex>
          )}
        </div>
      ))}

      <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'} mt={32}>
        <ActionIcon color="blue" onClick={handleCreateClick}>
          <IconPlus size={16} />
        </ActionIcon>
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

              <Center mt={16}>
                <ActionIcon type="submit" color="green">
                <IconCheck size={16} />
                </ActionIcon>
              </Center>
            </form>
          </Center>
        )}
      </Flex>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Өшіру"
      >
        <div>
          <p>Өшіруді растаңыз</p>
          <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'}>
            <Button color="red" onClick={() => handleDelete(deleteTopicId)}>Өшіру</Button>
            <Button onClick={() => setIsModalOpen(false)}>Жоқ, артқа</Button>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};
