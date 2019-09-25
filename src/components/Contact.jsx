import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onDeleteClick = (id, e) => {
        this.props.deleteClickHandler(id)
    }
    render() {
        const {name, email, phone, id} = this.props.contact
        const { showContactInfo } = this.state
        return (
            <div className="card card-body mb-3">
                <h4>{name}{' '}
                <i
                    onClick={() =>
                        this.setState({
                            showContactInfo: !this.state.showContactInfo})
                    }
                    className="fas fa-sort-down"
                    style={{cursor: 'pointer'}}
                />
                <i
                    onClick={this.onDeleteClick.bind(this, id)}
                    className="fas fa-times"
                    style={{cursor: 'pointer', color:'red', float: 'right'}}
                />
                </h4>
                { showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : ''}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;

