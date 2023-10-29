import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
registerForm:FormGroup=new FormGroup({
  'Full Name':new FormControl(null),
  'Email':new FormControl(null),
  'phone number':new FormControl(null),
})
}
