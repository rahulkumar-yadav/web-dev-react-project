import React from 'react'
import homeIcon from '../assets/home-icon.svg';
import arrow from '../assets/left-breadcam.svg';
export default function Breadcamp({path=[]}) {
  return (
    <div className="text-center my-[40px] mb:my-[30px]">
    <ul className='w-full max-w-[1040px] mx-auto list-none flex items-center gap-[1px] [&>*:last-child]:text-[#06286E] [&>*:last-child]:font-bold [&>li:last-child>img]:hidden '>
        <li className='text-[#696671] text-[18px] mb:text-[14px] font-semibold whitespace-nowrap flex items-center'> <img src={homeIcon} alt="" /><img src={arrow} className='mb:w-[13px]' alt="" /></li>
        {path?.map((item,i)=>{
            return(
                <li key={i} className='text-[#696671] text-[18px] mb:text-[14px] font-semibold whitespace-nowrap flex items-center'> {item} <img src={arrow} className='mb:w-[13px]' alt="" /></li>
            )
        })}
    </ul>
    </div>
  )
}
