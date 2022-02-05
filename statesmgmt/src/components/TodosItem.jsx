export const TodosItem = ({ title, status, id, deletTodo }) => {
  return (
    <div>
      {title} - {status ? "Done" : "Not Done"}
      <button onClick={() => {
        deletTodo(id)
      }}>Mark as done</button>
    </div>
  );
};
