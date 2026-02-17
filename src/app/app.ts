import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormContactComponent } from './form-contact/form-contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {

}
