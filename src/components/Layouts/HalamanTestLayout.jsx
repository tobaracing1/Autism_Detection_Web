import Header from '../Fragments/Header'
import Footer from '../Fragments/Footer'
import { useState, useEffect } from 'react'
import { useUser } from './userContext'
import TestDesc from '../Fragments/TestDesc'


const ChildInformationLayout = () => {
    
    
    return (
        
        <div className="page1 h-screen w-full border border-red flex flex-col items-center my-20">
            <div className="emptyContainer h-20"></div>
            <TestDesc percent={5}/>
        </div>
    )
}

const RegisteredChildLayout = () => {
    return (
        <div className="page2"></div>
    )
}

const Q1Layout = () => {
    return (
        <div className="page3"></div>
    )
}

const Q2Layout = () => {
    return (
        <div className="page4"></div>
    )
}

const Q3Layout = () => {
    return (
        <div className="page5"></div>
    )
}

const DiagnosticResultsLayout = () => {
    return (
        <div className="page6"></div>
    )
}

const HalamanTest= () => {
    const {user} = useUser()
    const [currentPage, setCurrentPage] = useState(0);

    return(
        <div className='flex flex-col w-full h-full'>
            <Header></Header>
            
            {currentPage === 0 && <ChildInformationLayout/>}
            {currentPage === 1 && <RegisteredChildLayout/>}
            {currentPage === 2 && <Q1Layout/>}
            {currentPage === 3 && <Q2Layout/>}
            {currentPage === 4 && <Q3Layout/>}
            {currentPage === 5 && <DiagnosticResultsLayout/>}

            <Footer></Footer>
        </div>
    )
}

export default HalamanTest