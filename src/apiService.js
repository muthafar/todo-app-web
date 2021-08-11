import axios from "axios";

const todosBaseUrl = "/todos";

export const getTodos = async () => {
  return await axios.get(todosBaseUrl);
};

export const createTodo = async (inputText) => {
  return await axios.post(todosBaseUrl, { content: inputText });
};

export const updateTodo = async (id, isDone) => {
  return await axios.put(`${todosBaseUrl}/${id}`, { isDone });
};

export const deleteTodo = async (id) => {
  return await axios.delete(`${todosBaseUrl}/${id}`);
};

export const signIn = async (username, password) => {
  return await axios.post("/signin", { username, password });
};

export const signUp = async (email, username, password) => {
  return await axios.post("/signup", { username, email, password });
};
