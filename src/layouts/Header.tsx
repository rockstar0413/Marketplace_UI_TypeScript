import { Link , useLocation} from 'react-router-dom'

import appRoutes from '../pages/routes'
import { BsSearch, BsList } from 'react-icons/bs'
import logo from '../assets/images/logo_light.svg';
import UserIcon from '../assets/images/User.png';
import Vector from '../assets/images/Vector.png';
import Group from '../assets/images/Group.png';
import Wallet from '../assets/images/Wallet.png';
import Metamask from '../assets/images/Metamask.png';
import Coinbase from '../assets/images/Coinbase.png';
import Phantom from '../assets/images/Phantom.png';
import Trust from '../assets/images/Trust.png';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [opened, setOpened] = useState(false);

  const hideMenu = (e:any) =>{
    setOpened(false);
    // if(!($profileMenu.value as any).contains(e.target)){
    //   setOpened(false);
    // }
  }

  useEffect(() => {
    // Update the document title using the browser API
    //document.addEventListener('click', hideMenu);
  });
  return (
    <header className="flex justify-between w-full bg-black z-10">
      <nav className="navbar navbar-expand-lg navbar-light no-underline items-center w-full p-0">
        <div className='flex justify-start items-center sm-input w-full mt-2 px-2'>
          <BsSearch className='absolute text-white ml-12 font-bold'/>
          <input type="text" className='rounded border-stone-300 text-white bg-black search text-base h-8 pl-20 w-full' placeholder="Search items and collections"/>
        </div>
        <div className='container-fluid lg:p-0'>
          <div className='navbar-brand'>
            <div className='flex flex-row items-center'>
              <Link to={'/'} className={`no-underline  text-lg font-medium sm:text-2xl ${location.pathname==="/about"||location.pathname==="/contact"?'text-black':'text-white'}`}>
                <img src={logo} width={60} className=" mr-20" alt="" />
              </Link>
              <div className='relative flex justify-start items-center header-input'>
                <BsSearch className='absolute text-white ml-12 font-bold'/>
                <input type="text" className='rounded border-stone-300 text-white bg-black search text-[13px] h-8 pl-20 w-[300px]' placeholder="Search items and collections"/>
              </div>
            </div>
          </div>
          <div className='navbar-toggler pb-4 border-0 mr-2' data-bs-toggle="collapse" data-bs-target='#mynavbarAltMarkup'>
            <BsList className={`absolute ${location.pathname==="/about"||location.pathname==="/contact"?'text-black':'text-white'} text-2xl mr-2 font-bold`} />
          </div>
          <div className='collapse navbar-collapse' id="mynavbarAltMarkup">
            <ul className='navbar-nav'>
              {appRoutes.map(
                (item, index) =>
                  <li key={index} className="flex pl-5 justify-start bg-item ">
                    <Link to={item.path} key={item.title} className='nav-link no-underline mr-5 hover:underline'>
                      <div className='text-[#979797] text-[13px]' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show ">{item.title}</div>
                    </Link>
                  </li>
              )}
            </ul>

            <Link to={'/profile'} key={'profile'}>
              <div className='px-3 py-1'><img src={UserIcon} width={30} alt="userIcon" height={20}></img></div>
            </Link>
            <div className='px-3 py-1'><img src={Vector} width={20} alt="vector" height={20}></img></div>
            <div className='relative'>
              <div  className='px-3 py-1' onClick={() => setOpened(!opened)}>
                <img src={Group} width={30} alt="group" height={20}/>
              </div>
              {
                opened &&
                <div className="absolute top-30 right-0 z-30 w-[350px] text-white bg-[#2a2a31] py-2">
                  <div className="flex text-xl gap-2 p-2 px-4 items-center">
                    <img src={Wallet} alt="wallet" width={35} height={20}/>
                    <span className='font-bold'>My wallet</span>
                  </div>
                  <div className='p-2 px-4 text-xs text-[#DADADA]'>
                    Connect with an available wallet provider to get started.<br/><br/>
                    First time setting up a wallet? <span className='text-[#009CDE]'>Click here</span>
                  </div>
                  <div className='flex flex-col'>
                    <div className='py-2 px-4 flex justify-start font-bold items-center hover:bg-[#333236]' onClick={hideMenu}>
                      <img src={Metamask} alt="wallet" width={35} height={20} className="mr-4"/>MetaMask
                    </div>
                    <div className='py-2 px-4 flex justify-start font-bold items-center hover:bg-[#333236]' onClick={hideMenu}>
                      <img src={Coinbase} alt="wallet" width={35} height={20} className="mr-4"/>Coinbase
                    </div>
                    <div className='py-2 px-4 flex justify-start font-bold items-center hover:bg-[#333236]' onClick={hideMenu}>
                      <img src={Trust} alt="wallet" width={35} height={20} className="mr-4"/>Trust Wallet
                    </div>
                    <div className='py-2 px-4 flex justify-start font-bold items-center hover:bg-[#333236]' onClick={hideMenu}>
                      <img src={Phantom} alt="wallet" width={35} height={20} className="mr-4"/>Phantom
                    </div>
                  </div>
                </div>
              }
            </div>
            {/* <div className='relative flex justify-end items-center header-input'>
              <BsSearch className='absolute text-red-500 mr-2 font-bold' />
              <input type="text" className='rounded-2xl search h-8 pl-3' />
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
