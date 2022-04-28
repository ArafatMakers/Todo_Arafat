import React from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoList from "../components/TodoList/TodoList";

const Home = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
