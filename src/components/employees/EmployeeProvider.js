import React, {useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(setEmployees)
    }
    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }
    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }
    return (
        <EmployeeContext.Provider value = {{
            employees, getEmployees, addEmployee, getEmployeeById
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}