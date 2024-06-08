import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Text, Radio, RadioGroup, Flex, Input, TextInput, ActionIcon, Checkbox } from '@mantine/core';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { ArrowLeftOutlined, ArrowRightOutlined, SendOutlined } from '@ant-design/icons';
import { IconArrowBack, IconArrowRight, IconArrowRightCircle, IconClearAll, IconClearFormatting, IconDisabled, IconPlus, IconSend, IconTextWrapDisabled } from '@tabler/icons-react';


export const Test = ({ subsubtopic }) => {
  const [opened, { close, open }] = useDisclosure(false);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [pressedButton, setPressedButton] = useState(null)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      question: '',
    },

    validate: {
      question: (value) => (value ? null : 'Invalid'),
    },
  });


  const handleNext = () => {
    if (currentTestIndex < subsubtopic.tests.length - 1) {
      setCurrentTestIndex(currentTestIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTestIndex > 0) {
      setCurrentTestIndex(currentTestIndex - 1);
    }
  };

  const handleAddNewQuestion = (value) => {
    setPressedButton('addQuestion')
    console.log(value)
  };

  const currentTest = subsubtopic.tests[currentTestIndex];

  return (
    <>
      <Button onClick={open}>
        Тест
      </Button>

      <Modal opened={opened} onClose={close} size="auto" title={`Тест: ${subsubtopic.title}.`}>
        {subsubtopic.tests.length > 0 ? (
          <>
            <Group direction="column" mt="md">
              <div key={currentTest._id}>
                <Flex align="center" mb="xs">
                  <Text weight={500} mr="xs">{currentTestIndex + 1}.</Text>
                  <Text>{currentTest.question}</Text>
                </Flex>
                <RadioGroup>
                  {currentTest.options.map((option, optionIndex) => (
                    <Checkbox m={'xs'} key={optionIndex} value={option.text} label={option.text} />
                  ))}
                </RadioGroup>
                {/* New Test Option */}
                {
                    pressedButton === 'newOption' ? (
                        <>
                            <Flex>
                                <Checkbox m={'xs'}>

                                </Checkbox>
                                <Input m={'xs'}>
                                </Input>
                            </Flex>
                            <Flex>
                                <ActionIcon 
                                m={'xs'} 
                                onClick={() => {
                                    setPressedButton('cancel')
                                }}>
                                    <IconArrowBack/>
                                </ActionIcon>
                                <ActionIcon 
                                m={'xs'} 
                                onClick={() => {
                                    setPressedButton('submit')
                                    console.log('submit')
                                }}>                                                                                         
                                    <SendOutlined/>
                                </ActionIcon>
                            </Flex>
                        </>
                    )
                    : (
                        <ActionIcon m={'xs'} onClick={() => setPressedButton('newOption')}>
                            <IconPlus></IconPlus>
                        </ActionIcon>
                    )
                }
                
              </div>
            </Group>

            <Group mt="xl" position="center">
              <Button onClick={handleNext} disabled={currentTestIndex === subsubtopic.tests.length - 1}>
                Next
              </Button>
            </Group>



{/* INPUT IF ADD QUESITION WAS PRESSED*/}
            
          </>
        ) : (
          <Text>No questions available.</Text>
        )}

        {
            pressedButton === 'addQuestion' &&
            <> 
            <Flex justify={'left'}>
                <Flex direction={'column'} align={'center'}>
                        <Flex mt={12} align={'center'}>
                        <form onSubmit={form.onSubmit((values) => 
                            {console.log(values)
                            form.disabled}
                        )
                        }>
                            <TextInput 
                            key={form.key('question')}
                            {...form.getInputProps('question')}>
                            </TextInput>
                        </form>
                    </Flex>
                    <Flex>
                        <ActionIcon onClick={() => setPressedButton('submit')} mt={12}> 
                            <SendOutlined/>
                        </ActionIcon>
                    </Flex>
                </Flex>
                <ActionIcon onClick={() => setPressedButton('cancel')} m={15.5} color='yellow'> 
                            <IconArrowBack/>
                </ActionIcon>
            </Flex>
            </>
        }

        {(
          <Group mt="xl" position="center">
            <Button onClick={handleAddNewQuestion}>
              Add New Question
            </Button>
          </Group>
        )}
      </Modal>
    </>
  );
};
