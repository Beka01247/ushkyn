import React, { useState } from 'react';
import { AppShell, Burger, Button, Grid, Group, useMantineTheme, Flex, TextInput, Checkbox, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { ChangeTopics } from './changeTopics';

export function AdminHome() {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();
  const [activeComponent, setActiveComponent] = useState('Students');

  const handleClick = (component) => () => {
    if (activeComponent !== component) {
      setActiveComponent(component);
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          h="100%"
          px="md"
          position="apart"
          style={{ display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <Grid align="center" style={{ width: '100%' }}>
              <Grid.Col span={{ base: 6, md: 2, lg: 2 }} offset={{ base: 0, md: 8, lg: 8 }} style={{ textAlign: 'right' }}>
                <p>Admin</p>
              </Grid.Col>
              <Grid.Col span={2}>
                <Button>Шығу</Button>
              </Grid.Col>
            </Grid>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Button mb={20} onClick={handleClick('Students')} styles={{ root: { minHeight: 50 } }}>Оқушылар</Button>
        <Button mb={20} onClick={handleClick('Registration')} styles={{ root: { minHeight: 50 } }}>Регистрация</Button>
        <Button mb={20} onClick={handleClick('ChangeTopics')} styles={{ root: { minHeight: 50 } }}>Тақырыптарды өзгерту</Button>
      </AppShell.Navbar>
      <AppShell.Main style={{ backgroundColor: '#f0f0f0'}} >
        {activeComponent === 'Students' && <Students />}
        {activeComponent === 'Registration' && <Registration />}
        {activeComponent === 'ChangeTopics' && <ChangeTopics />}
      </AppShell.Main>
    </AppShell>
  );
}

const Registration = () => {
    const form = useForm({
      initialValues: {
        phone: '+7',
        admin: false,
        password: '',
        framework: 'N/A' // Default value for the Select component
      },
  
      validate: {
        phone: (value) => {
          if (!value) {
            return 'Нөмір теру міндетті';
          }
          return /^\+7\d{10}$/.test(value) ? null : 'Қате нөмір терілді';
        },
        password: (value) => (value ? null : 'Пароль теру міндетті'),
        firstName: (value) => (value ? null : 'Есімін теру міндетті'),
        secondName: (value) => (value ? null : 'Тегін теру міндетті'),
        school: (value, values) => values.admin ? null : (value ? null : 'Мектеп таңдау міндетті'),
        city: (value, values) => values.admin ? null : (value ? null : 'Қала таңдау міндетті'),
          
      },
    });
  
    return (
      <Flex justify={'center'}>
        <form
          onSubmit={form.onSubmit((values) => {
            if (!values.framework || values.framework === 'N/A') {
              values.framework = 'N/A';
            }
            console.log(values);
          })}
        >
          <TextInput
            withAsterisk
            label="Телефон"
            placeholder="+7"
            {...form.getInputProps('phone')}
          />
  
          <TextInput
            withAsterisk
            label="Пароль"
            {...form.getInputProps('password')}
          />
  
          <Checkbox
            mt="md"
            label="Admin"
            {...form.getInputProps('admin', { type: 'checkbox' })}
          />
  
          {!form.values.admin && (
            <Select

              data={[
                { value: 'Астана', label: 'Астана' },
              ]}

              placeholder="Қала"
              label="Қала"
              required
              {...form.getInputProps('city')}
            />
          )}
          {!form.values.admin && (
            <Select
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
          )}

          <TextInput
            withAsterisk
            label="Тегі"
            {...form.getInputProps('secondName')}
          />

        <TextInput
            withAsterisk
            label="Есімі"
            {...form.getInputProps('firstName')}
          />
  
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Flex>
    );
  };

const Students = () => {
  return <div>Students</div>;
};
const phone = '+77754593399';
    const password = 'Adnsl38!sD';
    const school = 'N/A';
    const city = 'N/A';
    const grade = 'N/A';
    const name = 'Beksultan';