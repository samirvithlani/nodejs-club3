var fs = require("fs");

var employee =[]
function readData(){

    let emp = fs.readFileSync("employee.json"); //string
    employee = JSON.parse(emp); //object
    


}


function searchData(name){

        readData();

        employee = employee.filter((emp)=>{
            return emp.name == name
        })

        return employee;
}

module.exports = {searchData}