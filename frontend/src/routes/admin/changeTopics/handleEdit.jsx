const handleEdit = (id) => {
    setEditingTopicId(id);
  };

  const handleEditChange = (id, value) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic._id === id ? { ...topic, title: value } : topic
      )
    );
  };

//   {topics && topics.map(topic => (
//     // return(
    // <div key={topic._id} style={{ marginBottom: '10px' }}>
    //     <TextInput
    //       value={topic.title}
    //       onChange={(event) => handleEditChange(topic._id, event.currentTarget.value)}
    //       styles={{
    //         wrapper: {
    //           border: '0'
    //         },
    //         input: {
    //           border: '0'
    //         }
    //       }}
    //     />