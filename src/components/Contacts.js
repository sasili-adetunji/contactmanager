import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                name: 'John Doe',
                phone: '08037817325',
                email: 'jdoe@gmail.com',
                id: 1
            },
            {
                name: 'Karen Smith',
                phone: '090888272662',
                email: 'ksmith@gmail.com',
                id: 2
            },
            {
                name: 'Sasil Adetunji',
                phone: '777276e937364',
                email: 'sas@gmail.com',
                id: 3
            }
        ]
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {
                    contacts.map(contact =>
                       <Contact
                            key={contact.id}
                            contact={contact}
                        />
                    )
                }
            </div>
        )
    }
}

export default Contacts;
