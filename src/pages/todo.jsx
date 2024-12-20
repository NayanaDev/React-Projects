import { useState } from 'react'
//import './App.css'
import AddToDo from '../components/add-todo'

function Todo() {
  const [ele, setEle] = useState("");
  const [items, setItems] = useState([]);
  const [done, setDone] = useState([]);
  const addItem = () => {
    console.log("ele",ele);
    console.log(items);
    setItems([...items, ele])
    setEle("");
  }
  const handleItem =(e) => {
    console.log("item", e.target.value)
    setEle(e.target.value);
  }
  const markToDo = (e) => {
    console.log("val", e.target.value);
    console.log("check", e.target.checked)
    if(e.target.checked)
    {
      setDone([...done, e.target.value]);
      const taskItems = items.filter((item) => item !== e.target.value);
      setItems([...taskItems])
    }   
    else
    {
      const DoneItems = done.filter((item) => item !== e.target.value);
      setDone([...DoneItems])
      setItems([...items, e.target.value]);
    }
      
  }
  return (
    <>
        <h2>Todo App</h2>
        <AddToDo addItem={addItem} ele={ele} handleItem={handleItem}/>
        <h3>Task List</h3>
        {
          items.map(item => 
          <div key={item} className="items">
            <input type="checkbox" name={item} value={item} onChange={markToDo}/>
            <h3 >{item}</h3>
          </div>
        )
        }
         <h3>Done Items</h3>
         {
          done.map(item => 
            <div key={item} className="items">
              <input type="checkbox" name={item} value={item} checked={true} onChange={markToDo}/>
              <h3 >{item}</h3>
            </div>
          )
         }
    </>
  )
}

export default Todo
