/* eslint-disable react/prop-types */
import Header from '../Fragments/Header'
import Footer from '../Fragments/Footer'
import { useState, useEffect } from 'react'
import { useUser } from './userContext'
import Bar from '../Fragments/Bar'
import ChildInformationLayout from './testPageLayout/HalamanChildInformationLayout'
import RegisteredChildLayout from './testPageLayout/HalamanRegisteredChild'
import Q1Layout from './testPageLayout/HalamanQ1Layout'
import Q2Layout from './testPageLayout/HalamanQ2Layout'


const ProgressBar= ({percent}) => {
    return (
        <div className=" w-full  flex flex-col items-center my-32">
            <div className="emptyContainer h-20"></div>
            <div className='text-black text-xl font-semibold mb-4'>Diagnostic Progress</div>
            <Bar percent={percent}/>
        </div>
    )
}

const PageTitle = ({currentPage, useRegisteredChild}) => {

    const Page0 = () => {
        const DefaultTitle = () => {
            return (
                <div className='flex flex-col items-center w-[60%] '>
                    <div className="text-black text-center text-4xl font-bold mb-8">Child Information</div>
                    <div className="text-black text-lg text-center">In order to diagnose autism in children, information is needed about the child to support the analysis that will be carried out by the system. Please fill in the data of the child you want to diagnose or use the data of a child who is already registered in the system.</div>
                </div>
            )
        }

        const RegisteredChildTitle = () => {
            return (
                <div className='flex flex-col items-center w-[60%] '>
                    <div className="text-black text-4xl font-bold mb-8">Registered Child</div>
                    <div className="text-black text-lg text-center">In order to diagnose autism in children, information is needed about the child to support the analysis that will be carried out by the system. Please fill in the data of the child you want to diagnose or use the data of a child who is already registered in the system.</div>
                </div>
            )
        }


        return (
            useRegisteredChild ? <RegisteredChildTitle/> : <DefaultTitle/>
        )
    }

    const Page1 = () => {
        return (
            <div className='flex flex-col items-center w-[60%] '>
                <div className="text-black text-center text-4xl font-bold mb-8">1 - 5 Questions</div>
                <div className="text-black text-lg text-center">To be able to diagnose whether a child who has been diagnosed with autism requires information that will be taken based on the answers to the questions that will be displayed, please answer the questions below based on observations and experiences of the child who has been diagnosed.</div>
            </div>
        )
    }

    const Page2 = () => {
        return (
            <div className='flex flex-col items-center w-[60%] '>
                <div className="text-black text-center text-4xl font-bold mb-8">6 - 10 Questions</div>
                <div className="text-black text-lg text-center">To be able to diagnose whether a child who has been diagnosed with autism requires information that will be taken based on the answers to the questions that will be displayed, please answer the questions below based on observations and experiences of the child who has been diagnosed.</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center w-full justify-center mb-20">
            {currentPage === 0 && <Page0/>}
            {currentPage === 1 && <Page1/>}
            {currentPage === 2 && <Page2/>}
            {currentPage === 3 && <Page3/>}
            {currentPage === 4 && <Page4/>}
            {currentPage === 5 && <Page5/>}
        </div>
        
    )
}

const PageContent = ({currentPage, setCurrentPage, useRegisteredChild, setUseRegisteredChild, childInformationData, setChildInformationData, questionData, setQuestionData}) => {
    
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

    return (
        <>
            {currentPage === 0 && useRegisteredChild && <RegisteredChildLayout currentPage={currentPage} setCurrentPage={setCurrentPage} setUseRegisteredChild={setUseRegisteredChild} childInformationData={childInformationData} setChildInformationData={setChildInformationData}/> }
            {currentPage === 0 && !useRegisteredChild && <ChildInformationLayout currentPage={currentPage} setCurrentPage={setCurrentPage} setUseRegisteredChild={setUseRegisteredChild} childInformationData={childInformationData} setChildInformationData = {setChildInformationData} />}
            {currentPage === 1 && <Q1Layout currentPage={currentPage} setCurrentPage={setCurrentPage} questionData={questionData} setQuestionData = {setQuestionData}/>}
            {currentPage === 2 && <Q2Layout currentPage={currentPage} setCurrentPage={setCurrentPage} questionData={questionData} setQuestionData = {setQuestionData}/>}
            {currentPage === 3 && <Q3Layout/>}
            {currentPage === 4 && <DiagnosticResultsLayout/>}
        </>
        
    )
}


const HalamanTest= () => {
    const {user} = useUser()
    const [currentPage, setCurrentPage] = useState(0);
    const [percent, setPercent] = useState("0");
    const [useRegisteredChild, setUseRegisteredChild] = useState(false)
    const [childInformationData, setChildInformationData] = useState([{}])
    const [questionData, setQuestionData] = useState([{}])

    useEffect(() => {
        if(currentPage === 0){
            setPercent("20")
        }
        else if(currentPage === 1){
            setPercent("40")
        }
        else if(currentPage === 2){
            setPercent("60")
        }
        else if(currentPage === 3){
            setPercent("80")
        }
        else if(currentPage === 4){
            setPercent("100")
        }
        else{
            setPercent("100")   
        }
        console.log(currentPage)
    }, [currentPage])

    return(
        <div className='flex flex-col w-full h-full justify-between align-center'>
            <Header></Header>
            <ProgressBar  percent={percent}/>
            <PageTitle currentPage={currentPage} useRegisteredChild={useRegisteredChild} ></PageTitle>
            <PageContent currentPage={currentPage} setCurrentPage={setCurrentPage} useRegisteredChild={useRegisteredChild} setUseRegisteredChild={setUseRegisteredChild} childInformationData={childInformationData} setChildInformationData = {setChildInformationData} questionData={questionData} setQuestionData = {setQuestionData} />
            <Footer></Footer>
        </div>
    )
}

export default HalamanTest