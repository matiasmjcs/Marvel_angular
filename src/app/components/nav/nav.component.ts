import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesTableComponent } from 'src/app/modules';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(): void {
    this.dialog.open(FavoritesTableComponent, {
      enterAnimationDuration: 1,
    });

}
}