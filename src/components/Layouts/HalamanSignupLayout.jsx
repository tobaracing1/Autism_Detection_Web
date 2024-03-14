/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import BirthInput from "../Elements/Input/birthInput";
import RadioInput from "../Elements/Input/radioInput";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../script/firebase_key";
import { useUser } from "./userContext";

const HalamanSignup = () => {
  const [checked, setChecked] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();

  useEffect(() => {
    if (!(Object.keys(user).length === 0)) {
      window.location.href = "/";
    }
  });

  function handleChange(e) {
    setChecked(e.target.value);
    setGender(e.target.value);
  }

  const signUp = async () => {
    try {
      setLoading(true);
      if (
        checked == "" ||
        email == "" ||
        password == "" ||
        confirm_password == "" ||
        username == ""
      )
        throw new Error("Please fill all the fields");

      if (password.length < 6) {
        throw new Error("Password must be atleast 6 characters");
      }
      if (password != confirm_password)
        throw new Error("Password doesn't match");

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const saveUserData = await axios.post("http://localhost:8082/api/users", {
        name: username,
        role: role,
        birthday: birthday,
        gender: gender,
        id: userCredential.user.uid,
      });

      window.location.href = "/";
    } catch (error) {
      const errorContainer = document.getElementById("errorMessage");

      errorContainer.style.display = "flex";
      if (error.code === "auth/email-already-in-use") {
        errorContainer.innerHTML = "Email already in use";
      } else if (error.code === "auth/weak-password") {
        errorContainer.innerHTML = "Password must be atleast 6 characters";
      } else if (error.code === "auth/invalid-email") {
        errorContainer.innerHTML = "Please enter valid email";
      } else {
        errorContainer.innerHTML = error.message;
      }
    } finally {
      setLoading(false);
    }
  };
  setConfirmPassword;
  return (
    <div className="Signup w-screen h-full flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue to-orange">
      <button
        className="flex justify-center my-8 items-center top-10 left-20 right-20"
        onClick={() => (window.location.href = "/")}
      >
        <img src="./src/assets/deautism.png" alt="LOGO" className="" />
      </button>

      <div
        action=""
        method="POST"
        className=" w-[80%] p-8 flex flex-col mb-8 justify-center items-center bg-white border border-dark-gray rounded-lg lg:w-2/5 lg:p-16 lg:mb-0"
      >
        <div className="title font-bold text-center text-2xl mb-2 lg:text-3xl">
          Signup to take test
        </div>
        <div className="text-xs text-dark-gray mb-8 lg:text-sm">
          It is recommended that you be over 17 years of age to register
        </div>
        <div
          className=" text-xs mb-8 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25 "
          id="errorMessage"
        ></div>
        <div className="content flex flex-col w-full mb-8 lg:flex-row">
          <div className="left w-full mr-16 lg:w-1/2">
            <Input
              placeholder={"Enter your email"}
              value={email}
              type={"email"}
              id={"email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              Email
            </Input>
            <Input
              placeholder={"Enter your username"}
              value={username}
              type={"input"}
              id={"username"}
              onChange={(e) => setUsername(e.target.value)}
            >
              Username
            </Input>
            <Input
              placeholder={"Enter your password"}
              value={password}
              type={"password"}
              id={"password"}
              onChange={(e) => setPassword(e.target.value)}
            >
              Password
            </Input>
            <Input
              placeholder={"Enter your password again"}
              value={confirm_password}
              type={"password"}
              id={"confirm-password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            >
              Confirm Password
            </Input>
          </div>
          <div className="right w-full lg:w-1/2">
            <div className="radioInput flex flex-col justify-center items-center mb-4">
              <label
                htmlFor=""
                className=" w-full text-sm text-left text-dark-gray mb-2 lg:text-md"
              >
                Gender
              </label>
              <div className="radio flex justify-center items-center w-full p-2 border border-dark-gray rounded-md ">
                <RadioInput
                  name={"gender"}
                  value={"Male"}
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
          </div>
        </div>
        <div className="login mb-4 text-sm">
          Already have an account? click here to{" "}
          <a href="/login" className="text-blue text-sm underline">
            login
          </a>
        </div>
        <Button
          variant={"primary"}
          width={"w-full"}
          onClick={() => signUp()}
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </Button>
      </div>
    </div>
  );
};

export default HalamanSignup;
