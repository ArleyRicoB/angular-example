import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponent {
  public title: string;
  public comment: string;
  public year: number;

  constructor() {
    this.title = 'Hello world!';
    this.comment = 'This is my first component';
    this.year = 2021;
    console.log('My component was uploaded');
  }
}
