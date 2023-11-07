import { useState } from "react";

export default function NewToDoForm({ addToDo }) {
  const [newToDo, setNewToDo] = useState("");

  function handleAddToDo() {
    addToDo(newToDo);
    setNewToDo("");
  }

  return (
    <>
      <h2>New To-Do</h2>
      <input
        value={newToDo}
        onChange={(evt) => setNewToDo(evt.target.value)}
        placeholder="New To-Do"
      />
      <button onClick={handleAddToDo}>ADD TO-DO</button>
    </>
  );
}
