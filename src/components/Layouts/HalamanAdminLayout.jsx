/* eslint-disable react/prop-types */
import Header from "../Fragments/Header"
import Button from "../Elements/Button/Button"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useUser } from "../Layouts/userContext"
import UserAdd from "../Fragments/UserAdd"
import UserEdit from "../Fragments/UserEdit"
import DeleteNotif from "../Fragments/DeleteNotif"
import UserTableContent from "./adminPageLayout/UserTableContent"
import ChildInformationTableContent from "./adminPageLayout/ChildInformationTableContent"
import TableFeature from "./adminPageLayout/TableFeature"

const DeleteConfirmLayout = ({page, setDeleteConfirm, setData, dataKey}) => {
    
    return (
        <div className="fixed top-0 left-0 h-full w-full bg-black/50">
            <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center items-center w-min  bg-white p-8 rounded-md relative ">
                    <div className="w-full">
                        <DeleteNotif setDeleteConfirm={ setDeleteConfirm} page={page} setData={setData} idP={dataKey}></DeleteNotif>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddLayout = ({page, setIsAddLayoutVisible, setData}) => {
    return (
        <div className="fixed top-0 left-0 h-full w-full bg-black/50">
            <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center items-center w-[20%]  bg-white p-8 rounded-md relative ">
                    <div className="w-full">
                        <UserAdd setIsAddLayoutVisible={setIsAddLayoutVisible} page={page} setData={setData}></UserAdd>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EditLayout = ({page, setIsEditLayoutVisible, setData, idP, emailP, nameP, birthdayP, genderP}) => {
    
    return (
        <div className="fixed top-0 left-0 h-full w-full bg-black/50">
            <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center items-center w-[20%]  bg-white p-8 rounded-md relative ">
                    <div className="w-full">
                        <UserEdit setIsEditLayoutVisible={setIsEditLayoutVisible} page={page} setData={setData} idP={idP} emailP={emailP} nameP={nameP} birthdayP={birthdayP} genderP={genderP}></UserEdit>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Loading = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-t-4 border-solid border-current border-blue border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
    )
}

const AdminLayout = ({ token }) => {
    const [data, setData] = useState([])
    const [cloneData, setCloneData] = useState([])
    const [page, setPage] = useState("users")
    const [filter, setFilter] = useState("")
    const [dataFetched, setDataFetched] = useState(true)
    const [isAddLayoutVisible, setIsAddLayoutVisible] = useState(false);
    const [isEditLayoutVisible, setIsEditLayoutVisible] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [currEditData, setCurrEditData] = useState({});
    const [deleteId, setDeleteId] = useState("");

    const toggleAddLayout = () => {
        setIsAddLayoutVisible((prev) => !prev);
    };

    const toggleEditLayout = (idP, emailP, nameP, birthdayP, genderP) => {
        setCurrEditData({idP, emailP, nameP, birthdayP, genderP});
        setIsEditLayoutVisible((prev) => !prev);
    }

    const toggleDeleteConfirm = (dataKey) => {
        setDeleteId(dataKey);
        setDeleteConfirm((prev) => !prev);
    };
 
    useEffect(() => {

        async function fetchData() {
            try {
                if(page === 'users'){
                    const fetchData = await axios.get("http://localhost:8082/api/users", token)
                    setData(fetchData.data.userData)
                    setCloneData(fetchData.data.userData)

                }
                else if(page === 'childInformation'){
                    const fetchData = await axios.get("http://localhost:8082/api/childInformation", token)
                    setData(fetchData.data.childData)
                    setCloneData(fetchData.data.childData)

                }
                else if(page === 'diagnoseTest'){
                    const fetchData = await axios.get("http://localhost:8082/api/diagnostTest", token)
                    setData(fetchData.data)
                    setCloneData(fetchData.data)
                }
            } catch (error) {
                console.error(error)
            }
            
        }

        setData([])
        fetchData()
    }, [page])

    useEffect(() => {
        if(data === undefined || data.length === 0){
            setDataFetched(true)
        }
        else{
            setDataFetched(false)
        }
    }, [data])

    useEffect(() => {
        let filterCompare;
  
        if (page === "users"){
            filterCompare = "email";
        } 
        else if (page === "childInformation") {
            filterCompare = "name";
        }
        
        if (filter === "alphabetAZ") {
            setData(data.slice().sort((a, b) => a[filterCompare].localeCompare(b[filterCompare])));
        } else if (filter === "alphabetZA") {
            setData(data.slice().sort((a, b) => b[filterCompare].localeCompare(a[filterCompare])));
        } else if (filter === "oldestDate") {
            setData(data.slice().sort((a, b) => {
            if (page === "childInformation") {
                return new Date(b.time._seconds * 1000) - new Date(a.time._seconds * 1000);
            } else if (page === "users") {
                return new Date(a.time) - new Date(b.time);
            }
            return 0; 
            }));
        } else if (filter === "newestDate") {
            setData(data.slice().sort((a, b) => {
            if (page === "childInformation") {
                return new Date(a.time._seconds * 1000) - new Date(b.time._seconds * 1000);
            } else if (page === "users") {
                return new Date(b.time) - new Date(a.time);
            }
            return 0; 
            }));
        }
      }, [filter]);
      
    useEffect(() => {
        if (searchTerm === "") {
            setData(cloneData);
        }
        else {
            if(page == "users"){
                const newData = cloneData.filter((item) => {
                    return (item.email && item.email.includes(searchTerm)) || (item.name && item.name.includes(searchTerm));
                });
        
                if (newData.length === 0) {
                    return setData([])
                }
        
                setData(newData);
            }
            else if(page == "childInformation"){
                const newData = cloneData.filter((item) => {
                    const lowercaseName = item.name && item.name.toLowerCase();
                    const lowercaseSearchTerm = searchTerm.toLowerCase();
                
                    return lowercaseName && lowercaseName.includes(lowercaseSearchTerm);
                });

                if (newData.length === 0) {
                    return setData([])
                }
        
                setData(newData);
            }
            
        }
    }, [searchTerm])
    
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Header isAdmin={true}></Header>
            {isAddLayoutVisible && <AddLayout page={page} setIsAddLayoutVisible={setIsAddLayoutVisible} setData={setData}/>}

            {isEditLayoutVisible && <EditLayout page={page} setIsEditLayoutVisible={setIsEditLayoutVisible} setData={setData} idP={currEditData.idP} emailP={currEditData.emailP} nameP={currEditData.nameP} birthdayP={currEditData.birthdayP} genderP={currEditData.genderP}/>}

            {deleteConfirm && <DeleteConfirmLayout page={page} setDeleteConfirm={setDeleteConfirm} dataKey={deleteId} setData={setData}/>}
            
            <main className="box-border flex border w-screen h-full  bg-black ">
                
                <aside className="flex flex-col w-1/5 border-r-4 border-dark-gray p-4 h-full ">
                    <button onClick={() => setPage("users")} className="w-full bg-white p-4 mb-4 rounded-md hover:bg-blue">User</button>
                    <button onClick={() => setPage("childInformation")} className="w-full bg-white p-4 rounded-md mb-4 hover:bg-blue">Child Information</button>
                    <button onClick={() => setPage("diagnoseTest")} className="w-full bg-white p-4 rounded-md mb-4 hover:bg-blue">Diagnose Test</button>
                </aside>

                <div className="right flex justify-center flex-col items-center w-4/5 m-4 ">
                    <TableFeature page={page} setFilter={setFilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleAddLayout={toggleAddLayout}  />
                    <div className="content flex flex-col w-full h-full border bg-white rounded-md overflow-auto">
                        {dataFetched ? <Loading /> 
                        :   (

                                <table className="table-auto">
                                    {page === "users" && <UserTableContent data={data} toggleEditLayout={toggleEditLayout} toggleDeleteConfirm={toggleDeleteConfirm}/>}
                                    
                                    {page === "childInformation" && <ChildInformationTableContent data={data}/>}

                                    {page === "diagnoseTest" && (
                                        <div>test2</div>
                                    )}
                                </table> 
                            )
                        
                        }
                    </div>
                </div>
                    
            </main>
        </div>
    )
}

function ForbiddenPage() {
    return <div>You are not authorized to view this page.</div>;
}



const HalamanAdmin = () => {
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(false)

    const {user, token}  = useUser() 

    const getUser = async (uid) => {
        
        const getUserData = await axios.get(`http://localhost:8082/api/users/${uid}`, token)
        
        return getUserData.data
    }

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                setLoading(true);
                if (user && user.uid) {
                    const userData = await getUser(user.uid);
                    const userRole = userData.role;
                    setAdmin(userRole === "admin");
                } else {
                    setAdmin(false);
                }
            } catch (error) {
                console.error("Error fetching user role:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchUserRole();
    
    }, [user]);
    

    return(
        <>
            {admin && loading != true ? <AdminLayout token={token} /> : <ForbiddenPage />}
        </>
       
    )
}

export default HalamanAdmin