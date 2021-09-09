import React, { useState } from "react";
import Button from "../Components/Input/Button/Button";
import Input from "../Components/Input/Input";
import List from "../Components/List/list";

export default function Todo() {
  const [todoList, setTodoList] = useState();
  const [list, setList] = useState([]);
  const onHandleChange = (el) => {
    // el.preventDefault();
    setTodoList(el.target.value);
  };
  console.log(todoList);

  const onHandleClick = () => {
    setList([todoList, ...list]);
  };
  console.log("list", list);

  return (
    <div>
      <Input onChange={(el) => onHandleChange(el)} />
      <Button handleClick={() => onHandleClick()} text="click" />
      {list
        ? list.map((el) => <List value={el} edit="edit" delate="delate" />)
        : null}
      <p>{todoList}</p>
    </div>
  );
}
