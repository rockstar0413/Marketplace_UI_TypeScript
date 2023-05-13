import ProfileImg from '../../../assets/images/profile_img.png';
const AdSection = () => {
    return (
        <div className='relative flex items-center'>
            <div className='text-white  absolute content-center text-left  w-100'>
            </div>
            <img src={ProfileImg} className='w-full' alt="" />
        </div>
    );
}

export default AdSection;