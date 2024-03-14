import { useEffect, useState } from "react";
import Button from "../../Elements/Button/Button"


export default function UserTableContent({data, toggleEditLayout, toggleDeleteConfirm}) {

    if (!data || !Array.isArray(data)) {
        return null; // Render nothing if data is not available
    }

    return (
        <>
            <thead>
                <tr className="text-md text-left">
                    <th className="p-4">No</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Id</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Birthday</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Option</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    data.map((currData, index) => {
                        return (
                            <tr className="text-md text-left" key={index}>
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">{currData.email}</td>
                                <td className="p-4">{currData.id}</td>
                                <td className="p-4">{currData.name}</td>
                                <td className="p-4">{currData.birthday}</td>
                                <td className="p-4">{currData.gender}</td>
                                <td className="p-4">{currData.role}</td>
                                <td className="p-4 flex">
                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-light-blue" onClick={() => toggleEditLayout(currData.id, currData.email, currData.name, currData.birthday, currData.gender)}>Edit</Button>
                                    <div className="mr-2"></div>
                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-light-red" onClick={async () => {
                                        toggleDeleteConfirm(currData.id)
                                    }
                                }>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </>
    )
}