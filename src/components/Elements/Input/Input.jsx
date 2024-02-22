import { useState } from "react"

/* eslint-disable react/prop-types */
const Input = ({type, placeholder, children, id, onChange, value="", unchangeable=false}) => {
    const [focused, setFocused] = useState(false)
    
    return (
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor={`${id}`} className={`${focused ? 'text-blue font-medium' : 'text-dark-gray'} text-sm text-left mb-2 lg:text-md `}>{children}</label>
            <input type={`${type}`} id={`${id}`} placeholder={`${placeholder}`} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} disabled={unchangeable} required name={`${id}`} value={value}  className='px-2 py-2 w-full bg-gray rounded-md text-black text-xs focus:outline-blue lg:text-lg' onChange={onChange} />
        </div>
    )
}

export default Input