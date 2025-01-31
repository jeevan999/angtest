import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { WorkserviceService } from './services/workservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  newState: any;
  currentState: string = '';
  constructor(private router: Router, private stateService: WorkserviceService) {}
  ngOnInit(): void {
    // Subscribe to the state observable
    this.stateService.userState$.subscribe((state) => {
      this.currentState = state;
    });
  }
  title = 'angtest';
  goTo(path: string) {
    this.router.navigate([path]);
  }

  updateState(): void {
    this.stateService.setUserState(this.newState);
    this.newState = ''; // Clear the input
  }
}
