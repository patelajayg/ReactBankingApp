import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
import { userservice } from "../messageService";

export default class EmployeeLogin extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserid = this.onChangeUserid.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
    
    this.state = {
      userid: "1763",
      password: "test",
      submitted: false,
    };
  }

  onChangeUserid(e) {
    this.setState({
      userid: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  SubmitForm() {
    var data = {
      userid: this.state.userid,
      password: this.state.password,
    };

    EmployeeService.GetSingleEmploye(data)
      .then((response) => {
        this.setState({
          userid: response.data.userid,
          password: response.data.password,
          submitted: true,
          isLogin: true,
          name : response.data.name
        });
        localStorage.setItem("token", true);
        localStorage.setItem("emp_user", response.data.userid);
        localStorage.setItem("emp_name", response.data.name);
        localStorage.setItem("emp_branchid", response.data.branchid);
        userservice.sendUser(JSON.parse(data.userid));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div id="Login" className="container col-sm-3 my-3">
        {this.state.submitted ? (
          <div>
            <h4>Welcome {this.state.name} </h4>
          </div>
        ) : (
          <div className="">
            <div className="form-group">
              <label htmlFor="title">Employee Id</label>
              <input
                type="text"
                className="form-control"
                id="userid"
                required
                value={this.state.userid}
                onChange={this.onChangeUserid}
                name="userid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.SubmitForm} className="btn btn-dark my-2">
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}
