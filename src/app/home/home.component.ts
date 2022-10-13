import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameInput: string = '';
  statusInput: string = 'Incomplete';
  todoToBeDeleted: string = ''


  todoList: Todo[] = [
    {
      name: 'Learn to read',
      status: 'In Progress',
      showEdit: false
    },
    {
      name: 'Learn to walk',
      status: 'Completed',
      showEdit: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleAddItem = (): void => {
    this.todoList.push({
      name: this.nameInput,
      status: this.statusInput,
      showEdit: false
    })

    this.nameInput = '';
    this.statusInput = 'Incomplete'
  }

  handleOnEdit = (todoName: string): void => {
    this.todoList.map((todo) => {
      if (todo.name === todoName) {
        todo.showEdit = !todo.showEdit
      }
    })
  }

  handleDelete = (todoName: string): void => {
    this.todoList = this.todoList.filter((todo) => {
      return todo.name !== todoName;
    })
  }

  handleUpdateIncomplete = (todoName: string): void => {
    this.todoList.map((todo) => {
      if (todo.name === todoName) {
        todo.status = 'Incomplete'
      }
    })
  }

  handleUpdateInProgress = (todoName: string): void => {
    this.todoList.map((todo) => {
      if (todo.name === todoName) {
        todo.status = 'In Progress'
      }
    })
  }

  handleComplete = (todoName: string): void => {
    this.todoList.map((todo) => {
      if (todo.name === todoName) {
        todo.status = 'Complete'
      }
    })
  }

}
