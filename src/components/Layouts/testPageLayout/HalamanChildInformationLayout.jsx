import Button from "../../Elements/Button/Button"
import RadioInput from "../../Elements/Input/radioInput"
import Input from "../../Elements/Input/Input"
import BirthInput from "../../Elements/Input/birthInput"
import { useState, useEffect } from "react"
import { useUser } from "../userContext"
import axios from "axios"

const ChildInformationLayout = ({currentPage, setCurrentPage, setUseRegisteredChild, childInformationData, setChildInformationData}) => {
    const {user, token} = useUser()

    // State to store the current date
    const [currentDate, setCurrentDate] = useState(getFormattedDate());

    // Function to get the current date in "YYYY-MM-DD" format
    function getFormattedDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Add leading zero if month or day is a single digit
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    }

    // Update the current date when the component mounts
    useEffect(() => {
        setCurrentDate(getFormattedDate());
    }, []);

    function handleChange (e) {
        setChildInformationData({
            ...childInformationData,
            check: e.target.value,
            gender: e.target.value,
        });
    }

    async function nextPage() {
        try {
            
            if(childInformationData.name == undefined || childInformationData.birthday == undefined || childInformationData.etnic == undefined || childInformationData.check == undefined || childInformationData.testerRole == undefined) throw new Error("Please fill all the fields")

            const saveChildData = await axios.post('http://localhost:8082/api/childInformation', {
                name: childInformationData.name,
                birthday: childInformationData.birthday,
                gender: childInformationData.gender,
                etnic: childInformationData.etnic,
                testerRole: childInformationData.testerRole,
                userId: user.uid
            },token)

            if(saveChildData && currentPage < 4) {
                await setCurrentPage(currentPage + 1)
            }

        } catch (error) {
            const errorContainer = document.getElementById("errorMessage")

            errorContainer.style.display = "flex"
            errorContainer.innerHTML = error.message

        }
        
    }

    return (
        
        <div className="page1 h-screen w-full flex flex-col items-center ">
            <div className="flex flex-col items-center box-border rounded-lg w-[80%] border p-8 lg:w-[40%]">
                <div className=" flex flex-col items-center w-full">
                    <Button variant={"primary"} width={"w-full"} onClick={() => setUseRegisteredChild(true)}>USE REGISTERED CHILD</Button>
                    <div className="text-black text-md mt-4 text-center">If you want to use child data that you have previously registered, please press the button above.</div>
                </div>
                <div className="divider my-8 h-1 bg-dark-gray w-full rounded-full"></div>
                <div className="font-bold text-3xl mb-8">Create New Child Profile</div>
                <div className='text-sm mb-8 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25' id='errorMessage'></div>
                <div className="w-full border border-dark-gray rounded-lg">
                    <div className="p-4 w-full grid grid-cols-2 grid-rows-3 justify-items-center">
            
                        <div className="w-[90%] flex justify-center items-center">
                            <Input placeholder={"Enter your child name"} value={childInformationData.name} type={"input"} id={"username"} onChange={(e) => setChildInformationData({...childInformationData, name: e.target.value})}>Name</Input>
                        </div>
                        <div className="w-[90%]">
                            <BirthInput type={"date"} id={"birthday"} value={childInformationData.birthday} onChange={(e) => setChildInformationData({...childInformationData, birthday: e.target.value})}  max={currentDate}>Birthday</BirthInput>
                        </div>
                        <div className="row-start-2 w-[90%] flex justify-center items-center">
                            <select id="etnic" name="etnic" value={childInformationData.etnic} onChange={(e) => setChildInformationData({...childInformationData, etnic: e.target.value})} defaultValue={""} className="block w-full h-10 text-sm rounded-md border-0 p-2 text-dark-gray shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-black focus:text-black sm:max-w-xs lg:text-md sm:leading-6">
                                <option value="" disabled>Select Etnicity</option>
                                <option value="African">African</option>
                                <option value="African American">African American</option>
                                <option value="Arab">Arab</option>
                                <option value="Asian">Asian</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Biracial">Biracial</option>
                                <option value="Caribbean">Caribbean</option>
                                <option value="Caucasian">Caucasian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Colombian">Colombian</option>
                                <option value="Cuban">Cuban</option>
                                <option value="Dominican">Dominican</option>
                                <option value="Filipino">Filipino</option>
                                <option value="Greek">Greek</option>
                                <option value="Haitian">Haitian</option>
                                <option value="Hispanic">Hispanic</option>
                                <option value="Indian">Indian</option>
                                <option value="Indigenous">Indigenous</option>
                                <option value="Indonesian">Indonesia</option>
                                <option value="Irish">Irish</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Jewish">Jewish</option>
                                <option value="Korean">Korean</option>
                                <option value="Latino">Latino</option>
                                <option value="Malaysian">Malaysia</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Middle Eastern">Middle Eastern</option>
                                <option value="Native American">Native American</option>
                                <option value="Pacific Islander">Pacific Islander</option>
                                <option value="Pakistani">Pakistani</option>
                                <option value="Peruvian">Peruvian</option>
                                <option value="Polish">Polish</option>
                                <option value="Portuguese">Portuguese</option>
                                <option value="Puerto Rican">Puerto Rican</option>
                                <option value="Russian">Russian</option>
                                <option value="Scottish">Scottish</option>
                                <option value="Sikh">Sikh</option>
                                <option value="South Asian">South Asian</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Swedish">Swedish</option>
                                <option value="Thai">Thai</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Ukrainian">Ukrainian</option>
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="Welsh">Welsh</option>
                                <option value="Yoruba">Yoruba</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="row-start-2 w-[90%] flex justify-center items-center">
                            <div className="radio flex justify-center items-center w-full p-1 border border-dark-gray rounded-md">
                                <RadioInput name={"gender"} value={"Male"} id={"male"}  handleChange={handleChange} check={childInformationData.check}>Male</RadioInput>
                                <RadioInput name={"gender"} value={"Female"} id={"Female"} handleChange={handleChange} check={childInformationData.check}>Female</RadioInput>
                            </div>
                        </div>
                        <div className="col-span-2 row-start-3 w-[95%] w-full flex justify-center items-center mb-4 ">
                            <select id="testerRole" name="testerRole" value={childInformationData.testerRole} onChange={(e) => setChildInformationData({...childInformationData, testerRole: e.target.value})} defaultValue={""}  className="block w-[95%] h-10 text-sm rounded-md border-0 text-dark-gray p-2 shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-black focus:text-black lg:text-md sm:leading-6">
                                <option value="" disabled>What is your relation with the child?</option>
                                <option value="Parent">Parent</option>
                                <option value="Brother/Sister">Brother/Sister</option>
                                <option value="CloseRelative">Close Relative</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-span-2 row-start-4 w-[95%] flex justify-end">
                            <Button variant={"primary"} width={"w-[20%]"} onClick={() => nextPage()}>Save</Button>
                        </div>
                    </div>
                    
                    
                </div>

                

            </div>
            <div className="mb-8"></div>
        </div>
    )
}

export default ChildInformationLayout