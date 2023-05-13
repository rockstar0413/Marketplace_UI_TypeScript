import Aavatar from '../../../assets/images/owner.png';
import EtherIcon from '../../../assets/images/ether_icon.png';
const Description = () => {
    return (
        <div className="w-full lg:px-10 md:px-10 sm:px-1 pt-3">
            <div className="flex justify-center py-2">
                <img src={Aavatar} className='w-[141px] rounded-full' alt="avatar" />
            </div>
            <div className="flex justify-center text-white">
                <div className="w-[170px] font-bold">
                    <div className="flex justify-center text-[24px] py-1">
                        Robert Sacco
                    </div>
                    <div className="flex justify-between items-center  text-[#979797]">
                        <img src={EtherIcon} className='w-[14px] h-[14px] text-[18px]' alt="EtherIcon" />
                        <div>
                            4534dsfh...4577
                        </div>
                    </div>
                    <div className="flex justify-between  items-center py-2">
                        <span className="text-[#979797] text-[18px]">Dark mode</span>
                        <label htmlFor="large-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="large-toggle" className="sr-only peer"/>
                        <div className="w-14 h-7 bg-gray-400 dark:peer-focus:ring-[#BB2E69] rounded-full peer dark:bg-red peer-checked:after:translate-x-full peer-checked:after:border-red after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-[#BB2E69] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-[#70BCFD]"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;