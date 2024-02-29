 /* eslint-disable react/prop-types */
import Answer from "../../Elements/Input/Answer"

 const MultipleChoice = ({number, title, children, questionData, setQuestionData, choiceTitleA, choiceTitleB, choiceTitleC, choiceTitleD, choiceDescA, choiceDescB, choiceDescC, choiceDescD}) => {
    return  (
        <div className=" mt-8">
            <div className="Q1 mb-4">
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-2">{number}</div>
                    <div className="text-black font-bold ml-6 text-lg">{title}</div>
                </div>
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4"></div>
                    <div className="text-black ml-8 mb-4 text-md">{children}</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A" questionNumber={number} choice="A" choiceTitle={choiceTitleA}>{choiceDescA}</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="B" questionNumber={number} choice="B" choiceTitle={choiceTitleB}>{choiceDescB}</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="C" questionNumber={number} choice="C" choiceTitle={choiceTitleC}>{choiceDescC}</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="D" questionNumber={number} choice="D" choiceTitle={choiceTitleD}>{choiceDescD}</Answer>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 
 export default MultipleChoice