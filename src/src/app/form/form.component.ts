import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl:'./form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firstName!: "";
  lastName!: "";
  email!: "";
  password!: "";
  confirmPassword!: "";
  formData: any[] = [];

  onSubmit() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    this.formData.push(data);
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
