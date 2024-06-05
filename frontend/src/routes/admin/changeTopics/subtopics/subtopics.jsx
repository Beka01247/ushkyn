import { Button, Center, Flex, Loader, TextInput, ActionIcon, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useParams } from "react-router-dom";
import { IconEdit, IconTrash, IconCheck, IconPlus, IconArrowForward, IconDots } from '@tabler/icons-react';
import { HandleCreate } from './handleCreate';
import { HandleDelete } from "./handleDelete";
import { Accordion, Box, Group, Text } from "@mantine/core";
import { SubSubHandleCreate } from "./subsubtopicsHandler/subSubHandleCreate";
import { SubSubHandleDelete } from "./subsubtopicsHandler/subSubHandleDelete";

export const Subtopics = () => {
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
    
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [pressedButton, setPressedButton] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [editingSubtopicId, setEditingSubtopicId] = useState(null);
  const [deleteSubtopicId, setDeleteSubtopicId] = useState(null);
  const [deleteSubSubtopicId, setDeleteSubSubtopicId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetTopicId, setTargetTopicId] = useState(null);

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

    setPressedButton('submit');
    console.log(pressedButton);
    await HandleCreate(token, id, values.title);
    setRefresh(true);
  };

  const SubSubHandleSubmit = async (values, subtopicId) => {
    setPressedButton('submit');
    await SubSubHandleCreate(token, id, subtopicId, values.title);
    setRefresh(true);
  }

  const handleDelete = async (topicId, subtopicId, subsubtopicId) => {
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

    console.log('subtopicIDdelete', subtopicId)
    !subsubtopicId && await HandleDelete(token, topicId, subtopicId)
    subsubtopicId && await SubSubHandleDelete(token, topicId, subtopicId, subsubtopicId);
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
      const topics = result.topics;

      if (!Array.isArray(topics)) {
        throw new Error('Unexpected response format: topics is not an array');
      }

      const topic = topics.find(topic => topic._id === id);

      if (!topic) {
        throw new Error('Topic not found');
      }

      const updatedSubtopics = topic.subtopics.map(subtopic => 
        subtopic._id === subtopicId ? { ...subtopic, title: newTitle } : subtopic
      );

      const updatedTopic = {
        subtopics: updatedSubtopics
      };

      console.log('Sending request with payload:', JSON.stringify(updatedTopic, null, 2));

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
        console.error('Error response from server:', JSON.stringify(error, null, 2));
        throw new Error('Server responded with an error');
      }

      const data = await updateResponse.json();
      console.log('Server response:', JSON.stringify(data, null, 2));
      setSubtopics(data.subtopics);
      setEditingSubtopicId(null);
      setRefresh(true);
    } catch (error) {
      console.error('There was a problem with the update operation:', error);
    }
  };

  const openModal = (topicId, subtopicId, subsubtopicId) => {
    setDeleteSubSubtopicId(subsubtopicId)
    setDeleteSubtopicId(subtopicId);
    setTargetTopicId(topicId);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Center> {!subtopics.length && <Loader color="green" />} </Center>
      <Center> {subtopics.length === 0 && <p>No subtopics available</p>} </Center>

      {subtopics.length > 0 && (
        <Accordion multiple>
          {subtopics.map((subtopic) => (
            <Accordion.Item key={subtopic._id} value={subtopic._id}>
              <Accordion.Control style={{backgroundColor: '#C5C8D6'}}>
                <Flex align={'center'} justify={'left'} wrap={'wrap'} gap={'x2'}>
                  <ActionIcon onClick={() => handleEdit(subtopic)} m={12}>
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon color="red" onClick={() => openModal(id, subtopic._id)} m={12}>
                    <IconTrash size={16} />
                  </ActionIcon>
                  <p>{subtopic.title}</p>
                </Flex>
              </Accordion.Control>
              <Accordion.Panel>
                {subtopic.subsubtopics.map((subsubtopic) => (
                  <Accordion key={subsubtopic._id} multiple>
                    <Accordion.Item value={subsubtopic._id}>
                      <Accordion.Control>
                      <Flex align={'center'} justify={'right'} wrap={'wrap'} gap={'x3'}>
                          <Text>{subsubtopic.title}</Text>
                          <ActionIcon color="blue" onClick={() => handleEdit(subsubtopic)} m={12}>
                            <IconEdit size={16} />
                          </ActionIcon>
                          <ActionIcon color="red" onClick={() => openModal(id, subtopic._id, subsubtopic._id)} m={12}>
                            <IconTrash size={16} />
                          </ActionIcon>
                        </Flex>
                      </Accordion.Control>
                      <Accordion.Panel>
                            
                      </Accordion.Panel>

                      
                    </Accordion.Item> 
                  </Accordion>
                ))}
                <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'} mt={32}>
                    <ActionIcon color="blue" onClick={handleCreateClick}>
                    <IconPlus size={16} />
                    </ActionIcon>
                </Flex>
                <Flex align={'center'} justify={'center'} wrap={'wrap'} gap={'xl'} mt={16}>
                    {pressedButton === 'create' && (
                    <Center>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const subtopicId = subtopic._id
                            SubSubHandleSubmit(form.values, subtopicId)
                        }}>
                        <TextInput
                            withAsterisk
                            label="Субсубтақырып атауы"
                            placeholder="Субсубтақырып атауы"
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
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      )}

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
            <Button color="red" onClick={() => handleDelete(targetTopicId, deleteSubtopicId, deleteSubSubtopicId)}>Өшіру</Button>
            <Button onClick={() => setIsModalOpen(false)}>Жоқ, артқа</Button>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};
