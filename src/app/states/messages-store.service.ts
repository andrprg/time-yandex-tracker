import { Store } from './store';
import { Injectable } from '@angular/core';
import { MessagesState } from './messages-state';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesStoreService extends Store<MessagesState> {
  errors$: Observable<string[]>;
  warns$: Observable<string[]>;
  messages$: Observable<string[]>;

  constructor() {
    super(new MessagesState());

    this.errors$ = this.state$.pipe(
      map((data) => data.errors),
      filter((message) => message && message.length > 0)
    );

    this.warns$ = this.state$.pipe(
      map((data) => data.warns),
      filter((message) => message && message.length > 0)
    );

    this.messages$ = this.state$.pipe(
      map((data) => data.messages),
      filter((message) => message && message.length > 0)
    );
  }

  showErrors(...errors: string[]) {
    const newstate = { ...this.state, errors };
    this.setState(newstate);
  }

  showsWarns(...warns: string[]) {
    const newstate = { ...this.state, warns };
    this.setState(newstate);
  }

  showMessages(...messages: string[]) {
    const newstate = { ...this.state, messages };
    this.setState(newstate);
  }
}
