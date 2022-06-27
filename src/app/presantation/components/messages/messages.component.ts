import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MessagesStoreService } from 'src/app/states/messages-store.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  errors$: Observable<string[]>;
  warns$: Observable<string[]>;
  messages$: Observable<string[]>;

  isShowErrors = false;
  isShowWarns = false;
  isShowMessages = false;

  constructor(public messageService: MessagesStoreService) {
    this.errors$ = this.messageService.errors$.pipe(tap(() => this.isShowErrors = true));
    this.warns$ = this.messageService.warns$.pipe(tap(() => this.isShowWarns = true));;
    this.messages$ = this.messageService.messages$.pipe(tap(() => this.isShowMessages = true));;
  }

  ngOnInit(): void {
  }

  onClose(type: 'error' | 'warn' | 'message') {
    if (type === 'error') this.isShowErrors = false;
    if (type === 'warn') this.isShowWarns = false;
    if (type === 'message') this.isShowMessages = false;
  }
}
