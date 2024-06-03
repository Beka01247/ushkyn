import { Button, Center, Flex, Loader, TextInput, ActionIcon, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { Link, useParams } from "react-router-dom";
import { IconEdit, IconTrash, IconCheck, IconPlus, IconArrowForward } from '@tabler/icons-react';
import { HandleCreate } from './handleCreate';
import { HandleDelete } from "./handleDelete";
// import { handleSave } from "./handleSave";

export const Subtopics = () => {
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [pressedButton, setPressedButton] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [editingSubtopicId, setEditingSubtopicId] = useState(null);
  const [deleteSubtopicId, setDeleteSubtopicId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetTopicId, setTargetTopicId] = useState(null); // Define state for target topic ID

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
          const topic = data.topics.find(t => t._id === id);
          if (topic) {
            setSubtopics(topic.subtopics || []);
          }
          console.log('Fetched topics:', data.topics);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
    fetchData();
    setRefresh(false);
    console.log('they called me');
  }, [refresh, id]);

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
    await HandleCreate(token, id, values.title);
    setRefresh(true);
  };

  const handleDelete = async (topicId, subtopicId) => {
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

    await HandleDelete(token, topicId, subtopicId);
    setRefresh(true);
    setIsModalOpen(false);
  };

  const handleEdit = (subtopic) => {
    setEditingSubtopicId(subtopic._id);
    form2.setValues({ newTitle: subtopic.title });
    setPressedButton('edit');
  };

  const handleSave = async (subtopicId, newTitle) => {
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
      // Fetch the existing topics to get the current subtopics of the specific topic
      const response = await fetch(`http://localhost:4000/api/topics/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching existing topics:', JSON.stringify(error, null, 2));
        throw new Error('Failed to fetch existing topics');
      }

      const result = await response.json();

      // Access the topics array within the result object
      const topics = result.topics;

      // Ensure topics is an array
      if (!Array.isArray(topics)) {
        throw new Error('Unexpected response format: topics is not an array');
      }

      const topic = topics.find(topic => topic._id === id);

      if (!topic) {
        throw new Error('Topic not found');
      }

      // Modify the subtopic with the new title
      const updatedSubtopics = topic.subtopics.map(subtopic => 
        subtopic._id === subtopicId ? { ...subtopic, title: newTitle } : subtopic
      );

      // Create the payload to update the topic
      const updatedTopic = {
        subtopics: updatedSubtopics
      };

      console.log('Sending request with payload:', JSON.stringify(updatedTopic, null, 2)); // Debug log

      const updateResponse = await fetch(`http://localhost:4000/api/admin/edit-topics/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTopic),
      });

      if (!updateResponse.ok) {
        const error = await updateResponse.json();
        console.error('Error response from server:', JSON.stringify(error, null, 2)); // Debug log
        throw new Error('Server responded with an error');
      }

      const data = await updateResponse.json();
      console.log('Server response:', JSON.stringify(data, null, 2)); // Debug log
      setSubtopics(data.subtopics); // Update the state with the new subtopics
      setEditingSubtopicId(null);
      setRefresh(true);
    } catch (error) {
      console.error('There was a problem with the update operation:', error);
    }
  };

  const openModal = (topicId, subtopicId) => {
    setDeleteSubtopicId(subtopicId);
    setTargetTopicId(topicId); // Set target topic ID
    setIsModalOpen(true);
  };

  return (
    <div>
      <Center> {!subtopics.length && <Loader color="green" />} </Center>
      <Center> {subtopics.length === 0 && <p>No subtopics available</p>} </Center>

      {subtopics.length > 0 && subtopics.map((subtopic) => (
        <div key={subtopic._id}>
          <Center>
            {editingSubtopicId === subtopic._id ? (
              <form onSubmit={form2.onSubmit((values) => handleSave(subtopic._id, values.newTitle), {
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
                  <ActionIcon color="blue" onClick={() => setEditingSubtopicId(null)}>
                    <IconArrowForward size={16} />
                  </ActionIcon>
                  <ActionIcon color="red" onClick={() => openModal(id, subtopic._id)}>
                    <IconTrash size={16} />
                  </ActionIcon>
                </Flex>
              </form>
            ) : (
              <div>
                <p>{subtopic.title}</p>
                <ul>
                  {subtopic.subsubtopics && subtopic.subsubtopics.map(subsubtopic => (
                    <li key={subsubtopic._id}>{subsubtopic.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </Center>
          {editingSubtopicId !== subtopic._id && (
            <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'}>
              <ActionIcon color="blue" onClick={() => handleEdit(subtopic)}>
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon color="red" onClick={() => openModal(id, subtopic._id)}>
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
                label="Субтақырып атауы"
                placeholder="Субтақырып атауы"
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
            <Button color="red" onClick={() => handleDelete(targetTopicId, deleteSubtopicId)}>Өшіру</Button>
            <Button onClick={() => setIsModalOpen(false)}>Жоқ, артқа</Button>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};
