import { useState } from "react"

/* eslint-disable react/prop-types */
const Input = ({type, placeholder, children, id, onChange}) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor={`${id}`} className={`${focused ? 'text-blue font-medium' : 'text-dark-gray'} text-md text-left mb-2 `}>{children}</label>
            <input type={`${type}`} id={`${id}`} placeholder={`${placeholder}`} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} required name={`${id}`} className='px-2 py-2 w-full bg-gray rounded-md text-black text-sm focus:outline-blue' onChange={onChange} />
        </div>
    )
}

export default Input