import { APP_ID, Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../services/emoji.service';
import { Emoji } from '../models/emoji-interface';

@Component({
  selector: 'app-all-api',
  imports: [],
  templateUrl: './all-api.html',
  styleUrl: './all-api.css',
})

export class AllApi {
  private _dataService = inject(DataService);
  items = signal<Emoji[] | null>(null);
  emojiCopied = signal<string | null>(null); 
  cargando = signal(true);

  ngOnInit(): void {
    this._dataService.getAllEmojis().subscribe(array => {
      this.items.set(array);
      this.cargando.set(false);
    });
  }

  copyEmoji(htmlCode: string, name: string) {
    navigator.clipboard.writeText(htmlCode)
      .then(() => {
        this.emojiCopied.set(name);
      });
  }
}