import {Message} from './message.model';

export class MessageService{
   private messages: Message[] = [];  //central messages array, use to store and manage all message on front the front end

    addMessage(message: Message){
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}