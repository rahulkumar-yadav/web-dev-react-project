
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion className="rounded-lg border border-blue-500 mt-[42px]"  open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="py-[17px] px-[24px] text-[#28262C] font-[600] " onClick={() => handleOpen(1)}>Can education flashcards be used for all age groups?</AccordionHeader>
        <AccordionBody className="px-[20px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="rounded-lg border border-blue-500 mt-[32px]"  open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="py-[17px] px-[24px] text-[#28262C] font-[600] " onClick={() => handleOpen(2)}>
        How do education flashcards work?
        </AccordionHeader>
        <AccordionBody className="px-[20px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="rounded-lg border border-blue-500 mt-[32px]"  open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="py-[17px] px-[24px] text-[#28262C] font-[600] " onClick={() => handleOpen(3)}>
        Can education flashcards be used for test preparation?
        </AccordionHeader>
        <AccordionBody className="px-[20px]">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}