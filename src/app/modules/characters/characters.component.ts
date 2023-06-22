import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [MarvelService],
})
export class CharactersComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
   
  }
  
}
