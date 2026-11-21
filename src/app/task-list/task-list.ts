import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  dueDate: string;
}

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-13' },
    { id: 2, title: 'Installer le CLI', dueDate: '2026-11-14' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-15' },
  ]);

  newTitle = signal('');

  count = computed(() => this.tasks().length);

  constructor() {
    effect(() => {
      console.log('Tâches :', this.tasks());
    });
  }

  add(task: Task) {
    this.tasks.update(items => [...items, task]);
  }

  addTask() {
    const title = this.newTitle().trim();
    if (!title) return;

    const id = Math.max(0, ...this.tasks().map(task => task.id)) + 1;
    this.add({ id, title, dueDate: '2026-12-01' });
    this.newTitle.set('');
  }

  remove(id: number) {
    this.tasks.update(items => items.filter(task => task.id !== id));
  }

  clear() {
    this.tasks.set([]);
  }
}