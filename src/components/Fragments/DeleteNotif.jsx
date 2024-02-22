/* eslint-disable react/prop-types */
import Button from "../Elements/Button/Button";
import axios from "axios";

const DeleteNotif = ({ setDeleteConfirm, page, setData, idP }) => {

  function closeLayout() {
    setDeleteConfirm(false);
  }

  async function deleteUser() {
    try {
        await axios.delete(`http://localhost:8082/api/users/${idP}`)
        const updatedData = await axios.get("http://localhost:8082/api/users");
        setData(updatedData.data)
        closeLayout()

    } catch (error) {
        console.log(error)
    }
    }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-xl font-bold my-4">Warning!</div>
      <div className="text-md text-center mb-8">Are you sure you want to delete this user ({idP})?</div>
      <div className="w-full flex justify-between items-center">
        <Button variant={"primary"} bgColor="bg-light-red" width={"w-[44%]"} onClick={() => deleteUser()}>
            YES
        </Button>
        <Button variant={"primary"} bgColor="bg-light-blue" width={"w-[44%]"} onClick={() => closeLayout()}>
            NO
        </Button>
      </div>
    </div>
  );
};

export default DeleteNotif;