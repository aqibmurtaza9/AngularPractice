import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { NgFor } from '@angular/common'; 

@Component({
    selector: 'app-main-todos',
    standalone: true,
    templateUrl: './main-todos.component.html',
    styleUrl: './main-todos.component.css',
    imports: [AddTodoComponent, TodoItemComponent, NgFor],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class MainTodosComponent{
  
  itemList  : any= [];


  addNewItem(newItem : any){
    this.itemList.push(newItem)
  }

  deleteItem(item :any){
    console.log("trigger")
    const index = this.itemList.indexOf(item);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }

}
