import { useState } from "react"
import Button from "../../Elements/Button/Button"

export default function ChildInformationTableContent({data}){

    // Check if data is undefined or does not have childData property
    if (!data ) {
        return null; // Render nothing if data is not available
    }

    return(
        <>
            <thead>
                <tr className="text-md text-left">
                    <th className="p-4">No</th>
                    <th className="p-4">ChildId</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Birthday</th>
                    <th className="p-4">Etnic</th>
                    <th className="p-4">Time</th>
                    <th className="p-4">TesterRole</th>
                    <th className="p-4">Option</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    data.map((currData, index) => {
                        return (
                            <tr className="text-md text-left" key={index}>
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">{currData.id}</td>
                                <td className="p-4">{currData.name}</td>
                                <td className="p-4">{currData.gender}</td>
                                <td className="p-4">{currData.birthday}</td>
                                <td className="p-4">{currData.etnic}</td>
                                <td className="p-4">{currData.time ? 
                                    new Date(currData.time._seconds * 1000).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    }) 
                                    : 'N/A'}
                                </td>
                                <td className="p-4">{currData.testerRole}</td>
                                <td className="p-4 flex">
                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-gray" disabled={true}>Edit</Button>
                                    <div className="mr-2"></div>
                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-gray" disabled={true}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </>
    )
}
