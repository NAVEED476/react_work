import { useState } from "react";

export const TodosInput = ({ handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          handleClick(text);
        }}
      >
        Add todo
      </button>
    </div>
  );
};
