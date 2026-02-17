import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formContact } from '../models/form-contact-interface';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-contact',
  imports: [FormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
})
export class FormContactComponent {

  protected readonly user = signal<formContact>({
    name: '',
    email: '',
    message: '',
    tel: ''
  })

  updateField(field: keyof formContact, value: string) {
  this.user.update(prev => ({
    ...prev,
    [field]: value
  }));
}

onSubmit(event: Event): void {
  const data = this.user()
  event.preventDefault();
  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
    phone: data.tel
  };

  emailjs.send(
    '', 
    '', 
    templateParams, 
    ''
  )
  .then((response) => {
    console.log('Send email correct!', response.status, response.text);
  }, (error) => {
    console.error('Error send to email', error);
  });
}
}
