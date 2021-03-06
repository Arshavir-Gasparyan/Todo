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
      todoMenu.map((todo) =>
        todo.id === todoList.id && todo.edited === false
          ? { ...todo, readOnly: false, edited: true }
          : { ...todo, readOnly: true, edited: false }
      )
    );
    console.log(todoMenu);
  };

  //   const onSaveInput = (todoList) => {
  //     setList(
  //       list.map((todo) =>
  //         todo.id === todoList.id
  //           ? { ...todo, readOnly: true, edited: false }
  //           : todo
  //       )
  //     );
  //   };

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
    <div
      style={{
        border: "1px solid black",
        width: "600px",
        margin: "auto",
        paddingBottom: "30px",
        backgroundColor: "#856d4d",
      }}
    >
      <h1>Todo List</h1>

      <div className={styles.todo}>
        <Input
          style={{ backgroundColor: "#BDB76B" }}
          onChange={(el) => onHandleChange(el)}
        />
        <Button
          style={{ padding: "12px", width: "80px" }}
          handleClick={() => onHandleClick()}
          text="Add"
        />
      </div>
      <div className={styles.todoNavigation}>
        <Button
          handleClick={() => showAllInputs()}
          text={`All:  ${list.length}`}
        />
        <Button
          handleClick={() => showActiveInputs()}
          text={`Active: ${
            list.filter((todo) => todo.isActive === true).length
          } `}
          style={{ backgroundColor: "#a99a86" }}
        />
        <Button
          handleClick={() => showCompletedInputs()}
          text={`Completed: ${
            list.filter((todo) => todo.isActive === false).length
          } `}
          style={{ backgroundColor: "#c3b091" }}
        />
      </div>
      <div className={styles.list}>
        {todoMenu
          ? todoMenu.map((el, i) => (
              <div className={styles.listRow} key={i}>
                <List
                  onChange={(evt) => changeListInput(evt, el)}
                  onEdit={() => onEditInput(el)}
                  onDelate={() => delateInput(el.id)}
                  onActive={() => onActiveInput(el)}
                  edit={el.edited ? "Save" : "Edit"}
                  delate="Delate"
                  save="Save"
                  done="Done"
                  value={el.name}
                  readOnly={el.readOnly}
                  className={styles.inputs}
                  style={
                    el.isActive === false
                      ? {
                          backgroundColor: "#c3b091",
                          textDecoration: "line-through",
                        }
                      : { backgroundColor: "#a99a86" }
                  }
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
