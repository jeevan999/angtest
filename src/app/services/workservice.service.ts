import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkserviceService {
  private userState = new BehaviorSubject<string>('Guest');
  userState$=this.userState.asObservable();
  constructor() { }


  setUserState(newState: string): void {
    this.userState.next(newState);
  }

  // Method to get the current state
  getCurrentUserState(): string {
    return this.userState.value;
  }

  
}
