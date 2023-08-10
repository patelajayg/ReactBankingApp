import http from "./http-common";

class EmployeeService {
  GetSingleEmploye(data) {
    return http.post("/employee/login/", data);
  }

  GetSingleCustomer(data) {
    return http.post("/customer/login/", data);
  }


}


export default new EmployeeService();
