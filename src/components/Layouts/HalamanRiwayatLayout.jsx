import { useState } from "react";
import Header from "../Fragments/Header";
import Button from "../Elements/Button/Button";
import Footer from "../Fragments/Footer";

const HalamanRiwayat = () => {
  const [isBoxExpanded, setIsBoxExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsBoxExpanded(!isBoxExpanded);
  };

  const childData = [{
    childId: "asdasdasda",
    name: "asd",
    birthday: "asd",
    etnic: "asd",
    gender: "asd",
    registerDate: "asd",
    },{
      childId: "asdasdasda",
      name: "asd",
      birthday: "asd",
      etnic: "asd",
      gender: "asd",
      registerDate: "asd",
      },
      {
        childId: "asdasdasda",
        name: "asd",
        birthday: "asd",
        etnic: "asd",
        gender: "asd",
        registerDate: "asd",
        },
        {
          childId: "asdasdasda",
          name: "asd",
          birthday: "asd",
          etnic: "asd",
          gender: "asd",
          registerDate: "asd",
          },
          {
            childId: "asdasdasda",
            name: "asd",
            birthday: "asd",
            etnic: "asd",
            gender: "asd",
            registerDate: "asd",
            }
    
  ]

  return (
    <div className="flex flex-col justify-center items-center w-screen h-full">
      <Header page={"halamanRiwayat"}></Header>
      <div className="mt-20"></div>
      <div className='flex flex-col items-center w-[50%] my-16'>
          <div className="text-black text-center text-4xl font-bold mb-8">Diagnose History</div>
          <div className="text-black text-lg text-center">Users can view information about results and children who have been diagnosed on this website via this page.</div>
      </div>
      <div className="w-[80%] overflow-x-scroll lg:w-[60%] mb-16">
        <table className="table-auto mt-8 w-full">
          <thead>
            <tr className="text-md text-left">
              <th className="p-4">No</th>
              <th className="p-4">childID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Diagnose Date</th>
              <th className="p-4">Last D. Date</th>
              <th className="p-4">D. Count</th>
              <th className="p-4" >Result</th>
              <th className="p-4">Option</th>
            </tr>
          </thead>
          <tbody>
            {childData.map((currData, index) => (
              <tr className="text-md text-left" key={index}>
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{currData.childId}</td>
                <td className="p-4">{currData.name}</td>
                <td className="p-4">{currData.birthday}</td>
                <td className="p-4">{currData.etnic}</td>
                <td className="p-4">{currData.gender}</td>
                {/* <td className="p-4">{currData.time ? 
                      new Date(currData.time._seconds * 1000).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      }) 
                      : 'N/A'
                    }</td> */}
                <td className="p-4 flex " >
                  <Button variant={"primary"} width={"w-32"} bgColor="bg-white" onClick={async () => {await useRegisteredChild(currData.childId, currData.name, currData.birthday, currData.etnic, currData.gender)}}>
                    See Full
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HalamanRiwayat;
