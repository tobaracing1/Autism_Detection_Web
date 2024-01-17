import Button from "../Elements/Button/Button"
import { useUser } from "../Layouts/userContext"
import {auth} from "../../script/firebase_key";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

const Header = ({ isAdmin }) =>{
    const {user} = useUser()

    const logout = () =>{
        signOut(auth)
        window.location.href = "/"
    }

    useEffect(() =>{
    }, [user])

    return (
        <header className={`flex justify-between items-center px-8 w-full h-20 bg-blue ${isAdmin ? "relative" : "fixed"} top-0`}>
            <button className='flex justify-start items-center py-4 w-1/3' onClick={() => window.location.href = "/"}> 
                <img src="./src/assets/deautism.png" alt="LOGO" className=''/>
            </button>
            
            <div className="center-header flex justify-center items-center w-1/3">
                {isAdmin ? 
                (
                    <>
                        <div className="text-white text-xl">Admin Dashboard</div>
                    </>
            
                ) : (
                    <>
                        <a href="/" className="mx-4 text-white text-xl font-bold hover:text-orange">HOME</a>
                        <a href="/about" className="mx-4 text-white text-xl font-bold hover:text-orange">ABOUT</a>
                    </>   
                )}
                
            </div>

            <div className="right-header flex justify-end items-center w-1/3">
                {user.uid  ? (
                    <>  
                        <div className="flex justify-center items-center h-full">
                            <div className="text-white text-xl mr-8">Welcome, {user.email}</div>
                        </div>
                        
                
                        <Button onClick={() => logout()}>Logout</Button>
                    </>
                    
                ) : (
                    <>
                        <Button onClick={() => window.location.href = "/login"}>Login</Button>
                        <div className="w-4"></div>
                        <Button onClick={() => window.location.href = "/signup"} variant="primary">Signup</Button>
                    </>
                )}
                
            </div>
        </header>
    )
}

export default Header