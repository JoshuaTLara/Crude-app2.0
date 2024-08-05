import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from '@mantine/core';
import { deleteItem } from '../store/itemsSlice';
import { RootState } from '../store/store';

const ItemList: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ItemList;
