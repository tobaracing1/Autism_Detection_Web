import Button from "../Elements/Button/Button"
import Input from "../Elements/Input/Input"

const HalamanLogin= () => {
    return(
        <div className="Signup w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue to-orange">
            <button className='flex justify-center items-center fixed top-20 left-20' onClick={() => window.location.href = "/"}> 
                <img src="./src/assets/deautism.png" alt="LOGO" className=''/>
            </button>

            <form action="" method="POST" className='h-max w-3/10 p-12 flex flex-col justify-center items-center bg-white border border-dark-gray rounded-lg'>
                <div className="title font-bold text-3xl mb-8 text-center">Login to take test</div>
                <div className="content flex flex-col w-full mb-8 justify-center">
                    <Input placeholder={"Enter your email"} type={"email"} id={"email"}>Email</Input>
                    <Input placeholder={"Enter your password"} type={"password"} id={"password"}>Password</Input>
                </div>
                <div className="signup mb-4 text-xs">Don't have an account? click here to <a href="" className='text-blue text-xs underline'>signup</a></div>
                <Button variant={"primary"} width={"w-full"}>Login</Button>
            </form>
        </div>
    )
}

export default HalamanLogin