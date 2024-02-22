/* eslint-disable react/prop-types */
import Header from "../Fragments/Header"
import Button from "../Elements/Button/Button"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useUser } from "../Layouts/userContext"
import UserAdd from "../Fragments/UserAdd"
import UserEdit from "../Fragments/UserEdit"
import DeleteNotif from "../Fragments/DeleteNotif"



const DeleteConfirmLayout = ({page, setDeleteConfirm, setData, idP}) => {
    
    return (
        <div className="fixed top-0 left-0 h-full w-full bg-black/50">
            <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center items-center w-[20%]  bg-white p-8 rounded-md relative ">
                    <div className="w-full">
                        <DeleteNotif setDeleteConfirm={ setDeleteConfirm} page={page} setData={setData} idP={idP}></DeleteNotif>
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

const AdminLayout = () => {
    const [data, setData] = useState([])
    const [cloneData, setCloneData] = useState([])
    const [page, setPage] = useState("users")
    const [filter, setFilter] = useState("")
    const [here, setHere] = useState(true)
    const [isAddLayoutVisible, setIsAddLayoutVisible] = useState(false);
    const [isEditLayoutVisible, setIsEditLayoutVisible] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [currEditData, setCurrEditData] = useState({});
    const [deleteId, setDeleteId] = useState("");

    const toggleAddLayout = () => {
        setIsAddLayoutVisible(!isAddLayoutVisible);
    };

    const toggleEditLayout = (idP, emailP, nameP, birthdayP, genderP) => {
        setCurrEditData({idP, emailP, nameP, birthdayP, genderP});
        setIsEditLayoutVisible(!isEditLayoutVisible);
    }

    const toggleDeleteConfirm = () => {
        setDeleteConfirm(!deleteConfirm);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                
                if(page == 'users'){
                    const fetchData = await axios.get("http://localhost:8082/api/users")
                    setData(fetchData.data)
                }
                else if(page == 'childInformation'){
                    const fetchData = await axios.get("http://localhost:8082/api/childInformation")
                    setData(fetchData.data)

                }
                else if(page == 'diagnoseTest'){
                    const fetchData = await axios.get("http://localhost:8082/api/diagnostTest")
                    setData(fetchData.data)
                }
                
            } catch (error) {
                console.error(error)
            }

        }

        fetchData()
    }, [])
 
    useEffect(() => {
        async function fetchData() {
            try {
                if(page == 'users'){
                    const fetchData = await axios.get("http://localhost:8082/api/users")
                    setData(fetchData.data)
                    setCloneData(fetchData.data)
                }
                else if(page == 'childInformation'){
                    const fetchData = await axios.get("http://localhost:8082/api/childInformation")
                    setData(fetchData.data)
                    setCloneData(fetchData.data)
                }
                else if(page == 'diagnoseTest'){
                    const fetchData = await axios.get("http://localhost:8082/api/diagnostTest")
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
            setHere(true)
        }
        else{
            setHere(false)
        }
    }, [data])

    useEffect(() => {
        let filterCompare;
  
        if (page === "users") filterCompare = "email";
        if (page === "childInformation") filterCompare = "name";
        
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
            {deleteConfirm && <DeleteConfirmLayout page={page} setDeleteConfirm={setDeleteConfirm} idP={deleteId} setData={setData}/>}
            
            <main className="box-border flex border w-screen h-full  bg-black ">
                
                <aside className="flex flex-col w-1/5 border-r-4 border-dark-gray p-4 h-full ">
                    <button onClick={() => setPage("users")} className="w-full bg-white p-4 mb-4 rounded-md hover:bg-blue">User</button>
                    <button onClick={() => setPage("childInformation")} className="w-full bg-white p-4 rounded-md mb-4 hover:bg-blue">Child Information</button>
                    <button onClick={() => setPage("diagnoseTest")} className="w-full bg-white p-4 rounded-md mb-4 hover:bg-blue">Diagnose Test</button>
                </aside>

                <div className="right flex justify-center flex-col items-center w-4/5 m-4 ">
                    <div className="util flex justify-between items-center w-full h-20 bg-blue w-full">
                        <div className="left flex h-full items-center w-5/12 ml-4">
                            <div className="filter h-full w-full flex justify-left items-center">
                                <div className="flex justify-center items-left flex-col country-container  w-1/3 h-full mr-4">
                                    <div className="text-white text-md">Sort By</div>
                                    <select id="country" name="country" onChange={(e) => setFilter(e.target.value)}  className="block w-full h-8 rounded-md border-0 py-1.5 text-dark-gray shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-black focus:text-black sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option value="" disabled selected>Select Filter</option>
                                        <option value="alphabetAZ">Alphabet A-Z</option>
                                        <option value="alphabetZA">Alphabet Z-A</option>
                                        <option value="oldestDate">Oldest Date</option>
                                        <option value="newestDate">Newest Date</option>
                                    </select>
                                </div>
                                
                                <div className="flex justify-center items-left flex-col country-container  w-full h-full">
                                    <div className="text-white text-md">Search</div>
                                    <div className="bar flex">
                                        <input type="text" name="search" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block w-full h-8 rounded-md border-0 py-1.5 pl-2 text-dark-gray shadow-sm ring-1 ring-inset ring-dark-gray focus:ring-2 focus:ring-inset focus:ring-black  focus:text-black sm:max-w-xs sm:text-sm sm:leading-6" />
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                        <div className="middle flex justify-center items-center w-2/12  text-white text-2xl font-bold">{page}</div>

                        <div className="right w-5/12 flex justify-end mr-4">
                            {page === "users" && <Button onClick={() => {toggleAddLayout()}}>+Add</Button>}
                            
                        </div>
                    </div>
                    <div className="content flex flex-col w-full h-full border bg-white rounded-md overflow-auto">
                        {here ? <Loading /> 
                        :   (
                                <table className="table-auto">
                                    {page === "users" && (
                                        <>
                                            <thead>
                                                <tr className="text-md text-left">
                                                    <th className="p-4">No</th>
                                                    <th className="p-4">Email</th>
                                                    <th className="p-4">Id</th>
                                                    <th className="p-4">Name</th>
                                                    <th className="p-4">Birthday</th>
                                                    <th className="p-4">Gender</th>
                                                    <th className="p-4">Role</th>
                                                    <th className="p-4">Option</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                                {
                                                    data.map((currData, index) => {
                                                        return (
                                                            <tr className="text-md text-left" key={index}>
                                                                <td className="p-4">{index + 1}</td>
                                                                <td className="p-4">{currData.email}</td>
                                                                <td className="p-4">{currData.id}</td>
                                                                <td className="p-4">{currData.name}</td>
                                                                <td className="p-4">{currData.birthday}</td>
                                                                <td className="p-4">{currData.gender}</td>
                                                                <td className="p-4">{currData.role}</td>
                                                                <td className="p-4 flex">
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-light-blue" onClick={() => toggleEditLayout(currData.id, currData.email, currData.name, currData.birthday, currData.gender)}>Edit</Button>
                                                                    <div className="mr-2"></div>
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-light-red" onClick={async () => {
                                                                        await setDeleteId(currData.id)
                                                                        toggleDeleteConfirm()
                                                                    }
                                                                }>Delete</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </>
                                    )}

                                    {page === "childInformation" && (
                                        <>
                                            <thead>
                                                <tr className="text-md text-left">
                                                    <th className="p-4">No</th>
                                                    <th className="p-4">ChildId</th>
                                                    <th className="p-4">Name</th>
                                                    <th className="p-4">Gender</th>
                                                    <th className="p-4">Birthday</th>
                                                    <th className="p-4">Etnic</th>
                                                    <th className="p-4">Time</th>
                                                    <th className="p-4">TesterRole</th>
                                                    <th className="p-4">Option</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                                {
                                                    data.map((currData, index) => {
                                                        return (
                                                            <tr className="text-md text-left" key={index}>
                                                                <td className="p-4">{index + 1}</td>
                                                                <td className="p-4">{currData.id}</td>
                                                                <td className="p-4">{currData.name}</td>
                                                                <td className="p-4">{currData.gender}</td>
                                                                <td className="p-4">{currData.birthday}</td>
                                                                <td className="p-4">{currData.etnic}</td>
                                                                <td className="p-4">{currData.time ? 
                                                                    new Date(currData.time._seconds * 1000).toLocaleDateString('en-US', {
                                                                        day: 'numeric',
                                                                        month: 'long',
                                                                        year: 'numeric',
                                                                    }) 
                                                                    : 'N/A'}
                                                                </td>
                                                                <td className="p-4">{currData.testerRole}</td>
                                                                <td className="p-4 flex">
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-gray" disabled={true}>Edit</Button>
                                                                    <div className="mr-2"></div>
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-gray" disabled={true}>Delete</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </>
                                    )}

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

    const {user}  = useUser() 

    const getUser = async (uid) => {
        const getUserData = await axios.get(`http://localhost:8082/api/users/${uid}`)
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
            {admin && loading != true ? <AdminLayout /> : <ForbiddenPage />}
        </>
       
    )
}

export default HalamanAdmin