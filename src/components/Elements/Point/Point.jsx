/* eslint-disable react/prop-types */
const Point = ({title, desc, image}) => {
   return  (
   <div className="flex flex-col items-center mx-8 w-full flex-wrap min-w-[20%]">
        <img src={`./src/assets/${image}`} alt="" className=' mb-4 min-w-[20%]'/>
        <div className="flex flex-col items-center justify-center">
            <div className='mb-4 text-white text-2xl font-bold text-center'>{title}</div>
            <div className='text-white text-center text-sm'>{desc}</div>
        </div>
        
    </div>
   )
}

export default Point