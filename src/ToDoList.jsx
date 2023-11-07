import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ todos }) {
  // const toDoListItems = todos.map((t) => <ToDoListItem todo={t} />);
  return (
    <ul>
      {todos.map((t, idx) => (
        <ToDoListItem todo={t} key={idx} index={idx} />
      ))}
    </ul>
  );
}
