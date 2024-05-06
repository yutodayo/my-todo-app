import React from 'react';
import TodoList from './components/TodoList';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Box ml={3}>
      <h1>TODO</h1>
      <TodoList />
    </Box>
  );
};

export default App;