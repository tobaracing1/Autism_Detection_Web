import { useState } from "react"

/* eslint-disable react/prop-types */
const BirthInput = ({type, placeholder, children, id, onChange, max, value="", width="w-full"}) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor={`${id}`} className={`${focused ? 'text-blue font-medium' : 'text-dark-gray'} text-sm text-left mb-2 lg:text-md`}>{children}</label>
            <input value={value} type={`${type}`} id={`${id}`} placeholder={`${placeholder}`} width={`${width}`}  max={`${max}`} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} required name={`${id}`} className='px-2 py-2 w-full bg-gray rounded-md text-black text-md focus:outline-blue' onChange={onChange} />
        </div>
    )
}

export default BirthInput