import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with your API base URL

// Create an axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example function to get todos
export const getTodos = async () => {
  try {
    const response = await api.get("/todos");
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

// Example function to create a new todo
export const createTodo = async (todo) => {
  try {
    const response = await api.post("/todos", todo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// Example function to update a todo
export const updateTodo = async (id, updates) => {
  try {
    const response = await api.put(`/todos/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Example function to delete a todo
export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export default api;
