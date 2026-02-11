import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface apiObj {
  name:string,
  category:string,
  htmlCode:string[]
  group:string,
  unicode:string[]

}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient); 
  getAllEmojis() {
    return this.http.get<apiObj[]>('https://emojihub.yurace.pro/api/all');
  }
}