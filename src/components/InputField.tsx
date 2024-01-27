import React, { useRef } from 'react';
import './style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
        className="input"
      >
        <input
          type="input"
          value={todo}
          ref={inputRef}
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
