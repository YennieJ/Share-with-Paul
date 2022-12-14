import React from "react";

import TodoForm from "./todoForm";

import * as S from "./todoEditForm.styled";

const TodoEditForm = ({
  checkTodo,
  deleteTodo,
  createTodo,
  todos,
  title,
  todoDate,
  checkedList,
}) => {
  // 해당 날짜에 대한 todoList
  const selectedDateData = Object.keys(todos).filter(
    (item) => todos[item].date === todoDate
  );

  return (
    <S.TodoEditFormStyle>
      <strong>{title}</strong>
      <ul>
        {selectedDateData.map((todoItem) => {
          // checkedList 가 false면 todoItem 숨기기
          if (checkedList !== todos[todoItem].checked) return null;
          return (
            <TodoForm
              key={todoItem}
              todoItem={todos[todoItem]}
              createTodo={createTodo}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
            />
          );
        })}
      </ul>
    </S.TodoEditFormStyle>
  );
};
export default TodoEditForm;
