import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()
    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <>
        <button onClick={() => {history.push("/employees/create")}}>
        New Employee
    </button>
        <div className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee}/>
                })
            }
        </div>
        </>
    )
}