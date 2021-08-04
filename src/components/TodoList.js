import TodoItem from "./TodoItem";
import { TodoListContainer } from "./styled";

const TodoList = ({ todos, handleIsDoneClick, handleOnDelete }) => {
  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          id={todo._id}
          content={todo.content}
          isDone={todo.isDone}
          handleIsDoneClick={handleIsDoneClick}
          handleOnDelete={handleOnDelete}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
