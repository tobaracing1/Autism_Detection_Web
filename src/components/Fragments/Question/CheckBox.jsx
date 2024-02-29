

const CheckBox = ({number, title, children, questionData, setQuestionData}) => {

    const handleLabelClick = async (value) => {
        await setQuestionData({ ...questionData, [number]: value });
    };  
    
    const CheckBoxData = [
        "Yes","No","Maybe"
    ]
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
                        {
                            CheckBoxData.map((data) => {
                                return (
                                    <div key={data} className="flex items-center">
                                        <input type="checkbox" value={data} name={data} id={data} onChange={(e) => handleLabelClick(e.target.value)} className="w-8 h-8" />
                                        <label htmlFor={data} className="ml-2 text-left w-full text-md text-left rounded-none text-dark-gray lg:text-md">{data}</label>
                                    </div>
                                ) 
                                
                            })
                        }
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default CheckBox