import React from 'react';
import './style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <>
      <form action="" className="input">
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="input__box"
        />
        <button type="submit" className="input_submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;