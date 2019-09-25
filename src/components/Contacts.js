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

    deleteContact = (id) => {
        const { contacts } = this.state
        const newContacts = contacts.filter(contact =>
            contact.id !== id
        )
        this.setState({
            contacts: newContacts
        })
    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {
                    contacts.map(contact =>
                       <Contact
                            key={contact.id}
                            contact={contact}
                            deleteClickHandler={this.deleteContact}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}

export default Contacts;
