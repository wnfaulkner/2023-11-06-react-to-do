import { useState } from "react";

export default function NewToDoForm({ addToDo }) {
  const [newToDo, setNewToDo] = useState("");

function handleAddToDo(evt) {
  evt.preventDefault();
  addToDo(newToDo);
  setNewToDo("");
}

  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddToDo}>
        <input
          value={newToDo}
          onChange={(evt) => setNewToDo(evt.target.value)}
          placeholder="To-Do"
          required 
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </>
  );
}
