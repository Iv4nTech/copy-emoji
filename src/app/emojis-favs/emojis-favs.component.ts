import { Component } from '@angular/core';
import { DataService } from '../services/emoji.service';

@Component({
  selector: 'app-emojis-favs',
  imports: [],
  templateUrl: './emojis-favs.component.html',
  styleUrl: './emojis-favs.component.css',
})
export class EmojisFavsComponent {
    constructor(public dataService: DataService) {}
}
