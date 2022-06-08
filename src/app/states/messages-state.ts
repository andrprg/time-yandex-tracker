export class MessagesState {
  errors: string[];
  warns: string[];
  messages: string[];

  constructor(errors = [], warns = [], messages = []) {
    this.errors = errors;
    this.warns = warns;
    this.messages = messages;
  }
}
