import Button from "../Elements/Button/Button";
import { useUser } from "../Layouts/userContext";
import { auth } from "../../script/firebase_key";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import homeIconWhite from "../../assets/icon/icons8-home-250-white.png";
import homeIcon from "../../assets/icon/icons8-home-250.png";
import aboutIcon from "../../assets/icon/icons8-about-250.png";
import aboutIconWhite from "../../assets/icon/icons8-about-250-white.png";
import historyIcon from "../../assets/icon/icons8-history-100.png";
import historyIconWhite from "../../assets/icon/icons8-history-100-white.png";

const Header = ({ isAdmin, page }) => {
  const { user } = useUser();
  const [menuOpened, setMenuOpened] = useState(false);

  const logout = () => {
    signOut(auth);
    window.location.href = "/";
  };

  const handleMenu = () => {
    const menu = document.getElementById("menu");
    const menuContent = document.getElementById("menuContent");
    const bar = document.getElementById("bar");

    setMenuOpened(() => !menuOpened);
    // if(menuOpened){
    //     menu.style.display = "none"
    //     bar.style.transform = "rotate(0deg)"
    //     menuContent.style.transform = `translateX(100%)`
    // }
    // else{
    //     menu.style.display = "flex"
    //     bar.style.transform = "rotate(90deg)"
    //     menuContent.style.transform = `translateX(0%)`
    // }
  };

  useEffect(() => {}, [user]);

  return (
    <>
      <div
        id="menu"
        className={`transition overflow-hidden z-20 ${
          menuOpened
            ? "fixed top-0 right-0 h-full w-full bg-black/50 flex justify-end items-start mt-20"
            : "h-0"
        }`}
      >
        <div
          id="menuContent"
          className={`transition ease-in-out bg-white w-[60%] min-h-[60%] h-full py-8 px-4  ${
            menuOpened ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <div
            className={`flex w-full h-full ${menuOpened ? "flex" : "hidden"}`}
          >
            {user.uid ? (
              <div className="flex flex-col justify-between h-[90%] w-full">
                <div className="flex flex-col justify-start items-start ">
                  <div className="text-black text-xl mb-8 font-semibold">
                    Welcome, {user.email}
                  </div>
                  <div className="border w-full rounded-full mb-8"></div>
                  <a
                    href="/"
                    className={`flex items-center text-black text-xl font-bold py-3 px-4  my-1  rounded-lg w-full  hover:text-orange shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
                      page === "halamanUtama" ? "text-white bg-blue" : ""
                    }`}
                  >
                    <img
                      className="w-6 mr-2"
                      src={`${
                        page === "halamanUtama" ? homeIconWhite : homeIcon
                      }`}
                      alt=""
                    />{" "}
                    Home
                  </a>

                  <a
                    href="/about"
                    className={`flex items-center text-black text-xl font-bold py-3 px-4 my-1 rounded-lg w-full  hover:text-orange shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
                      page === "halamanAbout" ? "text-white bg-blue" : ""
                    } `}
                  >
                    <img
                      className="w-6 mr-2"
                      src={`${
                        page === "halamanAbout" ? aboutIconWhite : aboutIcon
                      }`}
                      alt=""
                    />{" "}
                    About
                  </a>

                  <a
                    href="/history"
                    className={`flex items-center text-black text-xl font-bold py-3 px-4  my-1 rounded-lg w-full hover:text-orange shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
                      page === "halamanRiwayat" ? "text-white bg-blue" : ""
                    }`}
                  >
                    <img
                      className="w-6 mr-2"
                      src={`${
                        page === "halamanRiwayat"
                          ? historyIconWhite
                          : historyIcon
                      }`}
                      alt=""
                    />{" "}
                    History
                  </a>
                </div>
                <div></div>

                <Button
                  variant={"primary"}
                  bgColor="bg-light-red"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="w-full flex flex-col justify-between">
                <div className="flex flex-col h-full">
                  <div className="text-black text-xl mb-8 font-bold">Menu</div>
                  <div className="border w-full rounded-lg mb-8"></div>
                  <a
                    href="/"
                    className={`flex items-center text-black text-xl font-bold py-2 px-4  rounded-lg w-full my-2  hover:text-orange shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
                      page === "halamanUtama" ? "text-white bg-blue" : ""
                    }`}
                  >
                    <img
                      className="w-6 mr-2"
                      src={`${
                        page === "halamanUtama"
                          ? homeIconWhite : homeIcon
                      }`}
                      alt=""
                    />{" "}
                    Home
                  </a>

                  <a
                    href="/about"
                    className={`flex items-center text-black text-xl font-bold py-2 px-4  rounded-lg w-full my-2 hover:text-orange shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
                      page === "halamanAbout" ? "text-white bg-blue" : ""
                    }`}
                  >
                    <img
                      className="w-6 mr-2"
                      src={`${
                        page === "halamanAbout"
                          ? aboutIconWhite : aboutIcon
                      }`}
                      alt=""
                    />{" "}
                    About
                  </a>
                </div>

                <div className="w-full pb-20">
                  <Button
                    variant="primary"
                    width={"w-full"}
                    bgColor="bg-white"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Login
                  </Button>
                  <div className="w-full mb-2"></div>
                  <Button
                    width={"w-full"}
                    onClick={() => (window.location.href = "/signup")}
                    variant="primary"
                  >
                    Signup
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <header
        className={`box-border flex justify-between items-center px-8 w-full lg:w-screen h-20 bg-blue ${
          isAdmin ? "relative" : "fixed"
        } top-0`}
      >
        <button
          className="flex justify-start items-center py-4 w-1/3"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src="./src/assets/deautism.png" alt="LOGO" className="" />
        </button>

        <div
          id="bar"
          className={`space-y-2 p-4 transition-all rounded-lg items-end flex flex-col lg:hidden ${
            menuOpened ? "bg-dark-blue rotate-90" : "bg-blue"
          }`}
          onClick={handleMenu}
        >
          <div className="w-6 h-0.5 bg-gray"></div>
          <div className="w-6 h-0.5 bg-gray"></div>
          <div className="w-6 h-0.5 bg-gray"></div>
        </div>

        <div className="flex justify-end items-center w-2/3 cursor-pointer hidden lg:flex lg:justify-between">
          <div className="center-header hidden justify-center items-center w-1/2 lg:flex">
            {isAdmin ? (
              <>
                <div className="text-white text-xl">Admin Dashboard</div>
              </>
            ) : (
              <>
                <a
                  href="/"
                  className={`p-4 mx-4 text-white text-xl font-bold hover:text-orange ${
                    page === "halamanUtama" ? "rounded-md bg-dark-blue" : ""
                  }`}
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className={`p-4 mx-4 text-white text-xl font-bold hover:text-orange ${
                    page === "halamanAbout" ? "rounded-md bg-dark-blue" : ""
                  }`}
                >
                  ABOUT
                </a>
                <a
                  href="/history"
                  className={`p-4 mx-4 text-white text-xl font-bold hover:text-orange ${
                    page === "halamanRiwayat" ? "rounded-md bg-dark-blue" : ""
                  }`}
                >
                  HISTORY
                </a>
              </>
            )}
          </div>

          <div className="right-header hidden justify-end items-center w-1/2 lg:flex">
            {user.uid ? (
              <>
                <div className="flex justify-center items-center h-full">
                  <div className="text-white text-xl mr-8">
                    Welcome, {user.email}
                  </div>
                </div>

                <Button onClick={() => logout()}>Logout</Button>
              </>
            ) : (
              <>
                <Button onClick={() => (window.location.href = "/login")}>
                  Login
                </Button>
                <div className="w-4"></div>
                <Button
                  onClick={() => (window.location.href = "/signup")}
                  variant="primary"
                >
                  Signup
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
