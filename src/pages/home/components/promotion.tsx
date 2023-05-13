import Box from "../../../common/box";
import BoxButton from "../../../common/boxButton/boxButton";
import Gift from "../../../assets/images/Frame1.png"
import Premium from "../../../assets/images/Frame2.png"
import Promote from "../../../assets/images/Frame4.png"
import Airdrop from "../../../assets/images/Frame3.png"

function Promotion() {
  return (
    <Box title="" subTitle="" buttonName="VIEW ALL" isHeader={false}>
      <div className="flex px-4 flex-wrap gap-14 pb-16 pt-1 justify-center">
        <BoxButton className="bg-gradient-to-b from-purple-500 to-pink-500" img={Gift} title="Gifting" description="Give a special gift to one of our frontline charity partners"/>
        <BoxButton className="bg-gradient-to-b from-blue-900 to-cyan-500" img={Premium} title="Competitions" description="Earn Selfles tokens by competing in our community events"/>
        <BoxButton className="bg-gradient-to-b from-blue-800 to-purple-500" img={Airdrop} title="Airdrops" description="We see you out there being selfles! Jump on one of our Airdrop activities and earn!"/>
        <BoxButton className="bg-[#e4144e]" img={Promote} title="Promos" description="Don’t miss these limited time opportunities to earn Selfles tokens "/>
      </div>
    </Box>
  )
}

export default Promotion;