import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  playerId: any;
  ingame: boolean = true;

  constructor() { }
  ngOnInit(): void {
  }

  updateState(ingame: boolean) {
  }
}
