import React, { useEffect } from "react";

import TodoEditForm from "./components/todoEditForm";
import TodoAddForm from "./components/todoAddForm";

import * as S from "./todoList.styled";

const TodoList = ({ date, todos, setTodos }) => {
  // 로컬스토리지 생성
  useEffect(() => {
    window.localStorage.setItem("Todo_Data", JSON.stringify(todos));
  }, [todos]);

  const checkTodo = (todo) =>
    setTodos((todos) => {
      const checked = { ...todos };
      checked[todo.id] = todo;
      return checked;
    });

  const createTodo = (todo) => {
    setTodos((todos) => {
      const created = { ...todos };
      created[todo.id] = todo;
      return created;
    });
  };

  const deleteTodo = (todo) =>
    setTodos((todos) => {
      const deleted = { ...todos };
      delete deleted[todo.id];
      return deleted;
    });
  //todo = todoitem / todos에 저장된 하나의 아이템 ,,

  return (
    <S.TodoList>
      <TodoAddForm
        createTodo={createTodo}
        todos={todos}
        todoDate={date.format("YYYYMMDD")}
      />
      <S.GridTodoEdit>
        <TodoEditForm
          title={"TodoList"}
          checkTodo={checkTodo}
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          setTodos={setTodos}
          todoDate={date.format("YYYYMMDD")}
          checkedList={false}
        />
        <TodoEditForm
          title={"Done"}
          checkTodo={checkTodo}
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          setTodos={setTodos}
          todoDate={date.format("YYYYMMDD")}
          checkedList={true}
        />
      </S.GridTodoEdit>
    </S.TodoList>
  );
};

export default TodoList;
