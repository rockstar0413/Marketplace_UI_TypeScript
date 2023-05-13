import React from 'react'
import Aavatar from '../../../../assets/images/owner.png';
import Banner from '../../../../assets/images/banner.png';
import CameraIcon from '../../../../assets/images/camera_icon.png';
import { TbAlertCircle } from 'react-icons/tb';
import { MdDelete, MdAdd } from 'react-icons/md';
import { 
  FaDiscord, 
  FaTwitter , 
  FaTiktok, 
  FaTelegram, 
  FaFacebook, 
  FaInstagram} from 'react-icons/fa'
const ProfileSettings = () => {
  
  return (
    <div className="lg:ml-[0px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full px-10 lg:py-16 md:py-16 pb-7 text-[#DDDDDD]">
      <div className='text-[32px] mb-2'>
        Profile Settings

      </div>
      <div className='md:flex lg:flex'>
        <div className='pr-5'>
          <div className='flex text-[18px] items-center justify-center md:justify-start lg:justify-start'>
            Profile Image
            <div className="group flex relative">
              <TbAlertCircle className='text-[#009CDE] ml-2' data-tooltip-target="tooltip-default"/>
              <span className="group-hover:opacity-100 group-hover:z-0 transition-opacity bg-[#333236] z-[-100] p-2 text-[14px] text-gray-100 rounded-md absolute left-[180px] top-[-140px]
              -translate-x-1/2 translate-y-full my-opacity-0 m-4 mx-auto w-[300px]">We recommend a 1500x1500px JPG, PNG, WEBP, or GIF (1MB max file size)</span>
            </div>
          </div>
          <div className='flex justify-center md:justify-start lg:justify-start items-center'>
            <div className='relative flex items-center justify-center pt-2'>
              <img src={CameraIcon} className='w-[25px] bottom-[30px] right-[30px] absolute' alt="avatar" />
              <img src={Aavatar} className='w-[180px] rounded-full' alt="avatar" />
            </div>
          </div>
        </div>
        <div className='md:px-5 lg:px-5'>
          <div className='flex text-[18px] items-center justify-center'>
            Profile Banner
            <div className="group flex relative">
              <TbAlertCircle className='text-[#009CDE] ml-2' data-tooltip-target="tooltip-default"/>
              <span className="group-hover:opacity-100 group-hover:z-0 transition-opacity bg-[#333236] z-[-100] p-2 text-[14px] text-gray-100 rounded-md absolute left-[180px] top-[-140px]
              -translate-x-1/2 translate-y-full my-opacity-0 m-4 mx-auto w-[300px]">We recommend a 1500x1500px JPG, PNG, WEBP, or GIF (1MB max file size)</span>
            </div>
          </div>
          <div className='flex justify-center md:justify-start lg:justify-start items-center'>
            <div className='relative flex items-center justify-center pt-2'>
              <img src={CameraIcon} className='w-[25px] bottom-[10px] right-[10px] absolute' alt="avatar" />
              <img src={Banner} className='w-[250px]' alt="avatar" />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='mb-0 py-2'>Link NFT</div>
        <div className='flex'>
          <input type="text" className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full md:w-[500px] lg:w-[500px]" />
          <button className='bg-[#009CDE] rounded ml-3 flex justify-center py-1 text-[16px] w-[140px] items-center'>Connect</button>
        </div>
      </div>
      <div>
        <div className='mb-0 py-2'>Username</div>
        <div className='flex'>
          <input type="text" className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-0 p-2 h-[38px] w-[500px]" />
        </div>
      </div>
      <div>
        <div className='mb-0 py-2'>Personal Bio</div>
        <div className='flex'>
          <textarea cols={3} className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-0 p-2 h-[128px] w-[500px]" />
        </div>
      </div>
      <div>
        <div className='mb-0 py-2'>Email</div>
        <div className='flex'>
          <input type="text" className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-0 p-2 h-[38px] w-[500px]" />
        </div>
      </div>
      <div className=''>
        <div className='mb-0 pt-2'>Linked wallets</div>
        <div className='mt-3 flex'>
          <div className='relative flex justify-start items-center'>
            <MdDelete className='absolute ml-2 font-bold text-[#009CDE]' size={20}/>
            <input type="text" className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-8 pr-2 h-[38px] w-full md:w-[500px] lg:w-[500px]" />
          </div>
          <button className='bg-[#009CDE]  flex justify-center rounded ml-3 py-1 text-[16px] w-[140px] items-center'>Copy</button>
        </div>
      </div>
      <div className='mt-3 flex'>
        <div className='relative flex justify-start items-center'>
          <MdDelete className='absolute ml-2 font-bold text-[#009CDE]' size={20}/>
          <input type="text" className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-8 pr-2 h-[38px] w-full md:w-[500px] lg:w-[500px]" />
        </div>
        <button className='bg-[#009CDE]  flex justify-center rounded ml-3 py-1 text-[16px] w-[140px] items-center'>Copy</button>
      </div>
      <div className='mt-3'>
        <div className='flex'>
          <input type="text" className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full md:w-[500px] lg:w-[500px]" />
          <button className='bg-[#009CDE]  flex justify-center rounded ml-3 py-1 text-[16px] w-[140px] items-center'><MdAdd size={20}/></button>
        </div>
      </div>
      <div className='mt-3'>
        <div className='mb-0 pt-2'>Social Connections</div>
        <div className='mt-3 flex items-center'>
          <FaTwitter className='mr-4 font-bold text-[#979797]' size={30}/>
          <input type="text" placeholder='Link Twitter' className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-5  h-[38px] w-[455px]" />
        </div>
        <div className='mt-2 flex items-center'>
          <FaInstagram className='mr-4 font-bold text-[#979797]' size={30}/>
          <input type="text" placeholder='Link Instagram' className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-5  h-[38px] w-[455px]" />
        </div>
        <div className='mt-2 flex items-center'>
          <FaDiscord className='mr-4 font-bold text-[#979797]' size={30}/>
          <input type="text" placeholder='Link Discord' className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-5  h-[38px] w-[455px]" />
        </div>
        <div className='mt-2 flex items-center'>
          <FaFacebook className='mr-4 font-bold text-[#979797]' size={30}/>
          <input type="text" placeholder='Link Facebook' className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-5  h-[38px] w-[455px]" />
        </div>
        <div className='mt-2 flex items-center'>
          <FaTiktok className='mr-4 font-bold text-[#979797]' size={30}/>
          <input type="text" placeholder='Link Tiktok' className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-5  h-[38px] w-[455px]" />
        </div>
        <div className='mt-2 flex items-center'>
          <FaTelegram className='mr-4 font-bold text-[#979797]' size={30}/>
          <input type="text" placeholder='Link Telegram' className="rounded-[3px] bg-[#333236] text-[#DDDDDD] focus-visible:!outline-none block pl-5  h-[38px] w-[455px]" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;