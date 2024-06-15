export const CreateVideo = async (
  videoUrl,
  topicId,
  subtopicId,
  subsubtopicId,
  testId,
  token
) => {
  const newVideo = videoUrl;

  console.log(newVideo);

  const url = `http://localhost:4000/api/admin/topics/${topicId}/subtopics/${subtopicId}/subsubtopic/${subsubtopicId}/tests/${testId}/addVideoExp`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newVideo }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error(
        "Error response from server:",
        JSON.stringify(errorResponse, null, 2)
      );
      throw new Error("Server responded with an error");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during fetch:", error); // Debug log
    throw error;
  }
};
