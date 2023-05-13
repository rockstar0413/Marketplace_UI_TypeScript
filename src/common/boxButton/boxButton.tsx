import { twMerge } from "tailwind-merge"
interface Props {
  className?: string,
  img: any,
  title: string,
  description: string,
  onClick?: () => void
}

function BoxButton({className, img, title, description, onClick}: Props) {
  return (
    <button className={twMerge("px-3 rounded-md text-white text-left aspect-square w-[250px]", className)} onClick={onClick}>
      <div className="w-full h-[80px] flex py-1 px-2">
      <img src={img} alt="img" width={70}></img>
      </div>
      <div className='font-bold text-[28px] my-2'>{title}</div>
      <div className='text-[16px]'>{description}</div>
    </button>
  );
}

export default BoxButton