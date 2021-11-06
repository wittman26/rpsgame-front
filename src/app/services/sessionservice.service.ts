import { Injectable } from '@angular/core';
import { SESSION_CONSTANTS } from '../utils/session-constant';

@Injectable({
  providedIn: 'root'
})
export class SessionserviceService {

  constructor() { }

  onSetItem(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }

  onGeItem(key: string) {
    return sessionStorage.getItem(key);
  }

  onRemoveItem(key: string) {
    sessionStorage.removeItem(key);
  }

  static isThereAPlayer() {
    const playerId = sessionStorage.getItem(SESSION_CONSTANTS.PLAYERID);
    return playerId != null;
  }
}
