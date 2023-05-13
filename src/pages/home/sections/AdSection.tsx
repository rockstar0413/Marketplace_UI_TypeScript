import LandingImg from '../../../assets/images/landing-img.png';
import LogoImg from '../../../assets/images/logo_img.png';
const AdSection = () => {
    return (
        <div className='relative flex items-center'>
            <div className='text-white  absolute content-center text-left  w-100'>
                <div className='flex flex-row'>
                    <div className='basis-1/2'>
                        <div className='lg:block sm:hidden md:hidden hidden text-[#2a2a31]'>
                            <div className='flex justify-center pb-6'>
                                <img src={LogoImg} className='' alt="" />
                            </div>
                            <div className='text-[36px] text-center font-black'>Ellie is a survivor because</div>
                            <div className='text-[36px] text-center font-black'>you were selfles.</div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                    </div>
                </div>
            </div>
            <img src={LandingImg} className='w-full' alt="" />
        </div>
    );
}

export default AdSection;