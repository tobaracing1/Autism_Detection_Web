/* eslint-disable react/prop-types */
import Button from "../Elements/Button/Button";
import axios from "axios";
import { useUser } from "../Layouts/userContext";
import { useState } from "react";

const DeleteNotif = ({ setDeleteConfirm, page, setData, idP }) => {
  const { token } = useUser();
  const [loading, setLoading] = useState(false);

  function closeLayout() {
    setDeleteConfirm(false);
  }

  const Loading = () => {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-t-4 border-solid border-current border-blue border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    );
  };

  async function deleteUser() {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:8082/api/users/${idP}`, token);
      const updatedData = await axios.get(
        "http://localhost:8082/api/users",
        token
      );
      setData(updatedData.data.userData);
      closeLayout();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-w-fit flex flex-col justify-center items-center">
      <div className="text-xl font-bold my-4">Warning!</div>
      <div className="text-md text-center mb-8">
        Are you sure you want to delete this user ({idP})?
      </div>
      <div className="w-full flex justify-between items-center">
        {loading && <Loading />}
        {!loading && (
          <>
            <Button
              variant={"primary"}
              bgColor="bg-light-red"
              width={"w-[44%]"}
              onClick={() => deleteUser()}
            >
              YES
            </Button>
            <Button
              variant={"primary"}
              bgColor="bg-light-blue"
              width={"w-[44%]"}
              onClick={() => closeLayout()}
            >
              NO
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteNotif;
