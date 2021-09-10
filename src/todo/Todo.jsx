import React, { useState } from "react";
import Button from "../Components/Input/Button/Button";
import Input from "../Components/Input/Input";
import List from "../Components/List/list";

export default function Todo() {
  const [todoList, setTodoList] = useState();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const onHandleChange = (el) => {
    // el.preventDefault();
    setTodoList(el.target.value);
  };
  //   console.log(todoList);

  const onHandleClick = () => {
    setCount(count + 1);
    setList([{ name: todoList, id: count }, ...list]);
  };
  const delateInput = (id) => {
    setList(list.filter((el) => id !== el.id));
    console.log("aaaaaaaaa");
  };
  console.log(list);
  return (
    <div>
      <Input onChange={(el) => onHandleChange(el)} />
      <Button handleClick={() => onHandleClick()} text="click" />
      {list
        ? list.map((el) => (
            <List
              value={el.name}
              edit="edit"
              delate="delate"
              onDelate={() => delateInput(el.id)}
            />
          ))
        : null}
      <p></p>
    </div>
  );
}
