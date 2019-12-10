import React from "react"

const OfficeDetails =({officeName,officeAddress})=> {
    return (
        <div className="officeDetails">
            <h1>{officeName}</h1>
            <p>{officeAddress}</p>
        </div>
        )
}

export default OfficeDetails;