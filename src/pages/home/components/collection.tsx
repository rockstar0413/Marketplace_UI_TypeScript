import { useState } from "react";
import Green from '../../../assets/images/green.png'
import Blue from '../../../assets/images/blue.png'
import Red from '../../../assets/images/red.png'
import Base from '../../../assets/images/Base.png'
import Box from "../../../common/box";

function Collection() {
  const [collections] = useState([Green, Blue, Red, Base]);
  return (
    <Box title="MY" subTitle="COLLECTION" buttonName="VIEW ALL">
      <div className="grid lg:grid-cols-[repeat(auto-fit,_minmax(_160px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(_160px,_1fr))] gap-4 px-8 mt-2  flex justify-center">
        {
          collections.map((collection, index) => (
            <img src={collection} className="rounded-xl w-[250px] lg:w-[200px] md:w-[200px]" alt="collection"  key={index}></img>
          ))
        }
      </div>
    </Box>
  )
}

export default Collection;