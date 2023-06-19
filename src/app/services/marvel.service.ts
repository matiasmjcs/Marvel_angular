import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import {MD5} from 'crypto-js'
import { ICharacter } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  data!: ICharacter[]
  constructor(private http: HttpClient, public router: Router) {}
  fetchData() {
    const publicKey = environment.public_key;
    const privateKey = environment.private_key;
    const ts = '1';
    const hash = MD5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    this.http.get(url).subscribe(
      (value: any) => {
        this.data = value.data.results;
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}