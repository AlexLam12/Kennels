import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()
    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <>
        <button onClick={() => {history.push("/locations/create")}}>
        New Location
    </button>
        <div className="locations">
            {console.log("LocationList: Render", locations)}
            {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location}/>
                })
            }
        </div>
        </>
    )
}