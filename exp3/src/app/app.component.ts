import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exp3';

  registrationform = new FormGroup({
    username: new FormControl('Admin'),
    password: new FormControl(''),
    cfnpassword: new FormControl('')
  });

  loginrequest() {
    console.log(this.registrationform.value);
    alert('Form submitted! Check console for details.');
  }
}
