import { Component, signal } from '@angular/core';

import{ } from '@angular/core';
import { Form } from './form/form';
@Component({
  selector: 'app-root',
  imports: [Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exp2');
}
