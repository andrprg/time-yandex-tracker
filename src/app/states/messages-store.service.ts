import { Store } from './store';
import { Injectable } from '@angular/core';
import { MessagesState } from './messages-state';

@Injectable({
  providedIn: 'root'
})
export class MessagesStoreService extends Store<MessagesState> {

  constructor() { 
    super(new MessagesState());
  }

  showErrors(...errors: string[]) {
    const newState = this.state.errors = errors;
  }

  showsWarns(...warns: string[]) {
    const newState = this.state.warns = warns;
  }

  showMessages(...messages: string[]) {
    const newState = this.state.messages = messages;
  }
}
