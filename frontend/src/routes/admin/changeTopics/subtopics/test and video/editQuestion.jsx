export const EditQuestion = async (
  newName,
  topicId,
  subtopicId,
  subsubtopicId,
  testId,
  token
) => {
  const url = `http://localhost:4000/api/admin/edit-topics/${topicId}/subtopics/${subtopicId}/subsubtopic/${subsubtopicId}/tests/${testId}`;
  const requestBody = {
    fieldToUpdate: "question",
    newValue: newName,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(
        "Error response from server:",
        JSON.stringify(errorResponse, null, 2)
      );
      throw new Error(
        "Server responded with an error: " + errorResponse.message
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error editing the name of the question: ", error);
  }
};
