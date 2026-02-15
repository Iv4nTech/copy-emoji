import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emoji } from '../models/emoji-interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = "https://emojihub.yurace.pro/api/all" 
  constructor(private http: HttpClient){};
  getAllEmojis():Observable<Emoji[]> {
    return this.http.get<Emoji[]>(this.apiUrl);
  }
}