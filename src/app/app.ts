import { Component } from '@angular/core';
import { RegistrationComponent } from './registration-component/registration-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

}
