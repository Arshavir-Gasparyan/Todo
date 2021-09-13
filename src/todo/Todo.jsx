import React, { useEffect, useState } from "react";
import Button from "../Components/Input/Button/Button";
import Input from "../Components/Input/Input";
import List from "../Components/List/list";
import styles from "./Todo.Module.css";

export default function Todo() {
  const [todoList, setTodoList] = useState();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [listInputValue, setListInputValue] = useState("");
  const [todoMenu, setTodoMenu] = useState([]);

  const onHandleChange = (el) => {
    setTodoList(el.target.value);
  };

  const onHandleClick = () => {
    setCount(count + 1);
    setList([
      {
        name: todoList,
        id: count,
        readOnly: true,
        edited: false,
        isActive: true,
      },
      ...list,
    ]);

    console.log("list", list);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
    setTodoMenu(list);
  }, [list]);

  const delateInput = (id) => {
    setList(list.filter((el) => id !== el.id));
  };

  const changeListInput = (evt, todoList) => {
    setList(
      list.map((todo) =>
        todo.id === todoList.id ? { ...todo, name: evt.target.value } : todo
      )
    );
  };

  const onEditInput = (todoList) => {
    setList(
      list.map((todo) =>
        todo.id === todoList.id
          ? { ...todo, readOnly: false, edited: true }
          : todo
      )
    );
  };

  const onSaveInput = (todoList) => {
    setList(
      list.map((todo) =>
        todo.id === todoList.id ? { ...todo, readOnly: true } : todo
      )
    );
  };

  const onActiveInput = (todoList) => {
    setList(
      list.map((todo) =>
        todo.id === todoList.id ? { ...todo, isActive: false } : todo
      )
    );
  };

  const showAllInputs = () => {
    setTodoMenu(list.map((todo) => todo));
  };

  const showActiveInputs = () => {
    setTodoMenu(list.filter((todo) => todo.isActive === true));
  };

  const showCompletedInputs = () => {
    setTodoMenu(list.filter((todo) => todo.isActive === false));
  };

  return (
    <>
      <h1>Todo</h1>

      <div className={styles.todo}>
        <Input onChange={(el) => onHandleChange(el)} />
        <Button handleClick={() => onHandleClick()} text="click" />
      </div>
      <div className={styles.todoNavigation}>
        <Button
          handleClick={() => showAllInputs()}
          text={`All:  ${list.length}`}
        />
        <Button handleClick={() => showActiveInputs()} text="Active" />
        <Button handleClick={() => showCompletedInputs()} text="Completed" />
      </div>
      <div className={styles.list}>
        {todoMenu
          ? todoMenu.map((el, i) => (
              <div className={styles.listRow} key={i}>
                <List
                  onChange={(evt) => changeListInput(evt, el)}
                  onEdit={() => onEditInput(el)}
                  onDelate={() => delateInput(el.id)}
                  onSave={() => onSaveInput(el)}
                  onActive={() => onActiveInput(el)}
                  edit="Edit"
                  delate="Delate"
                  save="Save"
                  done="Done"
                  value={el.name}
                  readOnly={el.readOnly}
                />
              </div>
            ))
          : null}
      </div>
    </>
  );
}
