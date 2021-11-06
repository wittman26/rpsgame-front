import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsserviceService } from 'src/app/services/rpsservice.service';
import { SessionserviceService } from 'src/app/services/sessionservice.service';
import { SESSION_CONSTANTS } from 'src/app/utils/session-constant';

@Component({
  selector: 'app-rpsgameview',
  templateUrl: './rpsgameview.component.html',
  styleUrls: ['./rpsgameview.component.css']
})
export class RpsgameviewComponent implements OnInit {

  listaResultados: any = [];
  roundsplayed: number = 0;
  playerId: any;

  constructor(private rpsserviceService: RpsserviceService,
    private sessionserviceService: SessionserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.playerId = this.sessionserviceService.onGeItem(SESSION_CONSTANTS.PLAYERID);
    this.getList();

  }

  exitPlayer() {
    this.sessionserviceService.onRemoveItem(SESSION_CONSTANTS.PLAYERID);
    this.playerId = null;
    this.router.navigate(['enterid']);
  }

  getList() {
    this.rpsserviceService.getParam('', this.playerId).subscribe(
      (response: any) => {
        this.listaResultados = response.roundGameList;
        this.roundsplayed = this.listaResultados.length;
      },
      (error: any) => {
        console.error('Error in', '', 'json=', this.playerId, 'Error: ', error);
      }
    )
  }

  playRound() {
    this.rpsserviceService.post('',{"id" : this.playerId }).subscribe(
        (response: any) => {
          if (response != null && response.roundGameList != null) {
            this.listaResultados = response.roundGameList;
            this.roundsplayed = this.listaResultados.length;
          }
        },
        (error: any) => {
          console.error('Error in', '', 'json=', this.playerId, 'Error: ', error);
        }
      );
  }

  restartGame() {
    this.rpsserviceService.patch('', {"id" : this.playerId }).subscribe(
        (response: any) => {
          if (response != null && response.roundGameList != null) {
            this.listaResultados = response.roundGameList;
            this.roundsplayed = 0;
          }
        },
        (error: any) => {
          console.error('Error in', '', 'json=', this.playerId, 'Error: ', error);
        }
      );
  }

  getLabelChoice(choice: string) {
    switch (choice) {
      case 'S':
        return 'Scissors';
        break;
      case 'R':
        return 'Rock';
        break;
      default:
        return 'Paper';
        break;
    }
  }

  getLabelResult(result: string) {
    switch (result) {
      case 'WIN':
        return 'Player 1 Wins';
        break;
      case 'LOSE':
        return 'Player 2 Wins';
        break;
      default:
        return 'Draw';
        break;
    }    
  }

}
