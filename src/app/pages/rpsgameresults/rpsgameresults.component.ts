import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsserviceService } from 'src/app/services/rpsservice.service';
import { SessionserviceService } from 'src/app/services/sessionservice.service';
import { SESSION_CONSTANTS } from 'src/app/utils/session-constant';

@Component({
  selector: 'app-rpsgameresults',
  templateUrl: './rpsgameresults.component.html',
  styleUrls: ['./rpsgameresults.component.css']
})
export class RpsgameresultsComponent implements OnInit {
  playerId: any = null;
  playerResults: any = {
    "totalRoundsPlayed": 0,
    "totalWins": 0,
    "totalLoses": 0,
    "totalDraws": 0,    
  };

  constructor(private rpsserviceService: RpsserviceService,
    private sessionserviceService:SessionserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.playerId = this.sessionserviceService.onGeItem(SESSION_CONSTANTS.PLAYERID);
    this.getResults(); 
  }

  getResults() {
    this.rpsserviceService.getParam('', this.playerId).subscribe(
      (response: any) => {
        this.playerResults = response;
      },
      (error: any) => {
        console.error('Error in', '', 'json=', this.playerId, 'Error: ', error);
      }
    )
  }  

}
