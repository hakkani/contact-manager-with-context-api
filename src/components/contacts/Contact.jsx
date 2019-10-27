import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Contact.scss";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body my-3">
              <h5 className="display-6 d-flex m-0">
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down cursor-pointer"
                ></i>
                <div className="ml-auto">
                  <Link to={`contact/edit/${id}`}>
                    <i className="fas fa-pencil-alt mr-3"></i>
                  </Link>
                  <i
                    className="fas fa-times text-danger cursor-pointer"
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>
                </div>
              </h5>
              {this.state.showContactInfo ? (
                <ul className="list-group mt-2">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
