import React from 'react';
import { Container, Grid, Col, Paper, Title } from '@mantine/core';
import CreateItem from './components/CreateItem';
import UpdateItem from './components/UpdateItem';
import ItemList from './components/ItemList';

const App: React.FC = () => {
  // Placeholder item for update example
  const itemToUpdate = { id: 1, name: 'Example Item' };

  return (
    <Container className="container" size="lg" padding="md">
      <Title order={1} align="center" mb="lg">CRUD Application</Title>
      <Grid>
        <Grid.Col span={12} md={6}>
          <Paper padding="md" shadow="xs">
            {/* <Title order={2}>Create Item</Title> */}
            <CreateItem />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <Paper padding="md" shadow="xs">
            {/* <Title order={2}>Update Item</Title> */}
            <UpdateItem item={itemToUpdate} />
          </Paper>
        </Grid.Col>
      </Grid>
      <Paper padding="md" shadow="xs" mt="lg">
        <Title order={2}>Item List</Title>
        <ItemList />
      </Paper>
    </Container>
  );
};

export default App;

