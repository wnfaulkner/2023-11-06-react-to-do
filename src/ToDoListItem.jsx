import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }) {
  return (
    <li
      className="ToDoListItem"
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
    >
      <div className="ToDoListItemNumber">{index + 1}</div>
      <div className="ToDoListItemContent">{todo}</div>
    </li>
  );
}
