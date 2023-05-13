import MyCollections from '../components/collections';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Shepherd = () => {
    return (
        <div className='w-full lg:px-40 md:px-40 pb-20 pt-10'>
            <div>
                <div className="text-sm flex justify-between font-medium text-start  border-b border-[#979797]  w-full">
                    <ul className="md:flex lg:flex -mb-px text-[18px] w-full md:justify-between lg:justify-between md:pl-0 lg:pl-0 pl-20">
                        <li className="mr-2">
                            <div className="text-[#009CDE] no-underline inline-block py-4 hover:text-[#009CDE] ">My collections</div>
                        </li>
                        <li className="mr-2">
                            <div className="text-[#979797] no-underline inline-block py-4 hover:text-[#009CDE] " >Favorites</div>
                        </li>
                        <li className="mr-2">
                            <div className="text-[#979797] no-underline inline-block py-4 hover:text-[#009CDE] ">Hidden</div>
                        </li>
                        <li className="mr-2">
                            <div className="text-[#979797] no-underline inline-block py-4 hover:text-[#009CDE] ">Activity</div>
                        </li> 
                        <li>
                            <div className="text-[#979797] no-underline inline-block py-4 hover:text-[#009CDE] ">Claim DTCs</div>
                        </li>
                        <li className="mr-2">
                            <Link to='/profile/settings'>
                                <div className="text-[#979797] no-underline inline-block py-4 hover:text-[#009CDE] ">Settings</div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='pb-5 pt-4'>
                    <div className='relative flex justify-start items-center header-input'>
                        <BsSearch className='absolute text-white ml-10 font-bold'/>
                        <input type="text" className='text-white bg-[#333236] text-[18px] h-10 pl-16 w-[600px]' placeholder="Search"/>
                    </div>
                </div>
                <MyCollections/>
            </div>
        </div>
    );
}

export default Shepherd;