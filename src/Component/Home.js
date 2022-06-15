import React from "react";
export default class Frompage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      Data: [],
    };
  }

  handleChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  handleSubmit=(event)=>{
    event.preventDefault();
    var items=this.state.Data
    items.push({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    });
    console.log("234",items);
    this.setState({
      Data: items,
      name: "",
      email: "",
      phone: "",
    });
  
  }
  render() {
    return (
      <div className="Frompage">
        <h1>Hello</h1>
        <div className="child-div">
          <h2 style={{ textAlign: "center" }}>Registration Form </h2>
          <from>
           <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChangeValue}
                placeholder="User First Name"
              />
            <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleChangeValue}
                placeholder="Your email id.."
              />
           <input
                type="text"
                placeholder="Enter Contact No."
                value={this.state.phone}
                name="phone"
                onChange={this.handleChangeValue}
              />
             <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
          </from>
        </div>
      </div>
    );
  }
}

