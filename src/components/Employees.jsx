import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee"

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    function getAllEmployees() {
        axios.get("https://statenweb.mockable.io/employees").then(function(response) {
            setEmployees(response.data);
        });
    }

    useEffect(function(){
        getAllEmployees();
    },[]);

    if(selectedEmployee) {
        return (
            <div>
                <Employee selectedEmployee = {selectedEmployee} />
                <p className="text-center mt-3 fw-bold"><button type="submit" class="btn btn-primary button" onClick={() => setSelectedEmployee(null)}>Go back</button></p>
                <footer class="text-dark text-center mt-2 fs-4">
                Copyright &copy; 2021 My Website
            </footer>
            </div>
        );
    }

    if(employees.length === 0) {
        return <h3 className="text-center">EmployeeLoading....</h3>
    }

    return (
        <div>
            <h1 className = "text-primary col-12 text-center text-font text-color"><i>Employee List</i></h1>
            {employees.map(function(employee) {
                return (
                    <p key={employee.id}>
                        <li>
                            <button className = "btn btn-outline-dark bg-info" onClick={() => setSelectedEmployee(employee.id)}>
                                {employee.name} - {employee.department}
                            </button>
                        </li>
                    </p>
                );
            })}

            <footer class="text-dark text-center mt-2 fs-4">
                Copyright &copy; 2021 My Website
            </footer>
        </div>
    )
}

export default Employees;