/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

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
        <button type="button" className="list-item-buttons" onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button type="button" className="list-item-buttons" onClick={() => delTodo(itemProp.id)}>
          <FaTrash />
        </button>
        {itemProp.title}
      </div>
      <input type="text" value={itemProp.title} className="textInput" onChange={(e) => setUpdate(e.target.value, itemProp.id)} onKeyDown={handleUpdatedDone} style={editMode} />
    </li>
  );
};

export default TodoItem;
