import React, { useState } from "react";
import "./App.css";

// Make CRUD
// Be able to create new list into the array
// be able to edit or delete with button
// be able to make tabs
// make css --selected checkbox

function App() {
  // State Hooks
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [TodoEdit, setTodoEdit] = useState(null);
  const [editingTitle, seteditingTitle] = useState("");
  const [selectedList, setselectedList] = useState(0);

  // Helper Functions

  // Add todo to array
  function addTodo() {
    console.log("inputed title is:", title);

    // if statement not allowing empty input
    if (!title) {
      return;
    }

    // adding to array
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      complete: false,
    };

    setList([...list, newTodo]);
    setTitle("");

    console.log(list);
  }

  // edit Todo
  function editTodo(id) {
    console.log(editingTitle);
    const newTodo = [...list].map((item) => {
      if (item.id === id) {
        item.text = editingTitle;
      }
      return item;
    });
    setList(newTodo);
    setTodoEdit(null);
    setTodoEdit("");
  }

  // delete todo from array
  function removeTodo(id) {
    console.log(id);
    const newArray = list.filter((item) => item.id !== id);
    setList(newArray);
  } 
  
  // Checkbox strikethrough 
  function selectTodo(id) {
    console.log(list.complete);
    const newTodo = [...list];
    newTodo.complete = true;
    setList(newTodo);
  }

  // create new list
  function addList() {
    const newList = {
      
    }
  }

  return (
    <div className="app">
      <div className="App-header">
        <h1>TO DO LIST</h1>
        <div className="ListTabs">
          <div className="ListTabs-tab"> Tab 1</div>
          <div className="ListTabs-tab"> Tab 2</div>
          <div className="ListTabs-tab"> Tab 3</div>
        </div>
      </div>
      <div className="ToDoList">
        <div className="ToDoList-input">
          <input
            placeholder="Whats next?"
            onChange={(ev) => setTitle(ev.target.value)}
            value={title}
          ></input>
          <button onClick={addTodo}>Add</button>
        </div>
        {list.map((item) => (
          <div className="ToDoItems" key={item.id}>
            {item.id === TodoEdit ? (
              <input
                placeholder="Edit Here"
                onChange={(ev) => seteditingTitle(ev.target.value)}
              />
            ) : (
              <div
                className="ToDoList-title"
                onClick={selectTodo}
                style={{ textDecoration: item.complete ? "line-through;" : "" }}
              >
                {item.title}
              </div>
            )}

            {/* Edit Buttons */}
            {TodoEdit === item.id ? (
              <button onClick={() => editTodo(item.id)}>✔️</button>
            ) : (
              <button
                className="ToDoList-update"
                onClick={() => setTodoEdit(item.id)}
              >
                ✎
              </button>
            )}
            {/* Delete Button */}
            <button
              className="ToDoList-delete"
              onClick={() => removeTodo(item.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
