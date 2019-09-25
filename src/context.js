import React, { Component } from 'react'

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload
                )
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state

    }

}

export class Provider extends Component {

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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
