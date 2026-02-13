import { APP_ID, Component, inject, OnInit, signal } from '@angular/core';
import { apiObj, DataService } from '../services/emoji.service';


@Component({
  selector: 'app-all-api',
  imports: [],
  templateUrl: './all-api.html',
  styleUrl: './all-api.css',
})

export class AllApi {
  private _dataService = inject(DataService);
  items = signal<apiObj[] | null>(null);
  emojiCopiado = signal<string | null>(null); 

  ngOnInit(): void {
    this._dataService.getAllEmojis().subscribe(array => {
      this.items.set(array);
    });
  }

  copyEmoji(htmlCode: string, name: string) {
    navigator.clipboard.writeText(htmlCode)
      .then(() => {
        this.emojiCopiado.set(name);
      });
  }
}