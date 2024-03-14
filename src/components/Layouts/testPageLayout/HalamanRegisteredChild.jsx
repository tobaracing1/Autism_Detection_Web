import Button from "../../Elements/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../userContext";

const RegisteredChildLayout = ({ currentPage, setCurrentPage, setUseRegisteredChild, childInformationData, setChildInformationData }) => {
  const [childData, setChildData] = useState([])
  const [loading, setLoading] = useState(true)

  const { user, token } = useUser()

  useEffect(() => {

    async function fetchData() {
      const id = user.uid
      const fetchChildData = await axios.get(`http://localhost:8082/api/childInformation/${id}`, token)
      setChildData(fetchChildData.data)
    }

    try {
      fetchData()
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }

  }, [])

  function nextPage() {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  }

  function useRegisteredChild(childId, name, birthday, etnic, gender) {
    setChildInformationData({
      childId: childId,
      name: name,
      birthday: birthday,
      etnic: etnic,
      gender: gender,
      check: gender
    })
    nextPage()
  }

  function TableContent() {
    return (
      <table className="table-auto mt-8">
        <thead>
          <tr className="text-md text-left">
            <th className="p-4">No</th>
            <th className="p-4">childID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Birthday</th>
            <th className="p-4">Etnic</th>
            <th className="p-4">Gender</th>
            <th className="p-4">Register Date</th>
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
              <td className="p-4">{currData.time ?
                new Date(currData.time._seconds * 1000).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
                : 'N/A'
              }</td>
              <td className="p-4 flex">
                <Button variant={"primary"} width={"w-20"} bgColor="bg-orange" onClick={() => { useRegisteredChild(currData.childId, currData.name, currData.birthday, currData.etnic, currData.gender) }}>
                  Use
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className="page1 h-screen w-full flex flex-col items-center ">
      <div className="flex flex-col justify-center items-center box-border rounded-lg w-[80%] border p-8">
        <div className="w-full flex justify-start">
          <Button variant={"primary"} width={"w-20"} bgColor="bg-white" onClick={async () => { setUseRegisteredChild(false) }}>
            Back
          </Button>
        </div>
        <div className="w-[80%] overflow-x-scroll flex flex-col items-center">
          {loading && <div className="h-40 flex justify-center items-center font-bold text-xl text-center"> Getting Your Registered Child Information...</div>}
          {!loading && <TableContent />}
          {!loading && childData.length == 0 && <div className="h-40 flex justify-center items-center font-bold text-xl text-center"> No Registered Child</div>}
        </div>

      </div>
    </div>
  );
};

export default RegisteredChildLayout;
