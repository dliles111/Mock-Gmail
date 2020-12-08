import React from 'react';

const Inbox = ({ emails }) => (

    <div>
        <h5>{emails.recipient}</h5>
        <h5>{emails.sender}</h5>
        <h6>{emails.date}</h6>
        <p>{emails.subject} </p>
        <p>{emails.message}</p>
    </div>
)

export default Inbox