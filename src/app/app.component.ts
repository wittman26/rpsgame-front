import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionserviceService } from './services/sessionservice.service';
import { SESSION_CONSTANTS } from './utils/session-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  playerId: any;
  ingame: boolean = true;

  constructor (private sessionserviceService:SessionserviceService, private router: Router) {}
  ngOnInit(): void {
    if (SessionserviceService.isThereAPlayer()) {
      this.playerId = this.sessionserviceService.onGeItem(SESSION_CONSTANTS.PLAYERID);
    }
  }

  updateState(ingame: boolean) {
    this.ingame = !ingame;
  }
}
