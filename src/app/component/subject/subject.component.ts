import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  constructor() {}

  show?: boolean;
  update?: boolean;

  Add() {
    this.show = true;
    this.update = false;
  }

  edit() {
    this.show = false;
    this.update = true;
  }
}
