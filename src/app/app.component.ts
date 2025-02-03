import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { WorkserviceService } from './services/workservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  newState: any;
  currentState: string = '';
  name: string = ''
  documenting: number[] = [2, 3, 4, 5, 6];
  constructor(private router: Router, private stateService: WorkserviceService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
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

  handleClicking(): void {
    alert('to the enter')
  }
}
