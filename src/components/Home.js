import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { HomeContainer } from "./styled";
import { useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../apiService";

const Home = props => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const getAllTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  const onEnterPress = async e => {
    if (e.key === "Enter" && inputText) {
      try {
        const { data } = await createTodo(inputText);

        setTodos([data, ...todos]);
        setInputText("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleIsDoneClick = async id => {
    const itemIndex = todos.findIndex(item => item._id === id);
    const newArr = [...todos];
    const item = newArr[itemIndex];

    await updateTodo(id, !item.isDone);

    item.isDone = !item.isDone;
    setTodos(newArr);
  };

  const handleOnDelete = async id => {
    await deleteTodo(id);
    
    setTodos(prevValue => prevValue.filter(todo => todo._id !== id));
  };

  useEffect(() => {
    const allTodos = async () => {
      await getAllTodos();
    };

    allTodos();
  }, []);

  return (
    <HomeContainer>
      <h1>TODOist</h1>
      <TodoInput
        inputText={inputText}
        onEnterPress={onEnterPress}
        handleInputChange={handleInputChange}
      />
      <TodoList
        todos={todos}
        handleIsDoneClick={handleIsDoneClick}
        handleOnDelete={handleOnDelete}
      />
    </HomeContainer>
  );
};

export default Home;
