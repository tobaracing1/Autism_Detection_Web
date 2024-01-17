import { useEffect, useState } from "react"
import Input from "../Elements/Input/Input"
import RadioInput from "../Elements/Input/radioInput"
import BirthInput from "../Elements/Input/birthInput"
import Button from "../Elements/Button/Button"
import { auth } from "../../script/firebase_key"
import { createUserWithEmailAndPassword } from "firebase/auth"
import axios from "axios"

const UserAdd = ({setIsAddLayoutVisible, page, setData}) => {
    const [checked, setChecked] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("user")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")

    function handleChange (e) {
        setChecked(e.target.value)
        setGender(e.target.value)
    }

    function closeLayout () {
        setIsAddLayoutVisible(false)
    }

    const addUser = async () => {
        try {
            if(checked == "" || email == "" || password == "" ||  username == "") throw new Error("Please fill all the fields")
            
            if(password.length < 6) {
                console.log("password : " + email)
                throw new Error("Password must be atleast 6 characters")
            }

            const saveUserData = await axios.post('http://localhost:8082/api/users/add', {
                name:username,
                role:role,
                birthday: birthday,
                gender: gender,
                email: email,
                password: password
            })

            setIsAddLayoutVisible(false)
            const fetchData = await axios.get("http://localhost:8082/api/users")
            setData(fetchData.data)

        } 
        catch (error) {
            const errorContainer = document.getElementById("errorMessage")

            errorContainer.style.display = "flex"
            if(error.code === 'auth/email-already-in-use'){
                errorContainer.innerHTML = "Email already in use"
            }
            else if(error.code === 'auth/weak-password'){
                errorContainer.innerHTML = "Password must be atleast 6 characters"
            }
            else{
                errorContainer.innerHTML = error.message
            }
        }   
    }
    
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <button onClick={closeLayout} className="absolute top-8 right-8 font-bold">X</button>
            <div className="text-lg font-bold my-4">User</div>
            <div className=' text-sm mb-8 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25' id='errorMessage'></div>
            <Input placeholder={"Email"} type={"email"} id={"email"} onChange={(e) => setEmail(e.target.value)}>Email</Input>
            <Input placeholder={"Password"} type={"input"} id={"password"} onChange={(e) => setPassword(e.target.value)}>Password</Input>
            <Input placeholder={"Name"} type={"input"} id={"name"} onChange={(e) => setUsername(e.target.value)}>Name</Input>
            
            <div className="radioInput w-full flex flex-col justify-center items-center mb-4">  
                <label htmlFor="" className=" w-full text-md text-left text-dark-gray mb-2">Gender</label>
                <div className="radio flex justify-center items-center w-full p-1 border border-dark-gray rounded-md">
                    <RadioInput name={"gender"} value={"male"} id={"male"}  handleChange={handleChange} check={checked}>Male</RadioInput>
                    <RadioInput name={"gender"} value={"Female"} id={"Female"} handleChange={handleChange} check={checked}>Female</RadioInput>
                </div>
            </div>

            <BirthInput type={"date"} id={"birthday"} onChange={(e) => setBirthday(e.target.value)}  max={"2007-12-31"}>Birthday</BirthInput>

            <Button variant={"primary"} width={"w-full"} onClick={() => addUser()}>Add</Button>
        </div>
    )
}

export default UserAdd