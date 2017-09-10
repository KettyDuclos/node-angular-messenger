import {Component} from '@angular/core';
import {Message} from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
        <app-message [message]="message"
        (editClicked)="message.content = $event"
        *ngFor="let message of messages"></app-message> 
        </div>
    `
})


export class MessageListComponent{
    messages: Message[] = [
        new Message('Some Message 1','Ketty'),
        new Message('Some Message 2','Ketty'),
        new Message('Some Message 3','Ketty')
    ]
}