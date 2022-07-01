import './App.css';
import React, {useEffect, useState} from 'react';
import Todo from './Todo'
import {Button, FormControl, InputLabel, FormHelperText, Input} from '@mui/material';
import db from './firebase';
import { collection } from 'firebase/firestore/lite';
import { addDoc, onSnapshot } from "firebase/firestore";

function App() {
  //todos is an array or list to store items for sort time
  //setTodos is used to change/append anything in todos
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');  //setting up for input area, initially empty

  //when the app loads, we need to listen to db and fetch added/removed todos from the database
  useEffect(()=>{
    //it will fireup once app.js will load
    onSnapshot(collection(db,'todos'),snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, []) //it will fireup the number of time [] invokes
  
  const addTodo = (event)=>{
    //this will fire off once add items button will clicked
    event.preventDefault(); //to stop the refresh

    addDoc(collection(db, "todos"), {
      todo: input
    });

    setTodos([...todos, input]); //spread operator will push all todos in input
    setInput('');  //set input list again to empty
  }


  //event is just a simple event which will fire up once anything written in input box
  return (
    <div className="App">
      <h1>TODO APP!!</h1>
      <form>

        <FormControl>
          <InputLabel >Add your items here</InputLabel>
          <Input value={input} onChange = {event=> setInput(event.target.value)}/>
          <FormHelperText ></FormHelperText>
        </FormControl>

        {/* <input value={input} onChange = {event=> setInput(event.target.value)}/>  */}
        <Button disabled = {!input} type='Submit' onClick={addTodo} variant="contained">Add Items</Button>
        {/* <button type='Submit' onClick={addTodo}>Add Items</button> */}
      </form>
      
      <ul>
        {todos.map(todo=>(   //map function will renmdfer through the todos app
          <Todo text={todo}/>
          // <li>{todo}</li> //print all items of todos array using loop
        ))}
      </ul>
    </div>
  );
}

export default App;
