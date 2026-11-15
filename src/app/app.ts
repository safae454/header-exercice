import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('header-exercice');
}