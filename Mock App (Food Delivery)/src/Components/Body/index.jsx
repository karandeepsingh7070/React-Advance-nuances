import React, { useState } from "react"
import { Restraunt } from "../Restraunts"
export const Body = () => {
    let listOfRestraunts = [
        {
            data : {
                id : "124654",
                name : "Dominos",
                cloudinaryImageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQvE-9Fpgf16Jd4f99zryEDMLUVxS6ffbYQ&usqp=CAU",
                cuinsines : ["North Indian", "Asian", "Lebanese"],
                costForTwo : 40000,
                deliveryTime : 36,
                avgRating  : "4.5"
            }
        },
        {
            data : {
                id : "284348",
                name : "KFC",
                cloudinaryImageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQvE-9Fpgf16Jd4f99zryEDMLUVxS6ffbYQ&usqp=CAU",
                cuinsines : ["North Indian", "Mediterranean", "Chinese"],
                costForTwo : 40000,
                deliveryTime : 36,
                avgRating  : "3.8"
            }
        },
    ]
    const [restroList,setRestroList] = useState(listOfRestraunts)
    const [isFiltered,setIsFiltered] = useState(false)
    return (
        <div>
            {/* <div className="search-wrapper">Search</div> */}
            <button style={isFiltered ? {backgroundColor : "#ffdcaf"} : {}} onClick={() => {
                if (!isFiltered) {
                    let filteredData = listOfRestraunts?.filter((item) => item?.data?.avgRating >= 4)
                    setRestroList(filteredData)
                    setIsFiltered((prev) => !prev)
                }else {
                    setRestroList(listOfRestraunts)
                    setIsFiltered((prev) => !prev)
                }
                }}>Top Rated</button>
            <div className="res-wrapper">
                {restroList?.map((restro) =>{
                    return <Restraunt isFiltered={isFiltered} key={restro?.data?.id} restro={restro} />
                })}
            </div>
        </div>)
}