import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TitleProps = {
  title: string;
  setTitle: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Title = ({ title, setTitle }: TitleProps):JSX.Element => {

  return (
    <input 
      type="text" 
      className='w-full text-3xl font-bold bg-inherit outline-none hover:bg-[#EAE5D3] focus:bg-[#EAE5D3] p-5 rounded-lg duration-100' 
      placeholder='Title' 
      value={title}
      onChange={setTitle}
    />
  )
}

export default Title;