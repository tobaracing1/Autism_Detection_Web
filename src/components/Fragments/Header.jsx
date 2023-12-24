import Button from "../Elements/Button/Button"

const Header = ({ isAdmin, isLogin }) =>{

    return (
        <header className='flex justify-between items-center px-8 w-full h-20 bg-blue sticky top-0'>
            <button className='flex justify-start items-center py-4 w-1/3' onClick={() => window.location.href = "/"}> 
                <img src="./src/assets/deautism.png" alt="LOGO" className=''/>
            </button>
            
            <div className="center-header flex justify-center items-center w-1/3">
                {isAdmin ? 
                (
                    <>
                        <div className="text-white text-xl">Admin Dashbaord</div>
                    </>
            
                ) : (
                    <>
                        <a href="" className="mx-4 text-white text-xl font-bold hover:text-orange">HOME</a>
                        <a href="" className="mx-4 text-white text-xl font-bold hover:text-orange">ABOUT</a>
                    </>   
                )}
                
            </div>

            <div className="right-header flex justify-end items-center w-1/3">
                {isLogin ? (
                    <>
                        <Button onClick={() => window.location.href = "/login"}>Login</Button>
                        <div className="w-4"></div>
                        <Button onclick={() => window.location.href = "/signup"} variant="primary">Signup</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => window.location.href = "/logout"}>Logout</Button>
                    </>
                )}
                
            </div>
        </header>
    )
}

export default Header