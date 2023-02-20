import Header from './header';
import TodosLogic from './todosLogic';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);

export default TodoApp;
