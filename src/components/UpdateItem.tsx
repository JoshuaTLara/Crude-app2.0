import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextInput, Container, Title } from '@mantine/core';
import { updateItem } from '../store/itemsSlice';

interface UpdateItemProps {
  item: { id: number; name: string };
}

const UpdateItem: React.FC<UpdateItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(item.name);

  const handleSubmit = () => {
    const updatedItem = { id: item.id, name };
    dispatch(updateItem(updatedItem));
  };

  return (
    <Container>
      <Title order={2}>Update Item</Title>
      <TextInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        label="Name"
      />
      <Button onClick={handleSubmit}>Update Item</Button>
    </Container>
  );
};

export default UpdateItem;
