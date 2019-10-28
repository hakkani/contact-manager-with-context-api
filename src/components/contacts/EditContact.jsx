import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // check errors
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: { phone: "Phone is required" }
      });
      return;
    }

    const { id } = this.props.match.params;
    const updContact = {
      name,
      email,
      phone
    };

    // UPDATE CONTACT //

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // Redirect
    this.props.history.push("/");
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div>
        <div className="card my-3">
          <div className="card-header header-title">
            <i className="fas fa-pencil-alt"></i> Edit Contact
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Eneter Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />

              <TextInputGroup
                label="Email"
                type="email"
                name="email"
                placeholder="Eneter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />

              <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Eneter Phone"
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              />
              <input
                type="submit"
                value="EDIT CONTACT"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;
