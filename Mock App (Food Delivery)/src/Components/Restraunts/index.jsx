import React from "react"
export const Restraunt = ({restro, isFiltered}) => {
    let {name, cloudinaryImageId,cuinsines, costForTwo, avgRating} = restro?.data
    return (<div className="res-card" style={isFiltered ? {backgroundColor : "#ffdcaf"} : {}}>
        <div className="res-img">
            <img src={cloudinaryImageId} />
        </div>
        <div className="res-metadata">
            <h2>{name}</h2>
            <h5>{cuinsines.join(", ")}</h5>
            <p>{avgRating}</p>
        </div>
    </div>)
}