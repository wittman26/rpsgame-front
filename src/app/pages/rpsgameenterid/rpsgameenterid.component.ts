import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionserviceService } from 'src/app/services/sessionservice.service';
import { SESSION_CONSTANTS } from 'src/app/utils/session-constant';

@Component({
  selector: 'app-rpsgameenterid',
  templateUrl: './rpsgameenterid.component.html'
})
export class RpsgameenteridComponent implements OnInit {

  public rsFormEnterId: FormGroup;

  /** The FormBuilder */
  public formBuilder: FormBuilder;

  constructor(private sessionserviceService: SessionserviceService,
    private router: Router) {
    this.formBuilder = new FormBuilder();
    this.rsFormEnterId = this.formBuilder.group({
      playerid: [null, Validators.required]
    });    
   }

  ngOnInit(): void {

  }

  enteringId() {
    this.sessionserviceService.onSetItem(SESSION_CONSTANTS.PLAYERID,this.rsFormEnterId.value.playerid);
    this.router.navigate(['/']);
  }
}
