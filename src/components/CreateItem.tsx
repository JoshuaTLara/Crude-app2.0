import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextInput, Container, Title } from '@mantine/core';
import { addItem } from '../store/itemsSlice';

const CreateItem: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = () => {
    const newItem = {
      id: Date.now(), // Simple ID generation
      name,
    };
    dispatch(addItem(newItem));
    setName('');
  };

  return (
    <Container>
      <Title order={2}>Create Item</Title>
      <TextInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        label="Name"
      />
      <Button onClick={handleSubmit}>Add Item</Button>
    </Container>
  );
};

export default CreateItem;
