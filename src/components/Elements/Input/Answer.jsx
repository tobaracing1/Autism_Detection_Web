import { Children } from "react"

const Answer = ({ children, questionData, setQuestionData, choice, value, questionNumber, choiceTitle}) => {

    const handleLabelClick = async () => {
        await setQuestionData({ ...questionData, [questionNumber]: value });
    };  

    return (
        <div className="content my-2 w-full h-full flex ">
            <label htmlFor={value} onClick={() => handleLabelClick()} className={`ml-8 cursor-pointer text-md text-left rounded-none w-8 h-8 flex justify-center items-center ${questionData[questionNumber] === value ? 'text-blue font-bold' : 'text-dark-gray'}`} style={{ minWidth: '2rem', minHeight: '2rem' }}>{choice}</label>
            <input type='radio' id={value} value={value} name={value} onChange={() => {setQuestionData({...questionData, [questionNumber]:{value}})}} className={`px-2 py-2 w-full bg-gray text-black text-sm focus:outline-blue hidden rounded-none`}  />
            <div className={`ml-4 text-sm cursor-pointer ${questionData[questionNumber] === value ? 'text-blue' : 'text-dark-gray'}`} onClick={() => handleLabelClick()}> <div className={`${questionData[questionNumber] === value ? 'text-blue' : 'text-dark-gray'} text-lg font-semibold leading-normal`}>{choiceTitle}</div> {children}</div>
        </div>
    )
}

export default Answer