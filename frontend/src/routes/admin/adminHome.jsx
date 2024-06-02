import React, { useState } from 'react';
import { AppShell, Burger, Button, Grid, Group, useMantineTheme, Flex, TextInput, Checkbox, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { ChangeTopics } from './changeTopics/changeTopics';
import { Registration } from './registration/registration';
import { Students } from './students/students';
import { Logout } from '../../components/logout/logout';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function AdminHome() {
  const [opened, { toggle }] = useDisclosure();
  const { user } = useAuthContext();
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
              <Grid.Col span={{ base: 6, md: 2, lg: 2 }} offset={{ sm: 2  , md: 8, lg: 8 }} style={{ textAlign: 'right' }}>
                <p>{user.phone}</p>
              </Grid.Col>
              <Grid.Col visibleFrom="sm" span={{base: 2, lg: 1, md: 1}} style={{textAlign:"center"}}>
                <p>Admin</p>
              </Grid.Col>
              <Grid.Col span={1}>
                <Logout /> 
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