import { APP_ID, Component, inject, OnInit, signal } from '@angular/core';
import { apiObj, DataService } from '../services/emoji.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [DataService]
})
export class Home implements OnInit {
    private _dataService = inject(DataService);
    items = signal<apiObj[] | null>(null);
    delete:boolean = false;

    ngOnInit(): void {
        this._dataService.getAllEmojis().subscribe(array => {
            console.log(array);
            this.items.set(array);

          })
        }

      copyEmoji(htmlCode:string) {
           navigator.clipboard.writeText(htmlCode)
            .then(() => {
                alert('¡Emoji copiado al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
      }

      changeDetails() {
        this.delete = !this.delete
      }
    }

