import React, { useState, useEffect } from 'react';
import { Button, Group, Flex, TextInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { HandleRegistration } from './handleRegistration';
import { notifications } from '@mantine/notifications';
import { useRef } from 'react';

export const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [regStatus, setRegStatus] = useState(null);

  const handleSubmit = async (values) => {
    setSubmitted(true);
    const result = await HandleRegistration(values);
    setRegStatus(result);
    console.log(result)
    // form.reset();
    setSubmitted(false);
  };


  const form = useForm({
    initialValues: {
      phone: '+7',
      password: '',
      school: '',
      city: '',
      grade: '',
      name: '',
    },

    validate: {
      phone: (value) => {
        if (!value) {
          return 'Нөмір теру міндетті';
        }
        return /^\+7\d{10}$/.test(value) ? null : 'Қате нөмір терілді';
      },
      password: (value) => (value ? null : 'Пароль теру міндетті'),
      name: (value) => (value ? null : 'Есімін теру міндетті'),
      school: (value) => (value ? null : 'Мектеп таңдау міндетті'),
      grade: (value) => (value ? null : 'Сынып таңдау міндетті'),
      city: (value) => (value ? null : 'Қала таңдау міндетті'),
    },
  });

  useEffect(() => {
    if (regStatus) {
        notifications.show({
            id: 'hello-there',
            withCloseButton: true,
            autoClose: 5000,
            message: regStatus,
            className: 'my-notification-class',
            loading: false,
          });
    }
    setRegStatus(null)
  }, [regStatus]);

  return (
    <div>
    <Flex justify={'center'}>
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
      >
        <TextInput
          disabled={submitted}
          withAsterisk
          label="Телефон"
          placeholder="+7"
          {...form.getInputProps('phone')}
        />

        <TextInput
          disabled={submitted}
          withAsterisk
          label="Пароль"
          {...form.getInputProps('password')}
        />

        <Select
          disabled={submitted}
          data={[
            { value: 'Астана', label: 'Астана' },
          ]}
          placeholder="Қала"
          label="Қала"
          required
          {...form.getInputProps('city')}
        />

        <Select
          disabled={submitted}
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
          ]}
          placeholder="Мектеп"
          label="Мектеп"
          required
          {...form.getInputProps('school')}
        />

        <Select
          disabled={submitted}
          data={[
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
          ]}
          placeholder="Сынып"
          label="Сынып"
          required
          {...form.getInputProps('grade')}
        />

        <TextInput
          disabled={submitted}
          withAsterisk
          label="Есімі"
          {...form.getInputProps('name')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" disabled={submitted}>Submit</Button>
        </Group>
      </form>
    </Flex>

            </div>
  );
};

export default Registration;
