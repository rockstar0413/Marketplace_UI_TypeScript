import LogoImg from '../../../assets/images/logo_img.png';
import Promotion from '../components/promotion';

const Shepherd = () => {
    return (
        <div className='flex flex-wrap lg:px-16 md:px-16 px-7 pb-4'>
            <div className='text-xl text-white  grow p-1 w-3/5'>
                <div className='bg-[#333236] rounded-3xl'>
                    <div className='relative flex items-center ml-2'>
                        <div className='absolute text-white flex justify-center pt-4'>
                            <div className=''>
                                <div className='text-center font-medium'>
                                    <div className='flex items-center'>
                                        <span className='text-3xl font-black pl-9'>GIVE</span>  <span className='items-center text-base m-2'> TO </span> <span className='text-3xl font-black'>EARN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={LogoImg} className='w-30 flex justify-center pl-16 mt-4 pb-2 pr-16' alt="" /> 
                    </div>
                    <div className='pl-11'>
                        <span className='text-[11px]'>Increase your token count by being selfles.</span>
                    </div>
                    <div className=''>
                        <Promotion/>
                    </div>
                </div>
            </div>
        </div>
        // <div className='relative flex items-center'>
        //     <div className='absolute text-white w-full'>
        //         <div className='text-lg sm:text-3xl lg:text-4xl xl:text-5xl'>
        //             <div className='text-center font-medium'>We do not bred to win awards.</div>
        //             <div className='text-center font-medium'>We breed for the love of the Australian Shepherds</div>
        //         </div>
        //     </div>
        //     <img src={DogJump} className='w-full' alt="" /> 
        // </div>
    );
}

export default Shepherd;