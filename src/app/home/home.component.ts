import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}
