/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Button from "../Elements/Button/Button"
import Input from "../Elements/Input/Input"
import { auth } from "../../script/firebase_key"
import { signInWithEmailAndPassword } from "firebase/auth"
import axios from 'axios'
import { useState } from 'react'
import { useUser } from "../Layouts/userContext"

const HalamanLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useUser()

    const login = async () => {
        try {
            if(email == "" || password == "") throw new Error("Please fill all the fields")
            
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const getUserData = await axios.get(`http://localhost:8082/api/users/${userCredential.user.uid}`)
            localStorage.setItem("role", getUserData.data.role)

            if(getUserData.data.role == "admin"){
                window.location.href="/admin"
            }else{  
                window.location.href="/"
            }
        } 
        catch (error) {
            const errorContainer = document.getElementById("errorMessage")

            errorContainer.style.display = "flex"

            if(error.code === 'auth/invalid-credential'){
                errorContainer.innerHTML = "Your email or password is incorrect"
            }
            else if(error.code === 'auth/invalid-email'){
                errorContainer.innerHTML = "Please enter valid registered email"
            }
            else{
            errorContainer.innerHTML = error.message
            }
        }
    }


    return(
        <div className="Signup w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue to-orange">
            <button className='flex justify-center items-center fixed top-20 left-20' onClick={() => window.location.href = "/"}> 
                <img src="./src/assets/deautism.png" alt="LOGO" className=''/>
            </button>

            <div className='h-max w-3/10 p-12 flex flex-col justify-center items-center bg-white border border-dark-gray rounded-lg'>
                <div className="title font-bold text-3xl mb-8 text-center">Login to take test</div>
                <div className='text-sm mb-8 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25' id='errorMessage'></div>
                <div className="content flex flex-col w-full mb-8 justify-center">
                    <Input placeholder={"Enter your email"} type={"email"} id={"email"} onChange={(e) => setEmail(e.target.value)}>Email</Input>
                    <Input placeholder={"Enter your password"} type={"password"} id={"password"} onChange={(e) => setPassword(e.target.value)}>Password</Input>
                </div>
                <div className="signup mb-4 text-xs">Don't have an account? click here to <a href="/signup" className='text-blue text-xs underline'>signup</a></div>
                <Button variant={"primary"} width={"w-full"} onClick={() => login()} >Login</Button>
            </div>
        </div>
    )
}

export default HalamanLogin