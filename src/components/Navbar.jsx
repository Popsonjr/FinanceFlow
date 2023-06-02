import { logo, menu, close } from "../assets";
import { NavLinks } from "../constants";
import { useState } from "react";
import styles from "../style";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full ${styles.padding}`}>
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
          <Button buttonStyles="bg-secondary h-[56px]" />
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

      <div className={`md:hidden w-[100%] h-[100%] relative ${!toggle ? "hidden" : ""}`}>
        <ul className="flex flex-col uppercase text-[32px] items-center">
          {NavLinks.map((link, index) => (
            <li className={`z-[5] mt-[40px] h-[32px] leading-[100%] tracking-[1.4px] ${index == NavLinks.length - 1 ? 'mb-[40px]' : ''}`} key={link.id}>
              {link.title}
            </li>
          ))}
          <div className="flex justify-items-center items-center">
            <Button buttonStyles="z-[5] bg-secondary w-[300px] h-[70px] text-[16px] mb-[40px]" />
          </div>
        </ul>

        <div className="absolute w-[70%] h-[50%] bottom-[30%] left-[20%] rounded-full green__gradient z-[0]"></div>
        
      </div>
    </nav>
  );
};

export default Navbar;
