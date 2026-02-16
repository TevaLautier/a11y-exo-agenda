import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl:'./main.html',
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
