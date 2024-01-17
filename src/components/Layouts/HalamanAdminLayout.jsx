import Header from "../Fragments/Header"
import Button from "../Elements/Button/Button"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useUser } from "../Layouts/userContext"
import UserAdd from "../Fragments/UserAdd"

async function deleteUser(id) {
    try {
        await axios.delete(`http://localhost:8082/api/users/${id}`)
        const updatedData = await axios.get("http://localhost:8082/api/users");
        return updatedData.data

    } catch (error) {
        console.error(error)
    }
}

async function addData(){

    try {
        const res = await axios.get("http://localhost:8082/api/users")
        return res.data
    } catch (error) {
        console.error(error)
    }
}

const EditFormLayout = () => {
    return (
        <div></div>
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

const Loading = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-t-4 border-solid border-current border-blue border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
    )
}

const AdminLayout = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState("users")
    const [filter, setFilter] = useState("AZ")
    const [here, setHere] = useState(true)
    const [isAddLayoutVisible, setIsAddLayoutVisible] = useState(false);

    const toggleAddLayout = () => {
        setIsAddLayoutVisible(!isAddLayoutVisible);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                
                if(page == 'users'){
                    const fetchData = await axios.get("http://localhost:8082/api/users")
                    setData(fetchData.data)
                }
                else if(page == 'childInformation'){
                    console.log("here")
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
        }

        try {
            console.log("page : " + page)
            setData([])
            fetchData()
        } catch (error) {
            console.error(error)
        }
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
        if (filter === "alphabetAZ") {
            setData(data.slice().sort((a, b) => a.email.localeCompare(b.email)));
        } else if (filter === "alphabetZA") {
            setData(data.slice().sort((a, b) => b.email.localeCompare(a.email)));
        } else if (filter === "oldestDate"){
            setData(data.slice().sort((a, b) => new Date(a.time) - new Date(b.time)));
        } else if (filter === "newestDate"){
            setData(data.slice().sort((a, b) => new Date(b.time) - new Date(a.time)));
        }
    }, [filter])

    

    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Header isAdmin={true}></Header>
            {isAddLayoutVisible && <AddLayout page={page} setIsAddLayoutVisible={setIsAddLayoutVisible} setData={setData}/>}
            <main className="box-border flex border w-screen h-full border border-blue bg-black ">
                
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
                                        <option value="alphabetAZ" defaultValue={true}>Alphabet A-Z</option>
                                        <option value="alphabetZA">Alphabet Z-A</option>
                                        <option value="oldestDate">Oldest Date</option>
                                        <option value="newestDate">Newest Date</option>
                                    </select>
                                </div>
                                
                                <div className="flex justify-center items-left flex-col country-container  w-full h-full">
                                    <div className="text-white text-md">Search</div>
                                    <div className="bar flex">
                                        <input type="text" name="search" id="search" className="block w-full h-8 rounded-md border-0 py-1.5 text-dark-gray shadow-sm ring-1 ring-inset ring-dark-gray focus:ring-2 focus:ring-inset focus:ring-black  focus:text-black sm:max-w-xs sm:text-sm sm:leading-6" />
                                        <button className="h-full"><img src="autism-detection-web\src\assets\icon\search.png" alt="search" onClick={() => search()} /></button>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                        <div className="middle flex justify-center items-center w-2/12  text-white text-2xl font-bold">{page}</div>

                        <div className="right w-5/12 flex justify-end mr-4">
                            <Button onClick={() => {toggleAddLayout()}}>+Add</Button>
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
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-blue" onClick={() => console.log()}>Edit</Button>
                                                                    <div className="mr-2"></div>
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-red" onClick={async () => {
                                                                        const deleted = await deleteUser(currData.id)
                                                                        const updatedData = await axios.get("http://localhost:8082/api/users");
                                                                        setData(updatedData.data);
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
                                                    <th className="p-4">Age</th>
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
                                                                <td className="p-4">{currData.childId}</td>
                                                                <td className="p-4">{currData.name}</td>
                                                                <td className="p-4">{currData.gender}</td>
                                                                <td className="p-4">{currData.birthday}</td>
                                                                <td className="p-4">{currData.etnic}</td>
                                                                <td className="p-4">{currData.age}</td>
                                                                <td className="p-4">{currData.time}</td>
                                                                <td className="p-4">{currData.testerRole}</td>
                                                                <td className="p-4 flex">
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-blue" onClick={() => console.log()}>Edit</Button>
                                                                    <div className="mr-2"></div>
                                                                    <Button variant={"primary"} width={"w-20"} bgColor="bg-red" onClick={() => {
                                                                        deleteChildInformation(currData.id)
                                                                        window.location.reload()
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