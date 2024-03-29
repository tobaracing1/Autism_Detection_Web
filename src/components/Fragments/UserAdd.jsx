/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Input from "../Elements/Input/Input";
import RadioInput from "../Elements/Input/radioInput";
import BirthInput from "../Elements/Input/birthInput";
import Button from "../Elements/Button/Button";
import axios from "axios";
import { useUser } from "../Layouts/userContext";

const UserAdd = ({ setIsAddLayoutVisible, page, setData }) => {
  const [checked, setChecked] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useUser();

  function handleChange(e) {
    setChecked(e.target.value);
    setGender(e.target.value);
  }

  function closeLayout() {
    setIsAddLayoutVisible(false);
  }

  const addUser = async () => {
    try {
      if (checked == "" || email == "" || password == "" || username == "")
        throw new Error("Please fill all the fields");

      if (password.length < 6) {
        throw new Error("Password must be atleast 6 characters");
      }

      const saveUserData = await axios.post(
        "http://localhost:8082/api/users/add",
        {
          name: username,
          role: role,
          birthday: birthday,
          gender: gender,
          email: email,
          password: password,
        },token
      );

      if (saveUserData.data.code == "auth/invalid-email")
        throw new Error("Invalid email format");

      setIsAddLayoutVisible(false);
      const fetchData = await axios.get("http://localhost:8082/api/users", token);
      setData([...fetchData.data.userData]);
    } catch (error) {
      const errorContainer = document.getElementById("errorMessage");

      errorContainer.style.display = "flex";

      if (error.response) {
        // Handle other server errors

        // Check specifically for Firebase authentication errors
        if (
          error.response.data.errorInfo &&
          error.response.data.errorInfo.code === "auth/invalid-email"
        ) {
          errorContainer.innerHTML = "Invalid email format";
        } else {
          // Handle other server errors
          errorContainer.innerHTML = "Server error: " + error.response.status;
        }
      } else if (error.request) {
        errorContainer.innerHTML = "No response from server";
      } else {
        errorContainer.innerHTML = error.message;
      }
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        onClick={closeLayout}
        className="absolute top-8 right-8 font-bold"
      >
        X
      </button>
      <div className="text-lg font-bold my-4">User</div>
      <div
        className=" text-sm mb-8 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25"
        id="errorMessage"
      ></div>
      <Input
        placeholder={"Email"}
        type={"email"}
        id={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        Email
      </Input>
      <Input
        placeholder={"Password"}
        type={"input"}
        id={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        Password
      </Input>
      <Input
        placeholder={"Name"}
        type={"input"}
        id={"name"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      >
        Name
      </Input>

      <div className="radioInput w-full flex flex-col justify-center items-center mb-4">
        <label
          htmlFor=""
          className=" w-full text-md text-left text-dark-gray mb-2"
        >
          Gender
        </label>
        <div className="radio flex justify-center items-center w-full p-1 border border-dark-gray rounded-md">
          <RadioInput
            name={"gender"}
            value={"male"}
            id={"male"}
            handleChange={handleChange}
            check={checked}
          >
            Male
          </RadioInput>
          <RadioInput
            name={"gender"}
            value={"Female"}
            id={"Female"}
            handleChange={handleChange}
            check={checked}
          >
            Female
          </RadioInput>
        </div>
      </div>

      <BirthInput
        type={"date"}
        id={"birthday"}
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        max={"2007-12-31"}
      >
        Birthday
      </BirthInput>

      <Button
        variant={"primary"}
        width={"w-full"}
        onClick={() => addUser()}
        disabled={loading}
      >
        {loading ? "Loading..." : "Add"}
      </Button>
    </div>
  );
};

export default UserAdd;
