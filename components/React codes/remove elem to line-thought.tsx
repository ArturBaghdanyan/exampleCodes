import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  isDone: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Buy groceries', isDone: false },
    { id: 2, text: 'Do laundry', isDone: false },
    { id: 3, text: 'Walk the dog', isDone: false }
  ]);

  const [wordToRemove, setWordToRemove] = useState('');

  const handleItemClick = (id: number, text: string) => {
    setWordToRemove(text);
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleRemoveClick = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    setWordToRemove('');
  };

  return (
  <div>
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={todo.isDone ? 'done' : ''}
          onClick={() => handleItemClick(todo.id, todo.text)}
        >
          {wordToRemove && todo.text.includes(wordToRemove) ? (
            <span style={{ 
              textDecoration: 'line-through' }} 
              onClick={() => handleRemoveClick(todo.id)}
              >
                {wordToRemove}
              </span>
          ) : (
            todo.text
          )}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default TodoList;