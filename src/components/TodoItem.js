import { TodoItemContainer, DeleteButton, WrapperDiv } from "./styled";

const TodoItem = ({
  content,
  isDone,
  handleIsDoneClick,
  id,
  handleOnDelete,
}) => {
  return (
    <WrapperDiv>
      <TodoItemContainer onClick={() => handleIsDoneClick(id)} isDone={isDone}>
        {content}
      </TodoItemContainer>
      <DeleteButton
        onClick={() => {
          handleOnDelete(id);
        }}
      >
        X
      </DeleteButton>
    </WrapperDiv>
  );
};

export default TodoItem;
