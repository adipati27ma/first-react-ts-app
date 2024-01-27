import React, { useState } from 'react';
import { Todo } from '../models/model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './style.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEditTodo = (): void => {
    if (!isEditing && !todo.isDone) {
      setIsEditing(!isEditing);
    }
  };

  const handleFinishEdit = (e: React.FormEvent, id: number): void => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEditing(false);
  };

  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDoneTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form
      className={`todos__single`}
      onSubmit={(e) => handleFinishEdit(e, todo.id)}
    >
      {isEditing ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={handleEditTodo}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDeleteTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDoneTodo(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
