import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
//import { messageService, userservice } from "./messageService";
import Header from "./Home/Header";
import EmployeeLogin from "./Employee/EmployeeLogin";
import { userservice } from "./messageService"
import BranchList from "./Branch/BranchList";
import Protected from "./Common/Protected";
import Transaction_Master from "./Customer/Transaction_Master";
import Customer_List from "./Customer/Customer_List";
import "react-datepicker/dist/react-datepicker.css"
import Account_Master_Parent from "./Customer/Account_Master_Parent";
import EmployeeList from "./Employee/EmployeeList";
import CustomerLogin from "./Employee/CustomerLogin";

//import { BrowserRouter as Router, Route } from 'react-router-dom';

//function App() {
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      user: "",
      LoginAsCustomer : false
    }; 
  
  }
  
  componentDidMount() {
  //   // subscribe to home component messages
  //   this.subscription = messageService.getMessage().subscribe((message) => {
  //     if (message) {
  //       // add message to local state if not empty
  //       this.setState({ messages: [...this.state.messages, message] });
  //     } else {
  //       // clear messages when empty message received
  //       this.setState({ messages: [] });
  //     }
  //   });
    this.subscription5 = userservice.getMessage().subscribe((message) => {
      //console.log("message=", message.text);
      if (message) {

        console.log('msg=',message.text)
        // add message to local state if not empty
        this.setState({ user: message.text });
        
      } else {
        // clear messages when empty message received
        this.setState({ user: "" });
      }
    });


   
    
  }

  


  // componentWillUnmount() {
  //   // unsubscribe to ensure no memory leaks
  //   this.subscription.unsubscribe();
  //   this.subscription1.unsubscribe();
  //   //this.userservice.unsubscribe();
  // }

  render() {
    // const { messages } = this.state;
    // const { user } = this.state;
    // console.log(user);
    return (
      <>
      <div>
        <Header />
        <div id="Main" className="container-fluid">
        <Routes>
              <Route path="/" element={<Protected Component={BranchList} Group="Admin" />} />
              <Route path="/branchlist" element={<Protected Component={BranchList} Group="Admin"  />} />
              <Route path="/customer" element={<Protected Component={Customer_List} Group="Admin" />} />
              <Route path="/accountmaster" element={<Protected Component={Account_Master_Parent} Group="Admin" />} />
              <Route path="/transactionmaster" element={<Protected Component={Transaction_Master} Group="Admin" />} />
              <Route path="/employeelist" element={<Protected Component={EmployeeList} Group="Admin" />} />
              <Route path="/employeelogin" element={<EmployeeLogin />} />
              <Route path="/customerlogin" element={<CustomerLogin />} />
            </Routes>
        </div>
      </div>
      </>
    );
  }
}

export default App;
