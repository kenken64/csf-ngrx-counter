import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  private store  = inject(Store);
  count$?: Observable<number>;

  constructor() {
    this.count$ = this.store.select('counter');
  }

  increment() {
    console.log('increment');
    this.store.dispatch(increment());
    console.log('incremented' + this.count$);
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
