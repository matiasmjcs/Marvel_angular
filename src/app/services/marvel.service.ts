import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MD5 } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  publicKey = environment.public_key;
  privateKey = environment.private_key;
  ts = '1';
  hash: CryptoJS.lib.WordArray;
  url: string;
  constructor(private http: HttpClient, public router: Router) {
     this.hash = MD5(this.ts + this.privateKey + this.publicKey);
     this.url = `https://gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;
  }
  getCharacter() {
    return this.http.get(this.url);
  }
}