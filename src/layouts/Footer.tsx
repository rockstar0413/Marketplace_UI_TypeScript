import { 
  FaDiscord, 
  FaTwitter , 
  FaYoutube, 
  FaTelegram, 
  FaFacebookF, 
  FaInstagram} from 'react-icons/fa'
//import { useLocation} from 'react-router-dom'
import Button from "../common/button";
const Footer = () => {
  //const location = useLocation();
  return (
    <div className="">
      <div className="w-full bg-gradient-to-r from-black via-[#650022] to-black flex flex-wrap justify-evenly py-4 text-white">
        <div className="max-w-[500px] pl-5">
          <div className="text-2xl p-1 ">
            #WEARESELFLES
          </div>
          <div className='w-full p-2 sm:justify-center'>
            If that’s you, then you definitely want to join our mailing list to be the 
            first to know about newest drops, trending collections, and all the latest 
            on everything going on in the Selfles Community
          </div>
          <div className="py-2 p-2">
            <input className="p-2 mb-2 text-black rounded-md w-[250px]" placeholder="Enter your email address"></input>
            <Button className="p-2 mb-2 lg:ml-2 md:ml-2 bg-gradient-to-b from-[#e4144e] to-[#8d0c31]" name="Sign me up!" onClick={()=>{}}/>
          </div>
        </div>
        <div className="px-4">
          <div className="text-xl pb-3">
            JOIN THE COMMUNITY
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <div className="bg-[#e4144e] p-2 rounded-md">
              <FaDiscord size={30}/>
            </div>
            <div className="bg-[#e4144e] p-2 rounded-md">
              <FaTwitter size={30}/>
            </div>
            <div className="bg-[#e4144e] p-2 rounded-md">
              <FaYoutube size={30}/>
            </div>
            <div className="bg-[#e4144e] p-2 rounded-md">
              <FaInstagram size={30}/>
            </div>
            <div className="bg-[#e4144e] p-2 rounded-md">
              <FaTelegram size={30}/>
            </div>
            <div className="bg-[#e4144e] p-2 rounded-md">
              <FaFacebookF size={30}/>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black pb-30'>
        <div className="flex justify-evenly py-4 text-white text-[12px] lg:text-[18px] md:text-[18px]">
          <div>Terms of Use</div>
          <div>Contact Us</div>
          <div>Privacy Policy</div>
          <div>Support</div>
          <div>FAQs</div>
        </div>
        <div className="w-full text-center pb-32 text-[#e4144e]">
          @2022 BitJar Labs, LLC
        </div>
      </div>
    </div>
  )
}

export default Footer
