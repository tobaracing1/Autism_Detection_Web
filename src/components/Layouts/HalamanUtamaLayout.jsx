import Header from '../Fragments/Header'
import Button from '../Elements/Button/Button'
import Point from '../Elements/Point/Point'
import Input from '../Elements/Input/Input'
import Footer from '../Fragments/Footer'
import { useState } from 'react'
import { useUser } from '../Layouts/userContext'
import emailjs from '@emailjs/browser';
import topPicture from "/src/assets/children.jpg"
import bottomPicture from "/src/assets/children2.jpg"
import { POINT_DATA } from '../Data/pointData'

const HalamanUtama= () => {

    const {user} = useUser()
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [name , setName] = useState("")
    const [messageSended, setMessageSended] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleTakeTest = () => {
        if(user.uid){
            window.location.href = "/test"
        }
        else{
            window.location.href = "/login"
        }
    }
    const sendEmail = async (e) => {

        try {
            setLoading(true)
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: "DEAUTISM DEVELOPER"
            }
        
            const check = await emailjs.send("service_71lut18","template_4yak1mw",templateParams,"P6gHaqrcNi-5V0qfU")
            setMessageSended(true)
            console.log(check)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }

        
      }

    return(
        <div className='flex flex-col w-full h-full'>
            <Header page={"halamanUtama"}></Header>
            <div className="mt-20 first-content w-full h-full flex flex-col-reverse justify-between lg:flex-row lg:mt-0">
                <div className='flex flex-col justify-center px-24 mb-12 lg:w-1/2'>
                    <div className='text-4xl font-bold mb-8 mt-8 lg:mt-0'>AUTISM SPECTRUM DISORDER (ASD) </div>
                    <div className='text-md mb-4'>Autism Spectrum Disorder (ASD) or autism is a disorder that occurs in brain development (neurodevelopment) which is characterized by individual difficulties in interacting verbal and non-verbal communication, experiencing disturbances in behavior, and having limitations in interests and activities. In the context of early intervention and support, tests are needed to determine whether a child has autism. To find out how likely your child is to suffer from Autism, you can take the screening test available on our website. Press the button below to take the test. <span className='font-semibold'>(The recommended age for children to take the test on this website is 2 - 16 years)</span></div>
                    <div className='text-sm mb-4 font-semibold text-red'>DISCLAIMER : <br />The test results only describe how likely you are to have autism, for more definite results you need to see an expert. Please use test results only to support decision results. </div>
                    <div className='flex justify-end lg:justify-start'>
                        <Button variant="primary" width="w-36" onClick={() => handleTakeTest()}>Take Test</Button>
                    </div>
                    
                </div>
                <div className='flex justify-center items-center h-[50%] lg:w-1/2 lg:h-full'>
                    <img src={topPicture} alt="Children Image" className='object-cover w-[80%] h-[80%] lg:h-full lg:w-full'/>
                </div>
            </div>

            <div className="second-content w-full h-full flex justify-center bg-blue flex justify-center items-center flex-col p-16 lg:p-32">
                <div className='text-4xl font-bold text-white text-center mb-16'>WHY SHOULD YOU HAVE AN AUTISM DIAGNOSIS HERE?</div>
                <div className='flex justify-center flex-wrap items-between w-full lg:flex-nowrap'>
                    <Point {...POINT_DATA[0]} />
                    <Point {...POINT_DATA[1]} />
                    <Point {...POINT_DATA[2]} />
                    <Point {...POINT_DATA[3]} />

                </div>
            </div>

            <div className="third-content w-full h-full flex justify-center items-center lg:h-screen">
                <img src={bottomPicture} alt="Autism Image" className='object-cover w-1/2 h-full hidden lg:flex'/>
                <form action="" method="post" className=' flex flex-col justify-center items-center w-full h-full my-12 lg:m-16 lg:my-0'>
                    <div className='mb-8 transition text-3xl flex font-bold lg:hidden'>Contact Us</div>
                    {messageSended? 
                        <div className='form-container flex flex-col justify-center items-center w-6/7 p-8 h-80 rounded-lg shadow-2xl border-2 border-gray lg:p-12 lg:w-full'>
                            <div className='text-3xl font-bold'>Thank you for your message</div>
                        </div> 
                        :
                        <div className="form-container flex flex-col justify-center items-center w-6/7 p-8 rounded-lg shadow-2xl border-2 border-gray lg:p-12 lg:w-full">
                            <Input type={"email"} value= {email} placeholder={"Enter your email"} id={"email"} onChange={(e) => setEmail(e.target.value)}>Email</Input>
                            <Input type={"input"} value={name} placeholder={"Enter your name"} id={"name"} onChange={(e) => setName(e.target.value)}>Name</Input>
                            <textarea value={message} name="message" id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} placeholder='Type your message here' className='w-full p-4 mt-4 bg-gray'></textarea>
                            <div className='flex justify-end w-full mt-8'>
                            <Button onClick={sendEmail} variant={"primary"} type={"submit"} disabled={loading} >
                                {loading ? "Sending..." : "Send"}
                            </Button>
                            </div>
                        </div>
                
                
                    }
                    
                </form>
                <div className=''>
                
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default HalamanUtama