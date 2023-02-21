/* eslint-disable react/prop-types */
import TodoItem from './todoItem';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        setUpdate={setUpdate}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default TodosList;
