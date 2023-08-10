import http from "./http-common";

class BranchService {

  create(data) {
    return http.post("/branch/branch", data);
  }

  createEmployee(data) {
    return http.post("/employee/save", data);
  }


  GetBranches() {
    return http.get("/branch/branch");
  }

  GetEmployee() {
    return http.get("/employee/employee");
  }

  GetBranches1() {
    http
      .get("/branch/branch")
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
export default new BranchService();