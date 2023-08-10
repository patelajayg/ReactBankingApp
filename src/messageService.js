import { Subject } from 'rxjs';
const subject = new Subject();
const user = new Subject();
export const messageService = {
    sendMessage: message => 
    subject.next({ 
        text: message 
    }),
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable()
};

export const userservice = {
    sendUser: user1 => 
    user.next({ 
        text: user1
        //text : localStorage.getItem("user")  
    },  
    ),
    clearMessages1: () => user.next(),
    getMessage: () => user.asObservable()
};

