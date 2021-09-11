import React, { useState } from "react";
import Button from "../Components/Input/Button/Button";
import Input from "../Components/Input/Input";
import List from "../Components/List/list";
import styles from "./Todo.Module.css";

export default function Todo() {
  const [todoList, setTodoList] = useState();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [listInputValue, setListInputValue] = useState("");

  const onHandleChange = (el) => {
    // el.preventDefault();
    setTodoList(el.target.value);
  };

  const onHandleClick = () => {
    setCount(count + 1);
    setList([{ name: todoList, id: count, readOnly: true }, ...list]);
    console.log("list", list);
  };

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
        todo.id === todoList.id ? { ...todo, readOnly: false } : todo
      )
    );
  };
  console.log(list);
  console.log("inp", listInputValue);

  return (
    <>
      <h1>Todo</h1>

      <div className={styles.todo}>
        <Input onChange={(el) => onHandleChange(el)} />
        <Button handleClick={() => onHandleClick()} text="click" />
      </div>
      <div className={styles.list}>
        {list
          ? list.map((el, i) => (
              <div className={styles.listRow} key={i}>
                <List
                  onChange={(evt) => changeListInput(evt, el)}
                  onEdit={() => onEditInput(el)}
                  value={el.name}
                  edit="edit"
                  delate="delate"
                  onDelate={() => delateInput(el.id)}
                  readOnly={el.readOnly}
                />
              </div>
            ))
          : null}
      </div>
    </>
  );
}
