import { logo, menu, close } from "../assets";
import { NavLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full text-white p-[24px] md:py-[33px] md:px-[133px]">
      <div className="hidden md:flex justify-between items-center">
        <div className="flex justify-items-center items-center">
          <img className="w-[154px] h-[30px] mr-[27px]" src={logo} />
          <span className="border-[0.1px] border-white h-[66px]"></span>

          <ul className="flex uppercase font-medium text-[14px] leading-4 justify-items-center items-center">
            {NavLinks.map((link) => (
              <li className="pl-[27px]" key={link.id}>
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-items-center items-center">
          <button className="bg-secondary h-[56px] w- [210px] uppercase rounded-[80px] px-[32px]">
            Download app
          </button>
        </div>
      </div>

      <div className="md:hidden flex justify-items-center items-center justify-between">
        <img className="w-[154px] h-[30px] mr-[27px]" src={logo} />
        <img
          onClick={() => setToggle((menuState) => !menuState)}
          className=""
          src={toggle ? close : menu}
        />
      </div>

      <div className={!toggle ? "hidden" : ""}>
        <ul className="flex flex-col uppercase font-medium text-[32px] leading-4 items-center">
          {NavLinks.map((link) => (
            <li className="pt-[27px]" key={link.id}>
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
