import React from 'react'
import { Component } from 'react'
import Inbox from './components/Inbox'


class App extends Component {
        state = {
            emails: []     
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/emails')
        const data = await response.json()
        this.setState({emails: data})
      }
      
//     addEmail = async () => {
//         const sender = document.getElementById('to-input').value
//         const recipient = document.getElementById('recipient-input').value
//         const subject = document.getElementById('subject-input').value
//         const message = document.getElementById('message-input').value
//         const email = {'sender': sender, 'recipient': recipient, 'subject': subject, 'message': message}
//         const response = await fetch('http://localhost:3001/emails', {
//             method: 'POST',
//             body: JSON.stringify(email),
//             headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     }) 
//     const newEmail = await response.json()
//     this.setState({emails: [...this.state.emails, newEmail]})
// }


    render () {
        return (
            <div className='App'>
                <div className='emailclient'>
                    <div className='inbox'>
                        <h5>Gmail Email Server</h5>
                        <label>To:<input id='to-input' type="text"></input></label>
                        <label>Cc:<input id='cc-input' type="text"></input></label>
                        <label>Subject:<input id='subject-input' type="text"></input></label>
                        <label>Message:<input id='message-input' type="text"></input></label>
                        <button>Send</button>
                        {/* <button onClick={() => this.addEmail()}>Send</button> */}
                    
                    </div> 
                </div>
            <div className='emails'>
                <h4>Inbox</h4>
                {this.state.emails.map(emails => <Inbox emails = {emails}/>)}
                <h3>Sent</h3>


            </div>
            
            </div>
        ) 
    }


}

export default App