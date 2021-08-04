import styled from "styled-components";

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  overflow: auto;
`;

export const HomeContainer = styled.div`
  width: 80%;
  min-width: 768px;
  height: 80%;
  max-height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TodoInputStyled = styled.input`
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 0.675rem;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0 0.5rem 0 rgba(187, 187, 187, 0.87);
  width: 50%;
`;

export const TodoItemContainer = styled.div`
  width: 50%;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0 0.5rem 0 rgba(187, 187, 187, 0.87);
  border-radius: 0.675rem;
  padding: 1rem 2rem;
  margin: 1rem 0;
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
  color: ${props => (props.isDone ? "lightgray" : "black")};
`;

export const DeleteButton = styled.span`
  width: 2rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.675rem;
  box-shadow: 0 0 0.9rem 0 rgba(187, 187, 187, 0.87);
  margin: 2rem;
  background-color: gray;
  text-align: center;
  cursor: pointer;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
