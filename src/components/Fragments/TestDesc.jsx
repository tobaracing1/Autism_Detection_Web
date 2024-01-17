import { useEffect, useState } from "react"

const TestDesc = ({ percent }) => {
    // let wStyle = {`w-[${percent}%]`}

    useEffect(() => {
        console.log(percent)
    }, [percent])

    return (
        <div className="flex justify-center items-center w-[75%] ">
            <div className="progress w-full h-5 bg-gray rounded-full overflow-hidden">
                <div className={`progress-bar bg-red h-5 rounded-full w-[50%]`}></div>
            </div>
            <div className="text-black text-lg ml-4">{percent}%</div>
            asda
        </div>
    )
}

export default TestDesc