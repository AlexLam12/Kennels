import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})
    // const [animal, setAnimal] = useState({})
    // const [employee, setEmployee] = useState({})

	const {locationId} = useParams();
    

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
  }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <div className="location__location">Employees: 
      {/* {
      location.map(employee => {
          return employee.name
      }).join("")
      } */}
      </div>
      <div className="location__owner">Current Residents: 
      {/* {
      location.map(animal => {
          return  animal.name
      }).join("")
      } */}
      </div>
    </section>
  )
}