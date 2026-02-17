import { APP_ID, Component, inject, OnInit, signal, computed } from '@angular/core';
import { DataService } from '../services/emoji.service';
import { Emoji } from '../models/emoji-interface';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

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
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  emojiSelect = computed(() => {
    const name = this._route.snapshot.paramMap.get('name');
    return this.items()?.find(e => e.name === name) || null;
  });

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

  showDetailEmoji(emoji:Emoji) {
    this._router.navigate(['/detail/emoji', emoji.name]);
    
  }

  closeDetail() {
    this._router.navigate(['/all/emojis']);
  }

  addEmoji(emoji: Emoji) {
  this._dataService.add(emoji);
}

}