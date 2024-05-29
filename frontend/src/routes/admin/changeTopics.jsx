import { Button, Input, Loader, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";

export const ChangeTopics = () => {
  const [topics, setTopics] = useState([]);
  const [editingTopicId, setEditingTopicId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/api/topics/all-topics')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setTopics(data.topics);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleEditChange = (id, value) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic.id === id ? { ...topic, title: value } : topic
      )
    );
  };

  const handleEdit = (id) => {
    setEditingTopicId(id);
  };

  const handleSave = (id) => {
    // Add your save logic here (e.g., API call to save the updated topic)
    setEditingTopicId(null);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/api/topics/delete-topic/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        setTopics(prevTopics => prevTopics.filter(topic => topic.id !== id));
      })
      .catch(error => {
        console.error('There was a problem with the delete operation:', error);
      });
  };

  const handleCreate = (event) => {
    event.preventDefault();
    const newTopic = { title: newTitle };

    fetch('http://localhost:4000/api/topics/add-topic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTopic),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        const createdTopic = data.topic || { ...newTopic, id: Date.now() };
        setTopics([...topics, createdTopic]);
        setNewTitle('');
        setTrigger(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div>
      {!topics.length && <Loader color="green" />}
      {topics.length > 0 && topics.map((topic) => (
        <div key={topic.id || topic.tempId} style={{ marginBottom: '10px' }}>
          {editingTopicId === topic.id ? (
            <TextInput
              value={topic.title}
              onChange={(event) => handleEditChange(topic.id, event.currentTarget.value)}
              styles={{
                wrapper: {
                  border: '0'
                },
                input: {
                  border: '0'
                }
              }}
            />
          ) : (
            <p>{topic.title}</p>
          )}
          {editingTopicId === topic.id ? (
            <Button onClick={() => handleSave(topic.id)}>Save</Button>
          ) : (
            <Button onClick={() => handleEdit(topic.id)}>Edit</Button>
          )}
          <Button onClick={() => handleDelete(topic.id)}>Delete</Button>
        </div>
      ))}
      <Button type="success" onClick={() => setTrigger(true)}>Create</Button>
      {trigger && (
        <div>
          <form onSubmit={handleCreate}>
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.currentTarget.value)}
              placeholder="New topic title"
            />
            <Button type="submit">Add Topic</Button>
          </form>
        </div>
      )}
    </div>
  );
};
