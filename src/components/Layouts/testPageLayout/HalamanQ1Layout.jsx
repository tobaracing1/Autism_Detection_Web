/* eslint-disable react/prop-types */
import Button from "../../Elements/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Answer from "../../Elements/Input/Answer";
import Selection from "../../Fragments/Question/Selection";
import MultipleChoice from "../../Fragments/Question/MultipleChoice";
import Essay from "../../Fragments/Question/Essay";
import CheckBox from "../../Fragments/Question/checkBox";

const Q1Layout = ({ currentPage, setCurrentPage, questionData, setQuestionData}) => {
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
        if(questionData[1] === undefined ) {
            throw new Error("Please fill all the questions with answer")
        }
        else{
            if (currentPage < 4) {
                console.log(questionData)
                setCurrentPage(currentPage + 1);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }

        }

        
    } catch (error) {
        const errorContainer = document.getElementById("errorMessage")
        console.log(questionData)
        errorContainer.style.display = "flex"
        errorContainer.innerHTML = error.message
    }

  }


  return (
    <div className="page1 w-full flex flex-col items-center mb-8">
      <div className="flex flex-col w-[80%] items-center box-border rounded-lg w-max-content border p-8 lg:w-[60%]">
        <div className="w-full flex flex-col justify-start">
          <MultipleChoice 
            questionData={questionData} setQuestionData={setQuestionData} number="1" title="RELATING TO PEOPLE"
            choiceTitleA={"No evidence of difficulty or abnormality in relating to people"}
            choiceTitleB={"Evidence of difficulty or abnormality in relating to people"}
            choiceTitleC={"Moderately abnormal relationships"}
            choiceTitleD={"Severe abnormal relationships"}
            choiceDescA={"The child's behavior is appropriate for his or her age. Some shyness, fussiness, or annoyance at being told what to do may be observed, but not to an atypical degree."}
            choiceDescB={"The child may avoid looking the adult in the eye, avoid the adult or become fussy if interaction is forced, be excessively shy, not be as responsive to the adult as is typical, or cling to parents somewhat more than most children of the same age."}
            choiceDescC={"The child shows aloofness (seems unaware of adult) at times. Persistent and forceful attempts are necessary to get the child's attention at times. Minimal contact is initiated by the child."}
            choiceDescD={"The child is consistently aloof or unaware of what the adult is doing. He or she almost never responds to or initiates contact with the adult. Only the most persistent attempts to get the child's attention have any effect."}>
            Which category best describes your child's behavior of consistently avoiding eye contact with adults, showing excessive shyness, and requiring constant effort to get their attention, sometimes showing aloofness and minimal initiation of contact?
          </MultipleChoice>

          <Essay questionData={questionData} setQuestionData={setQuestionData} number="2" title="IMITATION" placeholder={"type something..."}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fugit? Illo consectetur quis totam vel voluptas necessitatibus quibusdam ducimus ea. Fugiat ex repellendus amet voluptatibus tempora natus iste aspernatur laborum?</Essay>  

          <Selection number={3} title="SPEAKING" questionData={questionData} setQuestionData={setQuestionData} 
          selectionData={["No evidence of difficulty or abnormality in speaking", "Evidence of difficulty or abnormality in speaking", "Moderately abnormal speech", "Severe abnormal speech"]}>asdasdasd</Selection>  

          <CheckBox number={4} title="IMITATION" questionData={questionData} setQuestionData={setQuestionData}></CheckBox>

          <div className=" mt-8">
            

            <div className="Q2 mb-4">
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4">2. </div>
                    <div className="text-black  font-bold text-lg ml-4">IMITATION</div>
                </div>
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4"></div>
                    <div className="text-black  ml-6 mb-4 text-md">In which category does your child often imitate simple behaviors such as clapping a hand or a single verbal sound, but sometimes requires encouragement or experiences a delay before imitating?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q2" choice="A" choiceTitle="Appropriate imitation">The child can imitate sounds, words, and movements that are appropriate for his or her skill level.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q2" choice="B" choiceTitle="Mildly abnormal imitation">The child imitates simple behaviors such as clapping or single verbal sounds most of the time; occasionally, imitates only after prodding or after a delay.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q2" choice="C" choiceTitle="Moderately abnormal imitation">The child imitates only part of the time and requires a great deal of persistence and help from the adult. The child frequently imitates only after a delay.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q2" choice="D" choiceTitle="Severely abnormal imitation">The child rarely or never imitates sounds, words, or movements even with prodding and assistance from the adult.</Answer>
                    </div>
                </div>
            </div>

            <div className="Q3 mb-4">
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4">3. </div>
                    <div className="text-black  font-bold text-lg ml-4">EMOTIONAL RESPONSE</div>
                </div>
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4"></div>
                    <div className="text-black  ml-6 mb-4 text-md">Which category describes your child as showing inappropriate emotional reactions, with responses that are sometimes unrelated to the objects or events around him?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q3" choice="A" choiceTitle="Age-appropriate and situation-appropriate emotional response">The child shows the appropriate type and degree of emotional response, as indicated by a change in facial expression, posture, and manner.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q3" choice="B" choiceTitle="Mildly abnormal emotional response">The child occasionally displays a somewhat inappropriate type or degree of emotional reaction. Reactions are sometimes unrelated to the objects or events surrounding him or her.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q3" choice="C" choiceTitle=" Moderately abnormal emotional response">The child shows definite signs of inappropriate type and/or degree of emotional response. Reactions may be quite inhibited or excessive and unrelated to the situation; child may grimace, laugh, or become rigid even though no apparent emotion-producing objects or events are present.
</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q3" choice="D" choiceTitle="Severely abnormal emotional response">Responses are seldom appropriate to the situation; once the child gets in a certain mood, it is very difficult to change the mood. Conversely, the child may show wildly different emotions when nothing has changed.</Answer>
                    </div>
                </div>
            </div>

            <div className="Q4 mb-4">
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4">4. </div>
                    <div className="text-black  font-bold text-lg ml-4">BODY USE</div>
                </div>
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4"></div>
                    <div className="text-black  ml-6 mb-4 text-md">Which category describes your child as exhibiting minor idiosyncrasies such as clumsiness, repetitive movements, or poor coordination?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q4" choice="A" choiceTitle="Age-appropriate body use" >The child moves with the same ease, agility, and coordination as a normal child of the same age.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q4" choice="B" choiceTitle="Mildly abnormal body use">Some minor peculiarities may be present, such as clumsiness, repetitive movements, poor coordination, or the rare appearance of more unusual movements.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q4" choice="C" choiceTitle="Moderately abnormal body use">Behaviors that are clearly strange or unusual for a child of this age may include strange finger movements, peculiar finger or body posturing, staring or picking at the body, self-directed aggression, rocking, spinning, finger-wiggling, or toe-walking.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q4" choice="D" choiceTitle="Severely abnormal body use">Intense or frequent movements of the type listed above are signs of severely abnormal body use. These behaviors may persist despite attempts to discourage them or involve the child in other activities.</Answer>
                    </div>
                </div>
            </div>

            <div className="Q5 mb-4">
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4">5. </div>
                    <div className="text-black  font-bold text-lg ml-4">OBJECT USE</div>
                </div>
                <div className="question flex w-full">
                    <div className="font-bold text-lg w-4"></div>
                    <div className="text-black  ml-6 mb-4 text-md">Which category best describes your child if they show little interest in toys or other objects, or if they focus on using objects in strange ways, such as being fascinated by the light reflected off an object or moving parts of an object repeatedly?</div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A1" questionNumber="Q5" choice="A" choiceTitle="Appropriate interest in, or use of, toys and other objects">The child shows normal interest in toys and other objects appropriate for his or her skill level and uses these toys in an appropriate manner.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A2" questionNumber="Q5" choice="B" choiceTitle="Mildly inappropriate interest in, or use of, toys and other objects">The child may show atypical interest in a toy or play with it in an inappropriately childish way (e.g., banging or sucking on the toy).</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A3" questionNumber="Q5" choice="C" choiceTitle="Moderately inappropriate interest in, or use of, toys and other objects">The child may show little interest in toys or other objects, or may be preoccupied with using an object or toy in some strange way. He or she may focus on some insignificant part of a toy, become fascinated with light reflecting off the object. repetitively move some part of the object, or play with one object exclusively.</Answer>
                    </div>
                </div>
                <div className="answer">
                    <div className=' flex flex-col w-full justify-center items-center h-full p-0.5'>
                        <Answer questionData={questionData} setQuestionData={setQuestionData} value="A4" questionNumber="Q5" choice="D" choiceTitle="Severely inappropriate interest in, or use of, toys and other objects">The child may engage in the same behaviors as above, with greater frequency and intensity. The child is difficult to distract when engaged in these inappropriate activities.</Answer>
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

export default Q1Layout;
