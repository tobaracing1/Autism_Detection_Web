/* eslint-disable react/prop-types */
const Point = ({title, desc, image}) => {
   return  (
   <div className="flex flex-col items-center mx-8 mb-8 w-full flex-wrap min-w-[5%] max-w-[50%] lg:max-w-[20%] lg:mb-0">
        <img src={`./src/assets/${image}`} alt="" className=' mb-4 min-w-[15%] max-w-[60%]'/>
        <div className="flex flex-col items-center justify-center">
            <div className='mb-4 text-white text-2xl font-bold text-center'>{title}</div>
            <div className='text-white text-center text-sm'>{desc}</div>
        </div>
        
    </div>
   )
}

export default Point