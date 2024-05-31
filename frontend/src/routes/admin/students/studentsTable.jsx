import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

export function Demo(users) {
  const [selectedRows, setSelectedRows] = useState([]);

  const rows = users.map((user) => (
    <tr
      key={user._id}
      style={{ backgroundColor: selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined }}
    >
      <td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </td>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>ID</th>
          <th>Name</th>
          <th>Grade</th>
          <th>City</th>
          <th>School</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
