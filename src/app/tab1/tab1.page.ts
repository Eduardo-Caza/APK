import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  input: string = '';

  constructor() {}

  // Agregar valor al input
  append(value: string) {
    this.input += value;
  }

  // Limpiar el input
  clear() {
    this.input = '';
  }

  // Evaluar el resultado
  calculate() {
    try {
      this.input = eval(this.input);
    } catch (e) {
      this.input = 'Error';
    }
  }
}
