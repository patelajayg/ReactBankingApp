import React from "react";
import { Link } from "react-router-dom";
import { userservice } from "../messageService";

//export default function Header(props) {
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: "",
    };
  }
  Lought = () => {
    
    const tk = localStorage.getItem("token");
    if (tk) {
      //console.log(tk);
      this.setState({ user: null });
      localStorage.removeItem("token");
      
      localStorage.removeItem("emp_user");
      localStorage.removeItem("emp_name");
      localStorage.removeItem("emp_branchid");

      localStorage.removeItem("cust_user");
      localStorage.removeItem("cust_name");
      localStorage.removeItem("cust_branchid");
      localStorage.removeItem("Login_as_Customer");
    } 
  };
  componentDidMount() {
    const tk = localStorage.getItem("emp_user");
    if (tk) {
      console.log(tk);
      this.setState({ user: tk });
    }
    this.subscription1 = userservice.getMessage().subscribe((message) => {
      if (message) {
        this.setState({ user: message.text });
      } else {
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/employeelogin"} className="navbar-brand">
            Demo Bank
          </Link>
          <div className="navbar-nav mr-auto">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link to={"/employeelogin"} className="nav-link">
                    Employee Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/customerlogin"} className="nav-link">
                    Customer Login
                  </Link>
                </li>


              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to={"/branchlist"} className="nav-link">
                    Branch
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/employeelist"} className="nav-link">
                    Employee
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/customer"} className="nav-link">
                    Customer
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/accountmaster"} className="nav-link">
                    Account
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/transactionmaster"} className="nav-link">
                    Transaction
                  </Link>
                </li>

                <li className="nav-item">
                  <Link onClick={() => this.Lought()} className="nav-link">
                    Lought {user}
                  </Link>
                </li>
              </>

              // <div className="nav-link"> Welcome : {user}

              // </div>
            )}

            {/* <li className="nav-item">
                  <Link to={"/NewEmployeeLogin"} className="nav-link">
                    New Employee Login
                  </Link>
                </li> */}
          </div>
        </nav>
      </>
    );
  }
}
