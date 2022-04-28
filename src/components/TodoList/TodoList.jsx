import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos, getTodos, changeStatus, deleteTask, editTodo } =
    useContext(todoContext);

  useEffect(() => {
    getTodos();
  }, []);
  // console.log(todos);
  return (
    <div>
      {todos.map((item) => (
        <Card key={item.id} border="primary" style={{ width: "18rem" }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <input
              checked={item.status}
              type="checkbox"
              onChange={() => changeStatus(item.id)}
            />
            <span className={item.status ? "completed" : ""}>{item.task}</span>
            <div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </Button>
              <Link to="/edit">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => editTodo(item.id)}
                >
                  Edit
                </Button>
              </Link>
            </div>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
