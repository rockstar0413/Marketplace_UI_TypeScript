import { Link, useLocation } from 'react-router-dom'
const SideBar = () => {
  //const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)
  // const gotoSignIn = () => {
  //   navigate('/')
  // }
  return (
    <div className='w-[347px] lg:h-[calc(100vh-60px)] overflow  py-4 text-white text-sm select-none overflow-y-auto sidebar  lg:block'>
      <div className='text-[18px] pb-4 border-b border-[#979797] px-10'>
        Settings
      </div>
      <div className=' px-3 text-white py-3 text-[18px]'>
        <Link to='/profile/settings' className='no-underline'>
          <div className={`py-2 px-4 mb-3  rounded flex items-center cursor-pointer hover:text-[#51B950] text-white ${location.pathname === '/profile/settings' ? 'bg-[#009CDE]' : ''}`}>
            Profile Settings
          </div>
        </Link>
        <Link to='/profile/settings/communications' className='no-underline'>
          <div className={`py-2 px-4 mb-3  rounded flex items-center cursor-pointer hover:text-[#51B950] text-white ${location.pathname === '/profile/settings/communications' ? 'bg-[#009CDE]' : ''}`}>
            Communications
          </div>
        </Link>
        <Link to='/profile/settings/security' className='no-underline'>
          <div className={`py-2 px-4 mb-3  rounded flex items-center cursor-pointer hover:text-[#51B950] text-white ${location.pathname === '/profile/settings/security' ? 'bg-[#009CDE]' : ''}`}>
            Security
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
