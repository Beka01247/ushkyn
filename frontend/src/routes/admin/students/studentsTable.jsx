import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; // if using mantine date picker features
import 'mantine-react-table/styles.css'; // make sure MRT styles were imported in your app root (once)
import { useEffect, useMemo, useState } from 'react';
import {
  MRT_EditActionButtons,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import {
  ActionIcon,
  Flex,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { ModalsProvider, modals } from '@mantine/modals';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export const Demo = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [users, setUsers] = useState([]);

  const userString = localStorage.getItem('user');
  if (!userString) {
    console.error('User not found in localStorage');
    return null;
  }
  const user = JSON.parse(userString);
  const token = user.token;

  if (!token) {
    console.error('Token not found');
    return null;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/admin/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log('Fetched users:', data);
        setUsers(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchData();
    setRefresh(false);
  }, [refresh, token]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Есім',
        mantineEditTextInputProps: {
          required: true,
          error: validationErrors?.name,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              name: undefined,
            }),
        },
      },
      {
        accessorKey: 'grade',
        header: 'Сынып',
      },
      {
        accessorKey: 'city',
        header: 'Қала',
      },
      {
        accessorKey: 'school',
        header: 'Мектеп',
      },
      {
        accessorKey: 'phone',
        header: 'Телефон',
      },
      {
        accessorKey: 'banned',
        header: 'Бан',
        Cell: ({ cell }) => JSON.stringify(cell.getValue()),
      },
    ],
    [validationErrors],
  );

  const queryClient = useQueryClient();

  const { mutateAsync: updateUser } = useMutation({
    mutationFn: async (user) => {
      const response = await fetch(`http://localhost:4000/api/admin/edit-users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorMessage = `Failed to update user. Status: ${response.status}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }

      return response.json();
    },
    onMutate: (newUserInfo) => {
      const previousUsers = queryClient.getQueryData(['users']);
      if (!previousUsers) {
        return;
      }
      queryClient.setQueryData(['users'], (prevUsers) =>
        prevUsers.map((prevUser) =>
          prevUser._id === newUserInfo._id ? newUserInfo : prevUser,
        ),
      );
      return { previousUsers };
    },
    onError: (error, newUserInfo, context) => {
      console.error('Error updating user:', error);
      if (context?.previousUsers) {
        queryClient.setQueryData(['users'], context.previousUsers);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  const { mutateAsync: deleteUser } = useMutation({
    mutationFn: async (userId) => {
      console.log('Attempting to delete user with id:', userId); // Debug log
      const response = await fetch(`http://localhost:4000/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorMessage = `Failed to delete user. Status: ${response.status}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }

      console.log('User deleted successfully:', userId); // Debug log
      setRefresh(true);
    },
    onMutate: async (userId) => {
      await queryClient.cancelQueries(['users']);
      const previousUsers = queryClient.getQueryData(['users']);
      if (!previousUsers) {
        console.error('Previous users data is undefined');
        return { previousUsers: [] };
      }
      queryClient.setQueryData(['users'], (prevUsers) =>
        prevUsers ? prevUsers.filter((user) => user._id !== userId) : []
      );
      return { previousUsers };
    },
    onError: (error, userId, context) => {
      console.error('Error deleting user:', error);
      if (context?.previousUsers) {
        queryClient.setQueryData(['users'], context.previousUsers);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleSaveUser = async ({ row, values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser({ ...values, _id: row.original._id });
    table.setEditingRow(null); // exit editing mode
  };

  const openDeleteConfirmModal = (row) => {
    const userId = row.original._id;
    if (!userId) {
      console.error('Invalid user id for deletion');
      return;
    }
    console.log('Opening delete confirm modal for user:', row.original.name); // Debug log
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this user?',
      children: (
        <Text>
          Are you sure you want to delete {row.original.name}? This action
          cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteUser(userId).catch((error) => {
        console.error('Error during deletion:', error);
      }),
    });
  };

  const table = useMantineReactTable({
    columns,
    data: users,
    createDisplayMode: 'modal', // default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', // default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row._id,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Edit User</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderRowActions: ({ row, table }) => (
      <Flex gap="md">
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)}>
            <IconEdit />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete">
          <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
            <IconTrash />
          </ActionIcon>
        </Tooltip>
      </Flex>
    ),
  });

  return <MantineReactTable table={table} />;
};

const queryClient = new QueryClient();

const DemoWithProviders = () => (
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <Demo />
    </ModalsProvider>
  </QueryClientProvider>
);

export default DemoWithProviders;

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

function validateUser(user) {
  return {
    name: !validateRequired(user.name) ? 'Name is Required' : '',
  };
}
