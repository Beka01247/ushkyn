import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Text,
  Radio,
  RadioGroup,
  Flex,
  Input,
  TextInput,
  ActionIcon,
  Checkbox,
  Select,
} from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import {
  IconArrowBack,
  IconArrowRight,
  IconArrowRightCircle,
  IconClearAll,
  IconBlockquote,
  IconClearFormatting,
  IconDisabled,
  IconEdit,
  IconPlus,
  IconSend,
  IconTextWrapDisabled,
  IconTrash,
  IconVideo,
} from "@tabler/icons-react";
import { TestHandleCreate } from "./testHandleCreate";
import { CreateOptions } from "./createOptions";
import { DeleteOption } from "./deleteOption";
import { DeleteQuestion } from "./deleteQuestion";
import { EditQuestion } from "./editQuestion";
import { CreateSingleAnswer } from "./createSingleAnswer";
import { CreateVideo } from "./createVideo";
import { CreateText } from "./createText";
import { DeleteText } from "./deleteText";
import { DeleteVideo } from "./deleteVideo";

export const Test = ({
  token,
  topicId,
  subtopicId,
  subsubtopic,
  refreshchild,
}) => {
  const [opened, { close, open }] = useDisclosure(false);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [pressedButton, setPressedButton] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedQuestionText, setEditedQuestionText] = useState("");
  const [isFormVisible, setFormVisible] = useState(true);
  const [videoModalOpened, setVideoModalOpened] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [textModalOpened, setTextModalOpened] = useState(false);
  const [textExp, setTextExp] = useState("");
  const [currentTextExplanation, setCurrentTextExplanation] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentTestId, setCurrentTestId] = useState(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      question: "",
      type: "",
    },

    validate: {
      question: (value) => (value ? null : "Invalid"),
      type: (value) => (value ? null : "Invalid"),
    },
  });

  const createOptions = useForm({
    mode: "uncontrolled",
    initialValues: {
      option: "",
      isCorrect: false,
    },
    validate: {
      option: (value) => (value ? null : "Invalid"),
    },
  });

  const createSingleAnswer = useForm({
    mode: "uncontrolled",
    initialValues: {
      singleCorrectAnswer: "", // This should match the field used in the TextInput component
    },
    validate: {
      singleCorrectAnswer: (value) => (value ? null : "Answer required"),
    },
  });

  const handleFormSubmit = async (values) => {
    await TestHandleCreate(values, topicId, subtopicId, subsubtopic._id, token);
    refreshchild(true);
    form.reset();
    refreshchild(true);
  };

  const handleCreateOptions = (values, testId) => {
    console.log(values);
    CreateOptions(values, topicId, subtopicId, subsubtopic._id, testId, token);
    form.reset();
  };

  const handleCreateSingleCorrectAnswer = async (values, testId) => {
    console.log("Handling creation with values:", values);
    try {
      const result = await CreateSingleAnswer(
        values.singleCorrectAnswer, // Correct field name here
        topicId,
        subtopicId,
        subsubtopic._id,
        testId,
        token
      );
      setFormVisible(false); // Hide form on success
      refreshchild(true);
      createSingleAnswer.reset(); // Make sure this reset call is correctly referring to the form instance
    } catch (error) {
      console.error("Error creating single correct answer:", error);
    }
  };

  const deleteOption = async (testId, optionId) => {
    await DeleteOption(
      token,
      topicId,
      subtopicId,
      subsubtopic._id,
      testId,
      optionId
    );
    refreshchild(true);
  };

  const deleteText = async () => {
    console.log("Deleting text exp with id" + currentTestId);
    await DeleteText(
      token,
      topicId,
      subtopicId,
      subsubtopic._id,
      currentTestId
    );
    refreshchild(true);
    setTextModalOpened(false);
  };

  const deleteVideo = async () => {
    await DeleteVideo(
      token,
      topicId,
      subtopicId,
      subsubtopic._id,
      currentTestId
    );
    refreshchild(true);
    setVideoModalOpened(false);
  };

  const startEditQuestion = (testId, currentText) => {
    setEditingQuestion(testId);
    setEditedQuestionText(currentText);
  };

  const handleEditQuestionSubmit = async (testId) => {
    console.log(editedQuestionText);
    await EditQuestion(
      editedQuestionText,
      topicId,
      subtopicId,
      subsubtopic._id,
      testId,
      token
    );
    setEditingQuestion(null);
    setEditedQuestionText("");
    refreshchild(true);
  };

  const openVideoModal = (testId) => {
    setCurrentTestId(testId);
    setVideoModalOpened(true);
  };

  const handleVideoSubmit = async () => {
    console.log(
      "Submitting Video URL:",
      videoUrl,
      "for Test ID:",
      currentTestId
    );
    if (currentTestId) {
      await CreateVideo(
        videoUrl,
        topicId,
        subtopicId,
        subsubtopic._id,
        currentTestId,
        token
      );
      setVideoUrl("");
      setVideoModalOpened(false);
      refreshchild(true);
    } else {
      console.error("Test ID is not set.");
    }
  };

  const openTextModal = (testId) => {
    setCurrentTestId(testId);
    setTextModalOpened(true);
  };

  const handleTextSubmit = async () => {
    console.log(
      "Submitting text exp.:",
      textExp,
      "for Test ID:",
      currentTestId
    );
    if (currentTestId) {
      await CreateText(
        textExp,
        topicId,
        subtopicId,
        subsubtopic._id,
        currentTestId,
        token
      );
      setTextExp("");
      setTextModalOpened(false);
      refreshchild(true);
    } else {
      console.error("Test ID is not set.");
    }
  };

  const handleAddNewQuestion = (value) => {
    setPressedButton("addQuestion");
  };

  const deleteQuestion = async (testId) => {
    await DeleteQuestion(token, topicId, subtopicId, subsubtopic._id, testId);
    refreshchild(true);
  };

  return (
    <>
      <Button onClick={open}>Тест</Button>

      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        title={`Тест: ${subsubtopic.title}.`}
      >
        {subsubtopic.tests.length > 0 ? (
          <>
            <Flex direction="column" mt="md">
              {subsubtopic.tests.map((test, currentTest) => (
                <div key={test._id}>
                  <Flex
                    align="center"
                    mb="xs"
                    style={{
                      backgroundColor: "rgb(197, 200, 214)",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <Text weight={500} mr="xs">
                      {currentTest + 1}.
                    </Text>
                    {editingQuestion === test._id ? (
                      <>
                        <TextInput
                          value={editedQuestionText}
                          onChange={(e) =>
                            setEditedQuestionText(e.target.value)
                          }
                          style={{
                            flexGrow: 0,
                            marginRight: "12px",
                            width: "70%",
                          }}
                        />
                        <Flex>
                          <ActionIcon
                            mr={"xs"}
                            color="green"
                            onClick={() => handleEditQuestionSubmit(test._id)}
                          >
                            <IconSend />
                          </ActionIcon>
                          <ActionIcon onClick={() => setEditingQuestion(null)}>
                            <IconArrowBack />
                          </ActionIcon>
                        </Flex>
                      </>
                    ) : (
                      <>
                        <Text>{test.question}</Text>
                        <ActionIcon
                          m={"xs"}
                          onClick={() =>
                            startEditQuestion(test._id, test.question)
                          }
                        >
                          <IconEdit />
                        </ActionIcon>
                        <ActionIcon
                          color="green"
                          onClick={() => {
                            setCurrentVideo(test.videoExplanation);
                            setVideoModalOpened(true);
                            setCurrentTestId(test._id);
                          }}
                        >
                          <IconVideo />
                        </ActionIcon>
                        <ActionIcon
                          m={"xs"}
                          color="yellow"
                          onClick={() => {
                            setCurrentTextExplanation(test.textExplanation);
                            setTextModalOpened(true);
                            setCurrentTestId(test._id);
                          }}
                        >
                          <IconBlockquote />
                        </ActionIcon>
                        <ActionIcon
                          color="red"
                          onClick={() => deleteQuestion(test._id)}
                        >
                          <IconTrash />
                        </ActionIcon>
                      </>
                    )}
                  </Flex>

                  {test.type !== "single-answer" && test.options ? (
                    test.options.length > 0 ? (
                      <RadioGroup>
                        {test.options.map((option, optionIndex) => (
                          <Flex key={optionIndex}>
                            <Checkbox
                              m={"xs"}
                              value={option.text}
                              label={option.text}
                              disabled={!editing}
                              defaultChecked={option.isCorrect}
                            />
                            <ActionIcon
                              color="red"
                              onClick={() => deleteOption(test._id, option._id)}
                            >
                              <IconTrash />
                            </ActionIcon>
                          </Flex>
                        ))}
                      </RadioGroup>
                    ) : (
                      <Flex style={{ alignItems: "center", gap: "10px" }}>
                        <Text>There are no options yet.</Text>
                      </Flex>
                    )
                  ) : test.singleCorrectAnswer ? (
                    <Flex style={{ alignItems: "center", gap: "10px" }}>
                      <Text>Дұрыс жауабы: </Text>
                      <Text style={{ color: "grey" }}>
                        {test.singleCorrectAnswer}
                      </Text>
                      <ActionIcon color="red" m={"xs"}>
                        <IconTrash />
                      </ActionIcon>
                    </Flex>
                  ) : (
                    <Flex style={{ alignItems: "center", gap: "10px" }}>
                      <Text style={{ color: "red" }}>
                        Дұрыс жауапты енгізіңіз!
                      </Text>
                    </Flex>
                  )}

                  {/* New Test Option */}
                  {pressedButton === currentTest &&
                  test.type !== "single-answer" ? (
                    <>
                      <Flex>
                        <form
                          onSubmit={createOptions.onSubmit((values) => {
                            handleCreateOptions(values, test._id);
                            refreshchild(true);
                          })}
                        >
                          <Checkbox
                            {...createOptions.getInputProps("isCorrect")}
                            label={"Бұл жауап дұрыс болса, толтырманы басыңыз"}
                            m={"xs"}
                          ></Checkbox>
                          <TextInput
                            {...createOptions.getInputProps("option")}
                            m={"xs"}
                          ></TextInput>
                          <Flex justify={"center"}>
                            <button
                              type="submit"
                              style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                              }}
                            >
                              <ActionIcon>
                                <SendOutlined />
                              </ActionIcon>
                            </button>
                            <ActionIcon
                              m={"xs"}
                              onClick={() => {
                                setPressedButton("cancel");
                              }}
                            >
                              <IconArrowBack />
                            </ActionIcon>
                          </Flex>
                        </form>
                      </Flex>
                    </>
                  ) : pressedButton === currentTest &&
                    test.type === "single-answer" &&
                    !test.singleCorrectAnswer ? (
                    <>
                      <Flex>
                        {isFormVisible && (
                          <form
                            onSubmit={createSingleAnswer.onSubmit((values) => {
                              handleCreateSingleCorrectAnswer(values, test._id);
                            })}
                          >
                            <TextInput
                              {...createSingleAnswer.getInputProps(
                                "singleCorrectAnswer"
                              )}
                              m={"xs"}
                              placeholder="Enter the single correct answer"
                            />
                            <Flex justify={"center"}>
                              <button
                                type="submit"
                                style={{
                                  background: "none",
                                  border: "none",
                                  padding: 0,
                                }}
                              >
                                <ActionIcon>
                                  <SendOutlined />
                                </ActionIcon>
                              </button>
                              <ActionIcon
                                m={"xs"}
                                onClick={() => {
                                  setPressedButton("cancel"); // Additional actions if needed
                                }}
                              >
                                <IconArrowBack />
                              </ActionIcon>
                            </Flex>
                          </form>
                        )}
                      </Flex>
                    </>
                  ) : test.type === "single-answer" &&
                    test.singleCorrectAnswer ? (
                    <div></div>
                  ) : (
                    <ActionIcon
                      m={"xs"}
                      onClick={() => setPressedButton(currentTest)}
                    >
                      <IconPlus></IconPlus>
                    </ActionIcon>
                  )}
                </div>
              ))}
            </Flex>

            {/* INPUT IF ADD QUESITION WAS PRESSED*/}
          </>
        ) : (
          <Text>No questions available.</Text>
        )}

        {pressedButton === "addQuestion" && (
          <>
            <Flex justify={"left"}>
              <Flex direction={"column"} align={"center"}>
                <Flex mt={12} align={"center"}>
                  <form onSubmit={form.onSubmit(handleFormSubmit)}>
                    <Select
                      {...form.getInputProps("type")}
                      m="xs"
                      data={[
                        {
                          value: "multiple-choice",
                          label: "Көп вариантты сұрақ",
                        },
                        {
                          value: "single-choice",
                          label: "Бір вариантты сұрақ",
                        },
                        { value: "single-answer", label: "Ашық сұрақ" },
                      ]}
                      placeholder="Тип"
                      label="Сұрақтың типін таңдаңыз:"
                    />
                    <TextInput
                      label="Сұрақ:"
                      m={"xs"}
                      key={form.key("question")}
                      {...form.getInputProps("question")}
                    />
                    <Flex align={"center"} justify={"center"}>
                      <button
                        type="submit"
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                      >
                        <ActionIcon type="submit" m={12}>
                          <SendOutlined />
                        </ActionIcon>
                      </button>

                      <ActionIcon
                        onClick={() => setPressedButton("cancel")}
                        m={12}
                        color="yellow"
                      >
                        <IconArrowBack />
                      </ActionIcon>
                    </Flex>
                  </form>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}

        {
          <Group mt="xl" position="center">
            <Button onClick={handleAddNewQuestion}>Add New Question</Button>
          </Group>
        }
      </Modal>

      {/* modal for video */}
      <Modal
        opened={videoModalOpened}
        onClose={() => setVideoModalOpened(false)}
        title="Видео түрінде түсіндіру"
      >
        {currentVideo ? (
          <>
            <Text>Қазіргі видео: {currentVideo}</Text>
            <ActionIcon
              color="red"
              mt="10px"
              onClick={() => {
                deleteVideo();
              }}
            >
              <IconTrash />
            </ActionIcon>
          </>
        ) : (
          <>
            <Text>Қазір видео түсіндіру жоқ. Видео түсіндірме қосыныз!</Text>
            <TextInput
              style={{ marginTop: "10px", marginBottom: "10px" }}
              placeholder="Видеоға ссылка"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <Button onClick={handleVideoSubmit}>Submit Video</Button>
          </>
        )}
      </Modal>

      {/* modal for text */}
      <Modal
        opened={textModalOpened}
        onClose={() => setTextModalOpened(false)}
        title="Мәтін түрінде түсіндіру"
      >
        {currentTextExplanation ? (
          <>
            <Text>Қазіргі мәтін: {currentTextExplanation}</Text>
            <ActionIcon color="red" mt="10px" onClick={() => deleteText()}>
              <IconTrash />
            </ActionIcon>
          </>
        ) : (
          <>
            <Text>Қазір мәтін жоқ. Мәтін түрінде түсіндірме қосыныз!</Text>
            <TextInput
              style={{ marginTop: "10px", marginBottom: "10px" }}
              placeholder="Мәтінді терініз."
              value={textExp}
              onChange={(e) => setTextExp(e.target.value)}
            />
            <Button onClick={handleTextSubmit}>Submit Text</Button>
          </>
        )}
      </Modal>
    </>
  );
};
