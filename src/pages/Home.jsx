import React, { useState } from "react";
import { AccordionCustomIcon, Breadcamp, Header } from "../components";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import bulb from "../assets/bulb.svg";
import speaker from "../assets/speaker.svg";
import fullScreen from "../assets/view-scroll.svg";
import refresh from "../assets/refresh.svg";
import leftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import logoText from "../assets/hyggex-text-logo.png";
import plusIcon from "../assets/plus-icon.svg";
const data = [
  {
    label: "Study",
    value: "study",
    desc: `9 + 6 + 7x - 2x - 3`,
  },
  {
    label: "Quiz",
    value: "quiz",
    desc: `Tab of Quiz`,
  },
  {
    label: "Test",
    value: "test",
    desc: `Tab of Test`,
  },
  {
    label: "Game",
    value: "game",
    desc: `Tab of Game`,
  },
  {
    label: "Others",
    value: "others",
    desc: `Tab of Others....`,
  },
];
export default function Home() {

  const contentData = [
    { equation: '9 + 6 + 7x - 2x - 3' },
    { equation: '3 * 2 - 4x - 8x - 1' },
    { equation: '1 - 6 * 4x - 2x - 2' },
    { equation: 'Content 4' },
    { equation: 'Content 5' },
    { equation: 'Content 6' },
    { equation: 'Content 7' },
    { equation: 'Content 8' },
    { equation: 'Content 9' },
    { equation: 'Content 10' },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length);
  };



  return (
    <section className="">
      <Header />
      <Breadcamp path={["Flashcard", "Mathematics", "Relation and Function"]} />
      <div className="max-w-[1040px] tb:px-[5%] mx-auto  ">
        <h4 class="text-3xl mb-[40px] font-semibold bg-gradient-to-r  from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
          Relations and Functions (Mathematics)
        </h4>
        <div className="w-full text-center h-[588px] mb:h-auto">
          <Tabs className="mx-auto max-w-[712px]" value="study">
            <TabsHeader
              className="w-full bg-white flex gap-[37px] justify-center"
              indicatorProps={{
                className:
                  "bg-white shadow-none border-b-[#06286E] !text-[#06286E] border-b-[2px] font-bold rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  className="custom-tab w-auto px-[12px] py-[10px] font-bold"
                  key={value}
                  value={value}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {value === "study" ? (
                    <>
                      <div className="w-full h-[393px] relative flex items-center justify-center text-white rounded-[42px] p-[34px] mb:p-[16px]  bg-gradient-to-b from-[#051A91] via-[#061C93] to-[#2284F1] to-[#1F80EB]">
                        <div className=" absolute top-0 p-[34px] w-full flex items-center justify-between">
                          <img src={bulb} alt="bulb" />
                          <img src={speaker} alt="speaker" />
                        </div>
                        <span className="text-[38px] text-white text-ellipsis overflow-hidden">
                          {contentData[currentIndex].equation}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-[10px] mx-auto max-w-[612px] py-[24px]">
                        <img src={refresh} alt="" />
                        <div className="flex items-center justify-between w-full max-w-[272px] gap-[10px]">
                          <img onClick={handlePrev} src={leftArrow} alt="" />
                          <span className=" text-[24px] font-bold text-[#202B37]">
                          {currentIndex + 1}/{contentData.length}
                          </span>
                          <img onClick={handleNext} src={RightArrow} alt="" />
                        </div>
                        <img src={fullScreen} alt="" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-[393px] relative flex items-center justify-center text-white rounded-[42px] p-[34px] mb:p-[16px] bg-green-400">
                  
                      <span className="text-[38px] text-white text-ellipsis overflow-hidden">
                        {desc}
                      </span>
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
      <div className="w-full flex items-center justify-between flex-wrap max-w-[1090px] tb:px-[5%] mx-auto ">
        <img src={logoText} className="max-w-[217px] w-full" alt="" />
        <div className="flex items-center gap-[5px] text-[28px] font-[600] bg-gradient-to-r  from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
          <img src={plusIcon} alt="" />
          Create Flashcard
        </div>
      </div>
      <div className="max-w-[1040px] tb:px-[5%] mx-auto mt-[42px]">
        <h4 className="bg-gradient-to-r text-[41px] font-bold  from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
          FAQ
        </h4>
      </div>
      <div className="max-w-[1040px] tb:px-[5%] mx-auto pb-[50px] ">
        <AccordionCustomIcon />
      </div>
    </section>
  );
}
