import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emoji } from '../models/emoji-interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private KEY = 'favsEmoji';
  myFavs: Emoji[] = [];

  
  
add(emoji: Emoji | null) {
  if (!emoji) return;     

  if (!this.myFavs.find(e => e.name === emoji.name)) {
    this.myFavs.push(emoji);
    this.guardarEnLocalStorage();
  }
}
  delete(emoji: Emoji) {
    this.myFavs = this.myFavs.filter(e => e.name !== emoji.name);
    this.guardarEnLocalStorage();
  }

  private guardarEnLocalStorage() {
    localStorage.setItem(this.KEY, JSON.stringify(this.myFavs));
  }

  private cargarDeLocalStorage() {
    const datosCargados = localStorage.getItem(this.KEY);
    if (datosCargados) {
      this.myFavs = JSON.parse(datosCargados);
    }
  }

  private apiUrl = "https://emojihub.yurace.pro/api/all" 
  constructor(private http: HttpClient){this.cargarDeLocalStorage();};
  getAllEmojis():Observable<Emoji[]> {
    return this.http.get<Emoji[]>(this.apiUrl);
  }
}