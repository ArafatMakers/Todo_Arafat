import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";

const EditTodo = () => {
  const { taskToEdit, saveTask } = useContext(todoContext);
  const [newEditItem, setNewEditItem] = useState(taskToEdit);

  const navigate = useNavigate();

  function handleEditInp(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    };
    setNewEditItem(newTask);
  }

  useEffect(() => {
    setNewEditItem(taskToEdit);
  }, [taskToEdit]);

  return (
    <div className="d-flex m-3">
      {newEditItem ? (
        <>
          {" "}
          <Form.Control
            type="text"
            placeholder="add todo"
            className="w-25"
            value={newEditItem.task}
            onChange={handleEditInp}
          />
          <Button
            variant="warning"
            onClick={() => {
              saveTask(newEditItem);
              navigate("/");
            }}
          >
            Save
          </Button>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default EditTodo;
