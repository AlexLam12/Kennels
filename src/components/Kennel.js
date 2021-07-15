import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css"

export const Kennel = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("kennel_customer")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
// import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { EmployeeCard } from "./employees/EmployeeCard"
// import { LocationCard } from "./locations/LocationCard"
// import { CustomerCard } from "./customers/CustomerCard"
// import { PropsAndState } from "./PropsAndState"
// import "./animal/Animal.css"

// //Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <PropsAndState yourName="Brenda" />
//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeCard />
//             <EmployeeCard />
//             <EmployeeCard />
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//             <LocationCard />
//             <LocationCard />
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//         </article>

//     </>
// )