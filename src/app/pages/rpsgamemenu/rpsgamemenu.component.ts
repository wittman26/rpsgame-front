import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionserviceService } from 'src/app/services/sessionservice.service';
import { SESSION_CONSTANTS } from 'src/app/utils/session-constant';

@Component({
  selector: 'app-rpsgamemenu',
  templateUrl: './rpsgamemenu.component.html',
  styleUrls: ['./rpsgamemenu.component.css']
})
export class RpsgamemenuComponent implements OnInit {
  playerId: any;
  ingame: boolean = true;

  @Input()
  inGame: boolean = false;

  constructor (private sessionserviceService:SessionserviceService, private router: Router) {}
  ngOnInit(): void {
    if (SessionserviceService.isThereAPlayer()) {
      this.playerId = this.sessionserviceService.onGeItem(SESSION_CONSTANTS.PLAYERID);
    }
  }
  exitPlayer(){
    this.sessionserviceService.onRemoveItem(SESSION_CONSTANTS.PLAYERID);
    this.playerId = null;
    this.router.navigate(['enterid']);
  }   

}
