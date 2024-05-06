import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TextField, Button, Grid, InputBase, Paper, Box, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
  isCompleted: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, isEditing: false, isCompleted: false }]);
    setInput('');
  };

  const complete = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const edit = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: true } : todo));
  };

  const cancel = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: false } : todo));
  };

  const save = (id: number, newText: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText, isEditing: false } : todo));
  };

  const deleteItem = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
        <Box component="form" sx={{ p: '2px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 400, bgcolor: 'white'}}>
            <InputBase placeholder='すること' value={input} onChange={(e) => setInput(e.target.value)} sx={{ ml: 1, flex: 1}}/>
            <IconButton type="button" sx={{ p: '10px' }} onClick={addTodo}>
                <AddCircleOutlineIcon />
            </IconButton>
        </Box>
      {todos.map((todo) => (
        <Grid container>
            <Grid item xs={12} md={8} lg={4}>
                <TodoItem key={todo.id} todo={todo} complete={complete} edit={edit} cancel={cancel} save={save} deleteItem={deleteItem} />
            </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default TodoList;