import { twMerge } from "tailwind-merge"
interface Props {
  className?: string,
  name: string,
  onClick: () => void
}

function Button({className, name, onClick}: Props) {
  return (
    <button className={twMerge("bg-red-0 rounded-md px-4 text-white", className)} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button