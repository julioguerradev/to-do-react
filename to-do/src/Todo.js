import React, {useState} from "react";
import './Todo.css'

import List from "./List";
import Item from "./Item"
import TodoForm from "./TodoForm";



function Todo(){
    const [items, setItems] = useState([])


    function onAddItem(text){
        let it = new Item(text)

        setItems([...items, it])
    }

    function onItemDeleted(item){
        let filterItems = items.filter(it => it.id != item.id)

        setItems(filterItems)
    }

    return(
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onItemDeleted={onItemDeleted} items={items}></List>
        </div>
    )
}

export default Todo
