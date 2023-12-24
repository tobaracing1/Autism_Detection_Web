import { useState } from 'react'
import Input from '../Elements/Input/Input'
import Button from '../Elements/Button/Button'
import RadioInput from '../Elements/Input/radioInput'

const HalamanSignup = () => {
    const [checked, setChecked] = useState("")
  
    function handleChange (e) {
        setChecked(e.target.value)
    }
    
    return(
      <div className="Signup w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue to-orange">
        <button className='flex justify-center items-center fixed top-20 left-20' onClick={() => window.location.href = "/"}> 
            <img src="./src/assets/deautism.png" alt="LOGO" className=''/>
        </button>

        <form action="" method="POST" className='h-max w-2/5 p-12 flex flex-col justify-center items-center bg-white border border-dark-gray rounded-lg'>
          <div className="title font-bold text-3xl mb-8">Signup to take test</div>
          <div className="content flex w-full mb-8">
            <div className="left w-1/2 mr-16">
              <Input placeholder={"Enter your email"} type={"email"} id={"email"}>Email</Input>
              <Input placeholder={"Enter your username"} type={"input"} id={"username"}>Username</Input>
              <Input placeholder={"Enter your password"} type={"password"} id={"password"}>Password</Input>
              <Input placeholder={"Enter your password again"} type={"password"} id={"confirm-password"}>Confirm Password</Input>
            </div>
            <div className="right w-1/2">
              <div className="radioInput flex flex-col justify-center items-center mb-4">  
                <label htmlFor="" className=" w-full text-md text-left text-dark-gray mb-2">Gender</label>
                <div className="radio flex justify-center items-center w-full p-1 border border-dark-gray rounded-md">
                  <RadioInput name={"gender"} value={"male"} id={"male"}  handleChange={handleChange} check={checked}>Male</RadioInput>
                  <RadioInput name={"gender"} value={"Female"} id={"Female"} handleChange={handleChange} check={checked}>Female</RadioInput>
                </div>
                
              </div>
              
              <Input type={"date"} id={"birthday"} >Birthday</Input>
            </div>
          </div>
          <div className="login mb-4 text-sm">Already have an account? click here to <a href="" className='text-blue text-sm underline'>login</a></div>
          <Button variant={"primary"} width={"w-full"}>Signup</Button>
        </form>
      </div>
    )
}

export default HalamanSignup