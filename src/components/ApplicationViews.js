import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationForm } from "./locations/LocationForm"
import { LocationDetail } from "./locations/LocationDetail"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
                
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>


            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
		            <AnimalDetail />
	            </Route>
            </AnimalProvider>
            

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>

                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/employees/create">
                            <EmployeeForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <Route exact path="/employees/detail/:employeeId(\d+)">
		            <EmployeeDetail />
	            </Route>
            </EmployeeProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                    <EmployeeProvider>
                        <Route exact path="/locations/create">
                            <LocationForm />
                        </Route>
                    </EmployeeProvider>
            </LocationProvider>

            <LocationProvider>
                <Route exact path="/locations/detail/:locationId(\d+)">
		            <LocationDetail />
	            </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}