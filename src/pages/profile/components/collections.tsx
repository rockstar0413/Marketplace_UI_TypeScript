import Green from '../../../assets/images/green.png'
import Blue from '../../../assets/images/blue.png'

import MyCollection from './collectionItem';
function Collection() {
  return (
    <div>
        <div className="flex flex-wrap gap-14 pb-16 pt-1 justify-center md:justify-start lg:justify-start ">
          <MyCollection className="bg-gradient-to-b from-[#A53594] to-[#F0705F]" img={Green} title="2022 All Access" description=""/>
          <MyCollection className="bg-gradient-to-b from-[#3C3795] to-[#FA78CD]" img={Blue} title="Bl Promo" description=""/>
      </div>
    </div>
  )
}

export default Collection;