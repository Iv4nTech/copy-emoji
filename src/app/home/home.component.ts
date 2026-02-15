import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CarruselComponent } from '../carrusel/carrusel.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterLink, CarruselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}
