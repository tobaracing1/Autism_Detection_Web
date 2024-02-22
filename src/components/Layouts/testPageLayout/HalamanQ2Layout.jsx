/* eslint-disable react/prop-types */
import Button from "../../Elements/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Answer from "../../Fragments/Answer";

const Q2Layout = ({ currentPage, setCurrentPage, questionData, setQuestionData}) => {
  const [childData, setChildData] = useState([])

  useEffect(() => {

    async function fetchData () {
      const fetchChildData = await axios.get(`http://localhost:8082/api/childInformation`)
      setChildData(fetchChildData.data)
    }
    fetchData()
  }, [])

  
  

  function nextPage() {
    try {
        if(questionData['Q6'] === undefined || questionData['Q7'] === undefined || questionData['Q8'] === undefined || questionData['Q9'] === undefined || questionData['Q10'] === undefined) {
            throw new Error("Please fill all the questions with answer")
        }
        else{
            if (currentPage < 4) {
                setCurrentPage(currentPage + 1);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }

        }

        
    } catch (error) {
        const errorContainer = document.getElementById("errorMessage")
        errorContainer.style.display = "flex"
        errorContainer.innerHTML = error.message
    }

  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);  
    }
  }


  return (
    <div className="page2 w-full flex flex-col items-center mb-8">
      <div className="flex flex-col w-[80%] items-center box-border rounded-lg w-max-content border p-8 lg:w-[60%]">
        <div className="w-full flex flex-col justify-start">
                        
          <Button variant={"primary"} width={"w-20"} bgColor="bg-white" onClick={async () => {prevPage()}}>
            Back
          </Button>

          <div className=" mt-8">
            <div className="Q6">
                <div className="question flex w-full">
                    <div className="font-semibold w-4">6. </div>
                    <div className="text-black text-justify font-semibold ml-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ea inventore culpa esse libero architecto qui porro enim modi dolor. Impedit perspiciatis harum iure quod laudantium pariatur numquam, adipisci magnam?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q6" choice="A">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q6" choice="B">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q6" choice="C">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q6" choice="D">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
            </div>

            <div className="Q7">
                <div className="question flex w-full">
                    <div className="font-semibold w-4">7. </div>
                    <div className="text-black text-justify font-semibold ml-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ea inventore culpa esse libero architecto qui porro enim modi dolor. Impedit perspiciatis harum iure quod laudantium pariatur numquam, adipisci magnam?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q7" choice="A">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q7" choice="B">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q7" choice="C">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q7" choice="D">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
            </div>

            <div className="Q8">
                <div className="question flex w-full">
                    <div className="font-semibold w-4">8. </div>
                    <div className="text-black text-justify font-semibold ml-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ea inventore culpa esse libero architecto qui porro enim modi dolor. Impedit perspiciatis harum iure quod laudantium pariatur numquam, adipisci magnam?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q8" choice="A">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q8" choice="B">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q8" choice="C">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q8" choice="D">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
            </div>

            <div className="Q9">
                <div className="question flex w-full">
                    <div className="font-semibold w-4">9. </div>
                    <div className="text-black text-justify font-semibold ml-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ea inventore culpa esse libero architecto qui porro enim modi dolor. Impedit perspiciatis harum iure quod laudantium pariatur numquam, adipisci magnam?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q9" choice="A">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q9" choice="B">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q9" choice="C">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q9" choice="D">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
            </div>

            <div className="Q10">
                <div className="question flex w-full">
                    <div className="font-semibold w-4">10. </div>
                    <div className="text-black text-justify font-semibold ml-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ea inventore culpa esse libero architecto qui porro enim modi dolor. Impedit perspiciatis harum iure quod laudantium pariatur numquam, adipisci magnam?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q10" choice="A">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q10" choice="B">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q10" choice="C">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q10" choice="D">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et tenetur, repudiandae quo fugit adipisci, dolores quia nobis temporibus repellat fugiat minima, quas ipsum dicta. Culpa corporis officiis ducimus sit!</Answer>
                    </div>
                </div>
            </div>
          </div>

          <div className=' text-sm my-4 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25' id='errorMessage'></div>

          <div className="flex justify-end mt-8">
            <Button variant={"primary"} width={"w-20"} bgColor="bg-white" onClick={async () => {nextPage()}}>
                Next
            </Button>
          </div>
            
          
        </div>
        

      </div>
    </div>
  );
};

export default Q2Layout;
