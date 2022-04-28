import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import TodoList from "./components/TodoList/TodoList";
import Home from "./Home/Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/edit" element={<EditTodo />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
