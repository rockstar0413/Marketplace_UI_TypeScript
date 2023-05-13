import { twMerge } from "tailwind-merge";
import { 
  TbAlertTriangle,TbLock , TbDotsVertical} from 'react-icons/tb';
import { useState } from 'react';

interface Props {
  className?: string,
  img: any,
  title: string,
  description: string,
  onClick?: () => void,
}

const  MyCollection  =  ({className, img, title, description,  onClick}: Props) => {
  
  const [opened, setOpened] = useState(false);

  const hideMenu = (e:any) =>{
    setOpened(false);
    // if(!($profileMenu.value as any).contains(e.target)){
    //   setOpened(false);
    // }
  }

  return (
    <div className="bg-[#333236] rounded-[20px] shadow-[0_4px_5px_-2px_rgba(1,1,1,0.7)]">
      <button className={twMerge("flex items-end rounded-[20px] text-white text-left aspect-square w-[260px] h-[240px] items-end", className)} onClick={onClick}>
        <div className="w-full flex py-1 pl-3 text-[28px] font-bold flex justify-start">
          {title}
        </div>
      </button>
      <div className=" flex justify-start py-2">
        <div className="pl-5">
          <TbAlertTriangle size={15} color="white"/>
        </div>
        <div className="pl-5">
          <TbLock size={15} color="white"/>
        </div>
        <div className='relative'>
          <div  className='px-3 pl-5' onClick={() => setOpened(!opened)}>
            <TbDotsVertical size={15} color="white"/>
          </div>
          {
            opened &&
            <div className="absolute bottom-[-50%] left-10 z-30 lg:w-[250px] md:w-[250px] w-[220px] text-white bg-[#333236]  lg:text-[16px] lg:text-[14px] text-[14px]">
              <div className='flex flex-col py-2'>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Make profile picture
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Sell
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Hide
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Burn
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Transfer
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Share
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  Open original on IPFS
                </div>
                <div className='py-2 px-3 flex justify-start items-center hover:bg-[#4b4a4f]' onClick={hideMenu}>
                  View details
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default MyCollection