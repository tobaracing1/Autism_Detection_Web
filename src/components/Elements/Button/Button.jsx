/* eslint-disable react/prop-types */
const Button = ({children, type, width, variant, onClick, bgColor = "bg-orange", disabled = false, ...props}) =>{
    if(!width) {
        width = ""
    }
    

    if(variant === "primary"){
        return <button type={`${type}`} onClick={onClick} {...props} className={`text-black text-center flex justify-center items-center ${bgColor} disabled:opacity-50 hover:bg-white hover:text-orange  px-6 py-2 border rounded-md font-bold ${width}`}  disabled={disabled ? "disabled" : ""}>{children}</button>
    }
    else{
        return <button type={`${type}`} onClick={onClick} className={`text-white hover:bg-white hover:text-black  px-6 py-2 border rounded-md font-bold ${width}`} >{children}</button>
    }
}


export default Button