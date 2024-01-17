import Header from '../Fragments/Header'
import Button from '../Elements/Button/Button'
import Point from '../Elements/Point/Point'
import Input from '../Elements/Input/Input'
import Footer from '../Fragments/Footer'
import { useUser } from '../Layouts/userContext'

const HalamanUtama= () => {
    const {user} = useUser()
    const handleTakeTest = () => {
        if(user.uid){
            window.location.href = "/test"
        }
        else{
            window.location.href = "/login"
        }
    }
    return(
        <div className='flex flex-col w-full h-full'>
            <Header></Header>
            
            <div className="first-content  w-full h-screen flex justify-between">
                <div className='flex flex-col w-1/2 justify-center px-24'>
                <div className='text-4xl font-bold mb-8'>AUTISM SPECTRUM DISORDER (ASD) </div>
                <div className='text-md mb-4'>Autism Spectrum Disorder (ASD) or autism is a disorder that occurs in brain development (neurodevelopment) which is characterized by individual difficulties in interacting verbal and non-verbal communication, experiencing disturbances in behavior, and having limitations in interests and activities. In the context of early intervention and support, a test is required to determine whether a child has autism, press the button below to take the test.</div>
                <div className='text-md mb-4 font-semibold text-red'>Note: recommended age for children to take the test on this website is 2 - 16 years</div>
                <Button variant="primary" width="w-36" onClick={() => handleTakeTest()}>Take Test</Button>
                </div>
                <div className='flex justify-center items-center w-1/2'>
                <img src="./src/assets/children.jpg" alt="Children Image" className='object-cover w-full h-full'/>
                </div>
            </div>

            <div className="second-content w-full h-screen flex justify-center bg-blue flex justify-center items-center flex-col p-32">
                <div className='text-4xl font-bold text-white text-center mb-16'>WHY SHOULD YOU HAVE AN AUTISM DIAGNOSIS HERE?</div>
                <div className='flex justify-center items-between px-48'>
                    <Point title="Fast & Easy" desc="Our test takes less than 30 minutes to complete and easy to do" image="fast.png"></Point>
                    <Point title="Privacy Safe" desc="We ensure that all stored data is safely maintained in the system" image="privacy.png"></Point>
                    <Point title="Free" desc="The features we provide can be used for free" image="free.png"></Point>
                    <Point title="Reliable" desc="The system we developed for diagnosing autism is reliable" image="reliable.png"></Point>
                </div>
            </div>

            <div className="third-content w-full h-screen flex justify-center items-center">
                <img src="./src/assets/children.jpg" alt="Autism Image" className='object-cover w-full h-full'/>
                <form action="" method="post" className=' flex flex-col justify-center items-center w-full h-full '>
                <div className="form-container flex flex-col justify-center items-center w-3/4 p-12 rounded-lg shadow-2xl border-2 border-gray">
                    <Input type={"email"} placeholder={"Enter your email"} id={"email"}>Email</Input>
                    <Input type={"input"} placeholder={"Enter your name"} id={"Name"}>Name</Input>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here' className='w-full p-4 mt-4 bg-gray'></textarea>
                    <div className='flex justify-end w-full mt-8'>
                    <Button onClick={() => window.location.href = "/sendMessage"} variant={"primary"} type={"submit"}>Send</Button>
                    </div>
                </div>
                
                
                </form>
                <div className=''>
                
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default HalamanUtama