import Box from "../../../common/box";
import Button from "../../../common/button";

function Wallet() {
  return (
    <Box title="MY" subTitle="WALLET" isFooter={false}>
      <div className="w-full relative text-[14px]">
        <div className="text-center mb-8">
          <div className="absolute w-2/5 aspect-square border rounded-full  bg-blue-0 blur left-1/2 -translate-x-1/2"/>
          <div className="w-2/5 aspect-square rounded-full border-[#009cde] mx-auto  border-[#009cde] border-4">
            <p className="relative top-1/2 -translate-y-1/2 text-red-0 md:text-4xl text-2xl lg:text-4xl md:text-2xl text-[#D53552] font-black">50.79M</p>
          </div>
          <div className="my-4 text-white text-[20px]">
            TOKEN BALANCE
          </div>
          <Button name="BUY TOKEN" onClick={()=>{}} className="py-2 bg-gradient-to-b from-[#e4144e] to-[#8d0c31] text-[16px]"/>
        </div>
        <div className="flex px-3 text-[#009cde]">
          <div className="w-[30%] text-blue-0">DATE</div>
          <div className="w-[30%] text-blue-0">QTY</div>
          <div className="w-[30%] text-blue-0">TYPE</div>
          <div className="text-blue-0">TRX ID</div>
        </div>
        <div className="px-2 divide-y-[0.5px] divide-black">
          {
            Array(6).fill(0).map((val, index) => (
              <div className="flex py-3 px-2 text-white" key={index}>
                <div className="w-[30%]">2022-07-21</div>
                <div className="w-[30%]">5,000,000</div>
                <div className="w-[30%] text-[#05edc6]">DEPOSIT</div>
                <div className=""></div>
              </div>
            ))
          }
        </div>
      </div>
    </Box>
  )
}

export default Wallet;