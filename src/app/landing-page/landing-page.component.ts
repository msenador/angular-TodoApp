import { Component, OnInit } from '@angular/core';
import { Links } from '../models/links';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  todoListLink: string = 'Enter App'
  addTodoLink: string = 'Add Todo'

  links: Links[] = [
    {label: 'Enter App', link: '/todo'},
    {label: 'Add Todo', link: '/addTodo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
