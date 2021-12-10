import React, { useEffect, useState } from "react";
import axios from "axios";

function Employee({selectedEmployee}) {
    const[selectedEmployeeData, setSelectedEmployee] = useState(null);

    useEffect(function (){
        axios
            .get(`https://statenweb.mockable.io/employee/${selectedEmployee}`)
            .then(function(response) {
                setSelectedEmployee(response.data);
            })
    }, [selectedEmployee]);

    if(!selectedEmployeeData){
       return <h3 className="text-center">EmployeeLoading....</h3>
    }

    const{
        id,
        name,
        startDate,
        role,
        department,
        photo
    } = selectedEmployeeData;

    return (
        <div className="shadow text-center">
            <h1 className = "text-primary col-12 text-center text-font text-color mb-3"><i>Employee List</i></h1>
            <div className="card border-0 bg-light">
                <img
                    className="center"
                    style={{maxHeight: "800px"}}
                    src={photo}
                    alt={name}
                />
                <ul class="list-group list-group-flush fw-bold fst-italic">
                    <li class="list-group-item bg-danger">ID: {id}</li>
                    <li class="list-group-item bg-primary">Name: {name}</li>
                    <li class="list-group-item bg-secondary">Department: {department}</li>
                    <li class="list-group-item bg-info">Role: {role}</li>
                    <li class="list-group-item bg-success">Start Date: {startDate}</li>
                </ul>
            </div>
        </div>    
    );
}

export default Employee;