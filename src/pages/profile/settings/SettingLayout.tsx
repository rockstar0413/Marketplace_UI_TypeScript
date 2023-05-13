import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const SettingLayout = () =>{
    return (
        <div>
            <div className="w-full lg:flex md:flex bg-[#2a2a31]">
                <div className="lg:flex-none md:flex-none flex justify-center">
                    <SideBar />
                </div>
                <div className="grow w-full md:w-[500px] lg:w-[500px]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SettingLayout;