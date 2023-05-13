import News from '../components/news';
import Wallet from '../components/wallet';
import Collection from '../components/collection';
import { Size } from "../../../interfaces/size";
import useWindowSize from "../../../hook/windowSize";

const Description = () => {
    const size: Size = useWindowSize();
    return (
        <div className="w-full lg:px-10 md:px-10 sm:px-1 pt-3">
            {
                size.width >= 700
                ? <div className="grid grid-cols-5 gap-3 px-8 py-3">
                    <div className="col-start-1 col-span-3"><News/></div>
                    <div className="col-start-4 col-span-3 row-span-2 "><Wallet/></div>
                    <div className="col-start-1 col-span-3"><Collection/></div>
                </div>
                : <div className="p-8 space-y-2">
                <News/>
                <Wallet/>
                <Collection/>
                </div>
            }
        </div>
        // <div className='flex flex-wrap pt-7 pl-10 pr-10'>
        //     <div className='text-xl text-white  grow p-1 w-3/5'>
        //         <div className='bg-[#333236] rounded-xl'>
        //             <div className='pl-6'>
        //                 WHAT'S <span className='font-bold'>NEW</span>
        //             </div>
        //             <div className="background-ad">
        //                 2022
        //             </div>
        //             <div className='h-6'>
        //             </div>
        //         </div>
        //         <div className='bg-[#333236] rounded-xl mt-2 '>
        //             <div className='pl-6'>
        //                 MY <span className='font-bold'>COLLECTION</span>
        //             </div>
        //             <div className=''>
        //                 <div className='flex justify-start flex-wrap'>
        //                     {images.map((image, index) => {
        //                         return <div key={index} className="p-3">
        //                             <img src={image} alt="test" className='w-48 h-48' />
        //                         </div>
        //                     })}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='text-white grow p-1'>
        //         <div className='bg-[#333236] rounded-xl'>
        //             <div className='pl-6 text-xl'>
        //                 MY <span className='font-bold'>WALLET</span>
        //             </div>
        //             <div className='flex justify-center pt-2'>
        //                 <div className='flex rounded-full w-36 h-36 items-center justify-center border-[#009cde] border-4 '>
        //                     50.79M
        //                 </div>
        //             </div>
        //             <div className='flex justify-center text-sm pt-3 pb-3'>
        //                 TOKEN BALANCE
        //             </div>
        //             <div className='flex justify-center pb-10'>
        //                 <button className='rounded p-2 bg-[#e4144e] text-sm'>BUY TOKENS</button>
        //             </div>
        //             <div>
        //                 <div className='grid grid-cols-4 gap-4 pl-6 pb-4 text-[#009cde]'>
        //                     <div className="">DATE</div>
        //                     <div className="">QTY</div>
        //                     <div className="">TYPE</div>
        //                     <div className="">TRX ID</div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4 border-b-2 border-b-black'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">5,000,000</div>
        //                     <div className="text-[#05edc6]">DEPOSIT</div>
        //                     <div className=""></div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4 border-b-2 border-b-black'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">500</div>
        //                     <div className="text-[#f0705f]">WITHDRAWL</div>
        //                     <div className=""></div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4 border-b-2 border-b-black'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">1000</div>
        //                     <div className="text-[#009cde]">TRANSFER</div>
        //                     <div className=""></div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4 border-b-2 border-b-black'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">0.0000009</div>
        //                     <div className="text-[#05edc6]">REFLECTION</div>
        //                     <div className=""></div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4 border-b-2 border-b-black'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">500</div>
        //                     <div className="text-[#f0705f]">WITHDRAWL</div>
        //                     <div className=""></div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4 border-b-2 border-b-black'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">1000</div>
        //                     <div className="text-[#009cde]">TRANSFER</div>
        //                     <div className=""></div>
        //                 </div>
        //                 <div className='grid grid-cols-4 gap-4 pb-3 pt-3 pl-2 ml-4 mr-4'>
        //                     <div className="">2022-07-21</div>
        //                     <div className="">0.0000009</div>
        //                     <div className="text-[#05edc6]">REFLECTION</div>
        //                     <div className=""></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Description;