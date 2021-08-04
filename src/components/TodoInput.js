import { TodoInputStyled } from "./styled";

const TodoInput = ({ inputText, handleInputChange, onEnterPress }) => {
  return (
    <TodoInputStyled
      value={inputText}
      onChange={handleInputChange}
      onKeyUp={onEnterPress}
      type="text"
    />
  );
};

export default TodoInput;
