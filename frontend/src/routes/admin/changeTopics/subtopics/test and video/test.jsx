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

  // console.log('topicId: ', topicId, subtopicId, subsubtopic._id, token)

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

  const handleFormSubmit = async (values) => {
    await TestHandleCreate(values, topicId, subtopicId, subsubtopic._id, token);
    refreshchild(true);
    form.reset();
    console.log("refresh");
  };

  const handleCreateOptions = (values, testId) => {
    console.log(values);
    CreateOptions(values, topicId, subtopicId, subsubtopic._id, testId, token);
    form.reset();
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
                        <ActionIcon color="green">
                          <IconVideo />
                        </ActionIcon>
                        <ActionIcon m={"xs"} color="yellow">
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
                  ) : (
                    <Flex style={{ alignItems: "center", gap: "10px" }}>
                      <Text>Дұрыс жауабы: </Text>
                      <Text style={{ color: "grey" }}>
                        {test.singleCorrectAnswer}
                      </Text>
                      <ActionIcon m={"xs"}>
                        <IconTrash />
                      </ActionIcon>
                    </Flex>
                  )}

                  {/* New Test Option */}
                  {pressedButton === currentTest &&
                  (test.type !== "single-answer" ||
                    test.options.length <= 0) ? (
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
                  ) : (
                    (test.type !== "single-answer" ||
                      test.singleCorrectAnswer.length <= 0) && (
                      <ActionIcon
                        m={"xs"}
                        onClick={() => setPressedButton(currentTest)}
                      >
                        <IconPlus></IconPlus>
                      </ActionIcon>
                    )
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
    </>
  );
};
