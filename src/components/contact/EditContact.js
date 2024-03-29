import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios'

class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        })
    }

    onSubmit = async (dispatch, e) => {
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
        const { id } = this.props.match.params;
        const updateContact = {
            name, email, phone
        }
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
        dispatch({type: 'UPDATE_CONTACT', payload: res.data})

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
                                Edit Contact
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
                                        value="Update Contact"
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

export default  EditContact;
