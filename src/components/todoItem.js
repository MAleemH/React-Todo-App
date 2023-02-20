/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoItem = ({
  itemProp, handleChange, setUpdate, delTodo,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className="item">
      <div className="content" style={viewMode}>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
      <input type="text" value={itemProp.title} className="textInput" onChange={(e) => setUpdate(e.target.value, itemProp.id)} onKeyDown={handleUpdatedDone} style={editMode} />
    </li>
  );
};

export default TodoItem;
