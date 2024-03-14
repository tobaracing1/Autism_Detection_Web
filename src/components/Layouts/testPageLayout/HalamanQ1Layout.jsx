/* eslint-disable react/prop-types */
import Button from "../../Elements/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import MultipleChoice from "../../Fragments/Question/MultipleChoice";
import { QnA1 } from "../../Data/QnA";

const Q1Layout = ({
  currentPage,
  setCurrentPage,
  questionData,
  setQuestionData,
}) => {
  const answerChoices = [
    "Not a Problem (Does very well)",
    "Mild-to-Moderate Problem (Sometimes a problem)",
    "Severe Problem (Often or always a problem)",
    "Not a problem now, but was in the past",
    "Don't Know",
  ];
  function nextPage() {
    try {
      for (let i = 1; i <= 10; i++) {
        if (questionData[i] === undefined) {
          // Perform your action if questionData[i] is undefined
          throw new Error("Please fill all the questions with answer");
        }
      }

      if (currentPage < 4) {
        console.log(questionData);
        setCurrentPage(currentPage + 1);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

    } catch (error) {
      const errorContainer = document.getElementById("errorMessage");
      console.log(questionData);
      errorContainer.style.display = "flex";
      errorContainer.innerHTML = error.message;
    }
  }

  return (
    <div className="page1 w-full flex flex-col items-center mb-8">
      <div className="flex flex-col w-[80%] items-center box-border rounded-lg w-max-content border p-8 lg:w-[60%]">
        <div className="w-full flex flex-col justify-start">
          {QnA1.map(
            (data) => (
              (
                <MultipleChoice
                  key={data.number}
                  questionData={questionData}
                  setQuestionData={setQuestionData}
                  number={data.number}
                  question={data.question}
                  choiceTitleA={answerChoices[0]}
                  choiceTitleB={answerChoices[1]}
                  choiceTitleC={answerChoices[2]}
                  choiceTitleD={answerChoices[3]}
                  choiceTitleE={answerChoices[4]}
                  choiceDescA={data.answerOptions.A}
                  choiceDescB={data.answerOptions.B}
                  choiceDescC={data.answerOptions.C}
                  choiceDescD={data.answerOptions.D}
                  choiceDescE={data.answerOptions.E}
                ></MultipleChoice>
              )
            )
          )}

          <div
            className=" text-sm my-4 text-red border border-red w-full h-10 hidden items-center justify-center rounded-md bg-light-red/25"
            id="errorMessage"
          ></div>

          <div className="flex justify-end mt-8">
            <Button
              variant={"primary"}
              width={"w-20"}
              bgColor="bg-white"
              onClick={async () => {
                nextPage();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q1Layout;
