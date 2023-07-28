

import { Buttonn } from "../components/icons/Buttonn"



export const NavBar = () => {
  return (


    <header className=" bg-white flex items-center p-[15px] justify-between w-full h-[70px] shrink-0 border-b ">
      <div className="flex items-center gap-5">
        <button className=""><Buttonn/></button>
        <div className="flex items-start gap-2  cursor-pointer">
        <span className="text-gray-500 font-inter  text-sm font-semibold leading-normal">
  Project Name /
</span>
<span className="text-black-500 font-inter text-sm font-semibold leading-normal">
  Recent workflows
</span>
        </div></div>
      <div className="flex   items-center self-stretch gap-3 ">
        <span></span>
        <div className="text-gray-700 font-inter text-[14px] font-semibold leading-5 capitalize">Alguma Coisa</div>
        <button><Buttonn /></button>
        <button><Buttonn /></button>
        <button><Buttonn /></button>
        <button><Buttonn /></button></div>
    </header>
  );
};
export default NavBar;