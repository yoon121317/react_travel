import React from "react";
import festival from "../json/festival.json"

function Apitest() {
    console.log("festival ", typeof festival)
    console.log(festival)

    const newArrayData = festival.map((index, fields) => {
        return (
            <p key={index}>
                {fields.id}({fields}) from {fields.축제명}
            </p>
        )
    })

    return (
        <div>
            <p>{festival}</p>
        </div>
    )
}

export default Apitest