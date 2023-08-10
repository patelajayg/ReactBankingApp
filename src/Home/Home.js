import React from 'react'
import {messageService,userservice} from '../messageService'

export default function Home() {
    const sendMessage = () => {
        // send message to subscribers via observable subject
        messageService.sendMessage('Message from Home Page Component to App Component!');
        console.log('msg fired..!')
    }

    const SaveUser =() => {
      console.log('save user')
      userservice.sendUser("Ajay G Patel")
    }

    const clearMessages= () => {
        // clear messages
        messageService.clearMessages();
        //userservice.clearMessages();
        
    }
    const clearUser= () => {
      // clear messages
      userservice.clearMessages1();
      //userservice.clearMessages();
      
  }
  return (
    <div>
      <div className='row' >hi i am Home. </div>
      <button className='btn btn-primary' onClick={sendMessage}>Send Message</button>
      <button className='btn btn-primary' onClick={clearMessages}>Clear Message</button>
      <button className='btn btn-primary' onClick={SaveUser}>SaveUser</button>
      <button className='btn btn-primary' onClick={clearUser}>ClarUser</button>
      
    </div>
  )
}
