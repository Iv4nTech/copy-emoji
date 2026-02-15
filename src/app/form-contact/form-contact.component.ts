import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formContact } from '../models/form-contact-interface';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form-contact',
  imports: [RouterLink],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
})
export class FormContactComponent implements OnInit {

  protected readonly user = signal<formContact>({
    nombre: '',
    email: '',
    mensaje: '',
    telefono: ''
  })

  ngOnInit(): void {
    emailjs.init('');
    this.user.set({
      nombre: 'Iván',
      email: 'ivan@ivan.com',
      mensaje: 'Hola, soy Iván',
      telefono: '7723823783'
    })
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    emailjs.sendForm('', '', event.target as HTMLFormElement)
      .then((result: EmailJSResponseStatus) => {
        console.log('¡Correo enviado!', result.text);
      }, (error: any) => {
        console.error('Error:', error.text);
      });
  }
}
