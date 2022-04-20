import React from "react";
import "./From.css";
import Button from "react-bootstrap/Button";

export default class Frompage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      user: [],
    };

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }
  handleChangeValue(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    var Data = JSON.parse(localStorage.getItem("user"));
    if (Data) {
      this.setState({
        user: Data,
      });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var items = JSON.parse(localStorage.getItem("user"));
    items = items ? items : [];
    items.push({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    });
    localStorage.setItem("user", JSON.stringify(items));
    this.setState({
      user: items,
      name: "",
      email: "",
      phone: "",
    });
  };
  handleDelete = (id) => {
    var Data = JSON.parse(localStorage.getItem("user"));
    if (window.confirm("Are you sure you want to delete?")) {
      Data.splice(id, 1);
      localStorage.setItem("user", JSON.stringify(Data));
      this.setState({
        user: Data,
      });
    }
  };

  handleEdit = (id) => {
    var Data = JSON.parse(localStorage.getItem("user"));
    var obj = Data[id];
    this.setState({
      id: id,
      name: obj.name,
      email: obj.email,
      phone: obj.phone,
    });
  };
  handleSave = (id) => {
    var items = JSON.parse(localStorage.getItem("user"));
    if (id) {
      items.splice(id, 1, {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      });
      localStorage.setItem("user", JSON.stringify(items));
      this.setState({
        user: items,
        name: "",
        email: "",
        phone: "",
        id: ""
      });
    }
  };
  // handleCancel = (id) => {

  //   var items = JSON.parse(localStorage.getItem("user"));
  //   var data=items[id]
  //   this.setState({
  //   // name:'',
  //   // email:'',
  //   // phone:''
  //   });
  // };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
         <Button variant="primary">Save</Button>
        <h2 style={{ textAlign: "center" }}>Registration Form </h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChangeValue}
                placeholder="User First Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email Id</label>
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleChangeValue}
                placeholder="Your email id.."
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                placeholder="Enter Contact No."
                value={this.state.phone}
                name="phone"
                onChange={this.handleChangeValue}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <h1>Table</h1>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.user.map((data, id) => {
                return (
                  <tr key={id}>
                    {this.state.id === id ? (
                      <td>
                        <input
                          type="text"
                          value={this.state.name}
                          name="name"
                          onChange={this.handleChangeValue}
                        />
                      </td>
                    ) : (
                      <td>{data.name}</td>
                    )}
                    {this.state.id === id ? (
                      <td>
                        <input
                          type="text"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleChangeValue}
                        />
                      </td>
                    ) : (
                      <td>{data.email}</td>
                    )}
                    {this.state.id === id ? (
                      <td>
                        <input
                          type="text"
                          value={this.state.phone}
                          name="phone"
                          onChange={this.handleChangeValue}
                        />
                      </td>
                    ) : (
                      <td>{data.phone}</td>
                    )}
                    {this.state.id === id ? (
                      <td>
                        <button onClick={() => this.handleSave(id)}>
                          Save
                        </button>

                        <button onClick={() => this.handleCancel(id)} >
                          cancel
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button onClick={() => this.handleDelete(id)}>
                          Delete
                        </button>
                        <button onClick={() => this.handleEdit(id)}>
                          Edit
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}