import React from 'react';

const Inbox = ({ emails }) => (

    <div>
        <ul>
        <i>From: {emails.sender}</i><br></br>
        <i>Subject: {emails.subject} </i><br></br>
        <i>To: {emails.sender}</i><br></br>
        <i>{emails.date}</i>
        <p>{emails.message}</p>
        </ul>
    </div>
)

export default Inbox