/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Bar = ({ percent }) => {

    return (
        <div className="flex justify-center items-center w-[60%] -z-50 ">
            <div className="progress w-full h-5 bg-gray rounded-full relative">
                <div className="progress-bar bg-orange h-5 rounded-full" style={{ width: `${percent}%` }}></div>
                <div className="text-orange absolute left-0 right-0 text-center">
                    {percent}%
                </div>
            </div>
        </div>
    );
};

export default Bar;