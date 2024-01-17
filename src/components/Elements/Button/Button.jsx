/* eslint-disable react/prop-types */
const Button = ({children, type, width, variant, onClick, bgColor = "bg-orange"}) =>{
    if(!width) {
        width = ""
    }
    

    if(variant === "primary"){
        return <button type={`${type}`} onClick={onClick} className={`text-black text-center  flex justify-center items-center ${bgColor} hover:bg-white hover:text-orange  px-6 py-2 border rounded-md font-bold ${width}`} >{children}</button>
    }
    else{
        return <button type={`${type}`} onClick={onClick} className={`text-white hover:bg-white hover:text-black  px-6 py-2 border rounded-md font-bold ${width}`} >{children}</button>
    }
}


export default Button