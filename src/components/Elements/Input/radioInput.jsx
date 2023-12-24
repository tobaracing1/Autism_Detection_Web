
/* eslint-disable react/prop-types */
const RadioInput = ({name, value, children, id, handleChange, check}) => {

    return (
        <div className=' flex flex-col w-full justify-center items-center h-full'>
            
            <div className="content w-full h-full flex justify-center items-center">
                <label htmlFor={`${id}`} className={` text-center w-full text-md text-left  rounded-none ${check == value? 'text-blue font-bold ' : 'text-dark-gray'}`}>{children}</label>
                <input type='radio' id={`${id}`} value={`${value}`} name={`${name}`} onChange={handleChange} className={`px-2 py-2 w-full bg-gray text-black text-sm focus:outline-blue hidden rounded-none`}  />
            </div>
            
        </div>
        
    )
}

export default RadioInput