import React, { useState } from 'react';
import { Card, TextField, Checkbox, IconButton, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    isEditing: boolean;
    isCompleted: boolean;
  };
  complete: (id: number) => void;
  edit: (id: number) => void;
  cancel: (id: number) => void;
  save: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, complete, edit, cancel, save }) => {
  const [editText, setEditText] = useState(todo.text);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
      <Checkbox checked={todo.isCompleted} onChange={() => complete(todo.id)} />
      {todo.isEditing ? (
        <TextField value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <Typography sx={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.text}</Typography>
      )}
      <div>
        {todo.isEditing ? (
          <>
            <IconButton onClick={() => save(todo.id, editText)}><SaveIcon /></IconButton>
            <IconButton onClick={() => cancel(todo.id)}><CancelIcon /></IconButton>
          </>
        ) : (
          <IconButton onClick={() => edit(todo.id)}><EditIcon /></IconButton>
        )}
      </div>
    </Box>
  );
};

export default TodoItem;