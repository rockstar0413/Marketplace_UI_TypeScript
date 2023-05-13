interface BoxProps {
  children: any,
  title: string,
  subTitle: string,
  isFooter?: boolean,
  isHeader?: boolean,
  buttonName?: string,
  onClick?: () => void
}

function Box({ children, title, subTitle, buttonName, onClick, isFooter = true, isHeader = true}: BoxProps) {
  return (
    <div className="w-full h-full flex flex-col bg-[#333236] rounded-3xl">
      {isHeader &&
        <div className="px-4 h-10 items-center flex text-white text-[28px]">
        {title}<span className="text-white font-black ml-2">{subTitle}</span>
      </div>
      }
      {children}
      {
        isFooter && 
        <div className="w-full h-10 pt-2 mt-auto">
          {
            buttonName &&
            <button className="float-right h-full px-4 text-white bg-gradient-to-b from-[#e4144e] to-[#8d0c31] rounded-br-3xl rounded-tl-3xl text-[14px]" onClick={onClick}>
              {buttonName}
            </button>
          }
        </div>
      }
    </div>
  )
}

export default Box;