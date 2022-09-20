import { Dispatch, SetStateAction } from "react";

type SaveButtonProps = {
  saved: boolean;
  setSaved: Dispatch<SetStateAction<boolean>>;
}

const SaveButton = ({ saved, setSaved }: SaveButtonProps): JSX.Element => {
  const handleClick = () => {
    if (!saved) setSaved(true);
  }

  return (
    <div className="relative group">
      <button
        className={`flex items-center justify-start bg-stone-300 text-stone-500 hover:bg-stone-400 hover:text-stone-600 duration-100 p-3 h-10 w-10 text-base rounded-full`}
        onClick={handleClick}
      >
        {saved ? '✔️' : '···'}
      </button>
      <div className="absolute -bottom-5 w-full flex items-center">
      <span 
        className="text-stone-500 w-full text-sm opacity-0 group-hover:opacity-100 delay-200 duration-200 ease-in-out"
      >
        {saved ? 'Saved' : 'Save'}
      </span>
      </div>
    </div>
  );
}

export default SaveButton;