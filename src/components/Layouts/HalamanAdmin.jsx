import Header from "../Fragments/Header"

const HalamanAdmin = () => {
    
    
    return(
        <div className="flex flex-col items-center">
            <Header isAdmin={true}></Header>
            
            <main className="flex w-full border mt-20 w-full h-[91.8vh] fixed border border-white bg-black -z-50">
                <aside className="flex flex-col w-1/5 border-r-4 border-dark-gray p-4 h-full ">
                    <a href="">User</a>
                    <a href="">Diagnose</a>
                    <a href="">Aaaa</a>
                </aside>

                <div className="content w-4/5 m-4 flex flex-col justify-center items-center w-full sticky top-0 bottom-0 bg-white">
                    <div className="util"></div>
                    <table>
                        <th>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </th>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default HalamanAdmin