import Input from "../../Elements/Input/Input"
import { useState } from "react"

const Essay = ({number, title, children, placeholder, questionData, setQuestionData}) => {

    const handleLabelClick = async (value) => {
        await setQuestionData({ ...questionData, [number]: value });
    };  

    return (
        <div className=" mt-8">
            <div className="Q1 mb-4">
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-2">{number}</div>
                    <div className="text-black font-bold ml-6 text-lg">{title}</div>
                </div>
                <div className="question flex w-full">
                    <div className="font-bold text-lg"></div>
                    <div className="text-black ml-8 text-md">{children}</div>
                </div>
                <div className="answer ml-8">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <textarea value={questionData[number]} name="answer" id="answer" cols="30" rows="5" onChange={(e) => handleLabelClick(e.target.value)} placeholder={placeholder} className='w-full p-4 mt-4 bg-gray border-2 border-black text-black rounded-lg focus:outline-blue'></textarea>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Essay