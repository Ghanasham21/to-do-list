import { useState } from '';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim() !== '') {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 my-2 rounded shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border rounded p-1"
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button onClick={handleEdit} className="text-blue-500">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
