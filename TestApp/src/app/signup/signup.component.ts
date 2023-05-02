import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName = '';
  lastName = '';
  email = ''
  password = ''
  showForm = false;
  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.showForm = true;
  }
  hideData() {
    this.showForm = false;
  }
}
