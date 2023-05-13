import Box from "../../../common/box";
import Button from "../../../common/button";
import image_unitas from '../../../assets/images/image_unitas.png'
import useWindowSize from "../../../hook/windowSize";
import { Size } from "../../../interfaces/size";
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import Carousel from "../components/carousel";
function News() {
  const size: Size = useWindowSize();
  return (
    <Box title="WHAT'S" subTitle="NEW">
      
      <div className="relative text-white ">
        <Carousel/>
        {/* <img className="object-cover w-full h-full min-h-[300px]" alt="back" src={BackImage} /> */}
        <div className="absolute top-1/2 left-1 w-5 h-5 "><MdArrowBackIos className="rounded-full border text-center leading-4 pl-2" size={30}/></div>
        <div className="absolute top-1/2 right-1 w-5 h-5  mr-2"><MdArrowForwardIos className="rounded-full border text-center leading-4 pl-1" size={30}/></div>
        {
          // size.width >= 450
          <div className="lg:w-1/3 md:w-1/3 w-1/2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-full lg:ml-0 md:ml-0 ml-12">
            <p className="text-white font-black lg:text-[76px] md:text-[50px] text-[30px] m-0">2022</p>
            <span className=" lg:text-[28px] md:text-[25px] text-[18px]" >UNITAS </span><span className="font-black lg:text-[28px] md:text-[25px] text-[18px]" >GALA</span>
            <p className="break-keep font-['Open_Sans'] lg:text-[16px] md:text-[16px] text-[10px]">
              Register for the gala, make a donation, and earn Selfles coins.
            </p>
            <div className="flex justify-between lg:my-4 md:my-4">
              <Button className="lg:text-[14px] md:text-[14px] text-[12px] px-8 py-1 bg-gradient-to-b from-[#e4144e] to-[#8d0c31]" name="REGISTER" onClick={()=>{}}/>
              <Button className="lg:text-[14px] md:text-[14px] text-[12px] px-8 py-1 ml-2 bg-gradient-to-b from-[#e4144e] to-[#8d0c31]" name="DONATE" onClick={()=>{}}/>
            </div>
          </div>
          // : <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          //   <p className="text-5xl text-white font-black">2022</p>
          //   UNITAS<span className="font-black ">GALA</span>
          //   <p className="break-keep font-['Open_Sans']">
          //   Register for the gala, make a donation, and earn Selfles coins.
          //   </p>
          //   <div className="flex justify-between my-4">
          //     <Button className="px-8 py-1  bg-gradient-to-b from-[#e4144e] to-[#8d0c31]" name="REGISTER" onClick={()=>{}}/>
          //     <Button className="px-8 py-1 ml-2 bg-gradient-to-b from-[#e4144e] to-[#8d0c31]" name="DONATE" onClick={()=>{}}/>
          //   </div>
          // </div>
        }
        
        {
          size.width >= 450 &&
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 ml-4">
            <img className="object-cover  h-full min-h-[50px] px-16 pb-14" alt="image_unitas" src={image_unitas} />
          </div>
        }
      </div>
    </Box>
  )
}

export default News;