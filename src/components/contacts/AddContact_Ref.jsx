import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Hakkani",
    email: "hakkani@gmail.com",
    phone: "777-777-7777"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">
            <h6 className="display-4">
              <i className="fas fa-plus-circle"></i> Add Contact
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Name..."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email..."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Enter Phone..."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
