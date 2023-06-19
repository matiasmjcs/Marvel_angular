import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ICharacter } from '../../models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [MarvelService],
})
export class CharactersComponent implements OnInit {
  data!:ICharacter[]
  constructor(public marvelService: MarvelService) {}
  ngOnInit(): void {
     this.marvelService.getCharacter().subscribe((data: any) => {
       this.data = data.data.results;
     });
  }
}
