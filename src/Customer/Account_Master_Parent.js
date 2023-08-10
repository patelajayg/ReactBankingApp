import React, { useState } from "react";
import Account_Mater from "./Account_Master";
import CustomerService from "../Services/CustomerService";

const Account_Master_Parent = () => {
  const [mode, setMode] = useState("");
  const [submodulevisible, setSubmodulevisible] = useState(false);
  const [disableid, setDisableid] = useState(true);
  const [customerid, setCustomerid] = useState("");
  const [custobj, setCustobj] = useState("");

  const Mode = (Mode_Type) => {
    setMode(Mode_Type);
    if (Mode_Type === "Add") {
      setSubmodulevisible(true);
      setDisableid(true);
    } else {
      setSubmodulevisible(false);
      setDisableid(false);
    }
  };

  const getAcno = () => {
    const Obj = {
      accountno: "",
      accountclosedate: "",
      accountopendate: "",
      accountstatus: "",
      balance: "",
      branchid: "",
      closedbyuser: "",
      customerid: "",
      name : "",
      modeofoperation: "",
      openbyuser: "",
      productid: "",
    };

    CustomerService.GetSingleAccount(customerid)
      .then((response) => {
        setCustobj(response.data);
        //var date = Date.parse(response.data.dob);
        //response.data.dob = date;
        setCustobj(response.data);
        //console.log('parent=',response.data)
        setSubmodulevisible(true);
        if(response.data.accountno=== undefined)
        {
          setCustobj(Obj);  
        }
      })
      .catch((e) => {
        setCustobj(Obj);
      });
  };

  const onChangeCustomerId = (e) => {
    setCustomerid(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="row col-sm-2">
          <div className="form-row">
            <select
              onChange={(e) => Mode(e.target.value)}
              className="form-select my-2"
              aria-label="Default select example"
            >
              <option selected>select item</option>
              <option value="Add">Add</option>
              <option value="Edit">Edit</option>
              <option value="View">View</option>
            </select>

            {!disableid ? (
              <input
                type="text"
                className="form-control"
                readOnly={disableid}
                id="customerid"
                required
                value={customerid}
                onChange={onChangeCustomerId}
                name="customerid"
                placeholder="Customer id"
              />
            ) : (
              <div></div>
            )}

            {!disableid ? (
              <button
                type="button"
                onClick={() => getAcno()}
                className="btn btn-secondary my-1"
              >
                Get
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="row col-sm-10">
          {submodulevisible ? (
            <Account_Mater Mode={mode} obj={custobj} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Account_Master_Parent;
