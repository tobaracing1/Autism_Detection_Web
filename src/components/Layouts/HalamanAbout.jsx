import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"


const HalamanAbout = () => {
    

    return(
        <div className="flex flex-col items-center w-screen h-full">
            <Header isAdmin={false} page={"halamanAbout"}></Header>
            <div className="mt-20"></div>
            <div className="max-h-fit w-full">
                <div className="bg-light-blue h-full py-20 flex flex-col justify-center items-center lg:h-60">
                    <div className="font-bold text-3xl text-center mb-4">DEVELOPER MESSAGE</div>
                    <div className="text-md font-semibold text-center px-20 lg:w-[60%]">The creators of this website are students from UPH Medan. This website was created to help parents or users who want to diagnose children who are suspected of having autism. We hope that the website we created can help users to get additional decisions and an idea about whether a child has autism or not.</div>
                </div>
                <div className="h-full w-full flex box-border flex-col lg:flex-row lg:border-t-4 lg:border-white">
                    <div className="content-1 w-full max-h-content bg-blue p-12 flex flex-col lg:justify-center lg:border-r-2 lg:border-white">
                        <div className="w-full flex justify-center">
                            <img className="w-96 hidden lg:flex lg:mb-8 " src="/src/assets/ricky.png" alt="" />
                        </div>
                        <div className="text-2xl text-white font-bold">Ricky</div>
                        <div className="text-lg text-white font-semibold text-left">Frontend and Backend Developer</div>
                        <div className="text-white mt-4">Hello, I'm Ricky, an aspiring Cloud Engineer and Backend Developer with a deep passion for technology and computing. I grew up in a small town in Aceh and have always been fascinated by the incredible capabilities of computers. This curiosity led me to pursue a degree in Informatics at Pelita Harapan University in Medan. Throughout my university journey, I have actively engaged in various activities, including joining the IT Club as a member and serving as a vice-coordinator. <br></br>
                        Recently, I discovered the Bangkit 2023 program organized by Tokopedia, Traveloka, and other leading companies. This program introduced me to the vast potential of cloud computing, and through my research, I developed a strong interest in the cloud world. As a result, I have found clarity in my career path, aspiring to become a skilled Cloud Engineer or Backend Developer in the future.</div>
                        <ul className="flex flex-col mt-4">
                            <li className="mb-2">
                                <a className="flex items-center" href="">
                                    <img className="w-8" src="/src/assets/icon/icons8-email-100.png" alt="" />
                                    <div className="font-semibold text-white ml-2">03082200012@student.uph.edu</div>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="flex items-center" href="https://www.instagram.com/ricky_cen/?hl=en">
                                    <img className="w-8" src="/src/assets/icon/icons8-instagram-100.png" alt="" />
                                    <div className="font-semibold text-white ml-2">@ricky_cen</div>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="flex items-center" href="https://www.linkedin.com/in/ricky-cen/">
                                    <img className="w-8" src="/src/assets/icon/icons8-linkedin-100.png" alt="" />
                                    <div className="font-semibold text-white ml-2">Ricky Cen</div>
                                </a>
                            </li>
                        </ul>
                        

                    </div>
                    <div className="content-2 w-full h-full bg-blue p-12 flex flex-col lg:justify-center lg:border-l-2 lg:border-white">
                        <div className="w-full flex justify-center">
                            <img className="w-96 hidden lg:flex lg:mb-8" src="/src/assets/ricky.png" alt="" />
                        </div>
                        <div className="text-2xl text-white font-bold text-right">Tiffany Widjaya</div>
                        <div className="text-lg text-white font-semibold text-right">Machine Learning Engineer</div>
                        <div className="text-white mt-4 text-right">Hi, I'm Tiffany. In the grand journey of life, every new chapter is akin to starting the engine for a road trip. Just as the road may not always be smooth and free of obstacles, our lives too are filled with uncertainties and challenges. Navigating through these hurdles is inevitable, much like encountering traffic on the road. The crucial aspect lies in how we make the most of these experiences while cruising along the journey of life.<br></br>
                        I've been actively applying this principle in my own life. Confronting obstacles has become a valuable learning experience for me. It's taught me how to handle challenges effectively, enabling me to build a set of problem-solving skills. Dealing with each hurdle has familiarized me with various scenarios, making me better equipped to navigate through similar situations in the future. It's not just about overcoming obstacles; it's about learning from them and becoming adept at finding solutions when faced with challenges.</div>
                        <ul className="flex flex-col mt-4 text-right justify-end items-end">
                            <li className="mb-2">
                                <a className="flex items-center" href="">
                                    <div className="font-semibold text-white mr-2">03082200006@student.uph.edu</div>
                                    <img className="w-8" src="/src/assets/icon/icons8-email-100.png" alt="" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="flex items-center" href="https://www.instagram.com/tiffanywidjaya/?hl=en">
                                    <div className="font-semibold text-white mr-2">@tiffanywidjaya</div>
                                    <img className="w-8" src="/src/assets/icon/icons8-instagram-100.png" alt="" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="flex items-center" href="https://www.linkedin.com/in/tiffany-widjaya/">
                                    <div className="font-semibold text-white mr-2">Tiffany Widjaya</div>
                                    <img className="w-8" src="/src/assets/icon/icons8-linkedin-100.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
       
    )
}

export default HalamanAbout
