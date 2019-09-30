import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";
import axios from 'axios'

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state

        if (name === '') {
            this.setState({errors: { name: 'Name is required'}
            })
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'Email is required'}
            })
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Email is required'}
            })
            return;
        }
        const newContact = {
            phone,
            email,
            name,
        }
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        .then(res => dispatch({type: 'ADD_CONTACT', payload: res.data}))
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/')


    }

    render() {
        const {name, email, phone, errors } = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div>
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        placeholder="Enter name..."
                                        value={name}
                                        onChange={this.onChange}
                                        name="name"
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        type="email"
                                        placeholder="Enter email..."
                                        value={email}
                                        onChange={this.onChange}
                                        name="email"
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        type="text"
                                        placeholder="Enter phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        name="phone"
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-block btn-light"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    )
            }}
            </Consumer>
        )
    }
}

export default  AddContact;
