

const Selection = ({number, title, children, selectionData, questionData, setQuestionData}) => {

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
                    <div className=' flex flex-col w-full justify-center items-left h-full p-0.5'>
                        
                        <select value={questionData[number]} className="w-full p-2 mt-4 bg-gray border-2 border-black text-sm text-black rounded-lg focus:outline-blue lg:w-[30%]" name={title} id={title} onChange={(e) => handleLabelClick(e.target.value)}>
                            {
                                selectionData.map((data) => {
                                   return <option key={data} value={data}>{data}</option>
                                })
                            }
                            
                        </select>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Selection