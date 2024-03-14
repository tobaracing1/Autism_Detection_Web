import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../Fragments/Header";
import Button from "../Elements/Button/Button";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { useState } from "react";
import Footer from "../Fragments/Footer";

const data = [
  { date: "Date", Autism_Percent: 0 },
  { date: "11 January 2022", Autism_Percent: 20 },
  { date: "29 January 2022", Autism_Percent: 100 },
  { date: "4 March 2022", Autism_Percent: 50 },
  { date: "5 March 2022", Autism_Percent: 60 },
  { date: "13 May 2022", Autism_Percent: 70 },
  { date: "22 July 2022", Autism_Percent: 30 },
];

const HalamanScreeningResult = () => {
  const [loading, setLoading] = useState(false);

  async function downloadResult() {
    const target = document.getElementById("result");
    setLoading(true)

    try {
      const result = await html2canvas(target);
      const targetImage = result.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4");

      // Calculate scaling factor to fit the content within a single page
      const scaleFactor = Math.min(
        pdf.internal.pageSize.getWidth() / result.width,
        pdf.internal.pageSize.getHeight() / result.height
      );

      // Calculate the dimensions of the scaled image
      const scaledWidth = result.width * scaleFactor;
      const scaledHeight = result.height * scaleFactor;

      // Calculate the coordinates to position the image in the center of the PDF page
      const xPosition = (pdf.internal.pageSize.getWidth() - scaledWidth) / 2;
      const yPosition = (pdf.internal.pageSize.getHeight() - scaledHeight) / 2;

      // Add the scaled image to the PDF
      pdf.addImage(
        targetImage,
        "PNG",
        xPosition,
        yPosition,
        scaledWidth,
        scaledHeight
      );
      pdf.save("result.pdf");
    } catch (error) {
      const errorContainer = document.getElementById("errorMessage");
      errorContainer.style.display = "flex";
      errorContainer.innerHTML = error.message;
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full box-sizing ">
      <Header></Header>
      <div className="mt-20"></div>
      <div className="flex flex-col justify-center items-center mt-20 lg:w-[60%]  lg:m-20">
        <div
          id="result"
          className="overflow-scroll flex flex-col just border border-black items-center h-min w-full  p-8 m-8"
        >
          <div className="text-2xl font-bold mb-4">Screening Result</div>
          <div className="flex flex-col w-full font-semibold ">
            <div className="flex">
              <div className="text-left w-[80px] text-sm">Name</div>
              <div className="text-sm">: Ricky</div>
            </div>
            <div className="flex">
              <div className="text-left w-[80px] text-sm">Age</div>
              <div className="text-sm">: 12</div>
            </div>
            <div className="flex">
              <div className="text-left w-[80px] text-sm">Birthday</div>
              <div className="text-sm">: 03 November 2002</div>
            </div>
            <div className="flex">
              <div className="text-left w-[80px] text-sm">Gender</div>
              <div className="text-sm">: Male</div>
            </div>
            <div className="flex">
              <div className="text-left w-[80px] text-sm">Etnic</div>
              <div className="text-sm">: Colombian</div>
            </div>
          </div>
          <div className="w-full my-4 border-b-2 border-dark-gray rounded-lg"></div>

          <div className="text-xl font-bold my-4">Autism Percent</div>
          <ResponsiveContainer
            width="100%"
            height={400}
            className="text-sm font-semibold border p-4 -z-10"
          >
            <LineChart data={data} className="w-full">
              <Line type="monotone" dataKey="Autism_Percent" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-8 mb-4 w-full font-semibold">
            Screening Summary :
          </div>
          <div className="flex flex-col w-full font-medium ">
            <div className="flex">
              <div className="text-left w-[200px] text-sm">
                Last Screening Result
              </div>
              <div className="text-sm">
                : {data[data.length - 1].Autism_Percent + "%"}
              </div>
            </div>
            <div className="flex">
              <div className="text-left w-[200px] text-sm">
                First Screening Result
              </div>
              <div className="text-sm">: {data[0].Autism_Percent + "%"}</div>
            </div>
          </div>
          <div className="my-4 text-sm text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            error perferendis nobis dicta accusantium. Ea voluptatum, suscipit,
            tenetur, quisquam nisi neque molestiae ipsam ipsum odio corrupti et
            voluptates aliquid dolorem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, quisquam. Reprehenderit temporibus
            deserunt accusamus ad, labore cum unde architecto totam voluptatem
            consequuntur in nobis a mollitia corrupti esse repellendus tenetur!
          </div>
          <a href="localhost:5173" className="text-sm font-bold text-blue mt-8">
            Screened at www.deautism.com
          </a>
          <div className=" text-xs text-center text-red">
            The screening result provided here may not be entirely accurate. For
            definitive confirmation and personalized medical advice, it's
            crucial to consult a professional healthcare provider.
          </div>
        </div>

        <div className="mb-12 flex flex-col">
          <div
            className="text-sm p-4 text-center mb-8 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25"
            id="errorMessage"
          ></div>
          <Button
            variant="primary"
            bgColor="bg-orange"
            width="w-[200px]"
            onClick={downloadResult}
            disabled={loading}
          >
            {loading ? "Downloading..." : "Download"}
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HalamanScreeningResult;
