import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];
  messagesTwo: string;
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }

  updateTwo(message: string){
    this.messagesTwo = message;
    console.log(this.messagesTwo);
  }
}
