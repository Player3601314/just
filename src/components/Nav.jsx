import { IoClose, IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import logo from "../assets/logo.svg";
import storiesIcon from "../assets/stories.svg";
import servicesIcon from "../assets/services.svg";
import guidanceIcon from "../assets/guidanceIcon.webp"

const Nav = () => {
  const [languages, setLanguages] = useState("English");
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`w-[100%] h-auto p-[6px] fixed top-0 z-50 transition-transform duration-300 bg-[rgb(36_35_57)] opacity-80 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex items-center justify-between">
        <div className="w-[170px] h-[50px]">
          <img className="w-[100%] h-[100%]" src={logo} alt="" />
        </div>
        <div>
          <IoMenu onClick={() => setNavbar(true)} size={30} />
        </div>
        <div onClick={() => setShow(!show)} className="bg-[#343257] opacity-80 rounded-full">
          <div className="w-[100%] py-[8px] px-[16px] flex items-center justify-between">
            <p>{languages}</p>
            <IoIosArrowDown />
          </div>
        </div>
        {show && (
          <div className="w-[100px] h-[124px] rounded-[6px] bg-[#343267] absolute top-[50px] right-[6px] opacity-80 p-[14px] flex flex-col justify-between items-center">
            <span
              onClick={() => setLanguages("English")}
              className="w-[100%] flex items-center justify-between"
            >
              English {languages === "English" && <MdDone />}
            </span>
            <span
              onClick={() => setLanguages("Русский")}
              className="w-[100%] flex items-center justify-between"
            >
              Русский {languages === "Русский" && <MdDone />}
            </span>
            <span
              onClick={() => setLanguages("Uzbek")}
              className="w-[100%] flex items-center justify-between"
            >
              Uzbek {languages === "Uzbek" && <MdDone />}
            </span>
          </div>
        )}

        {navbar && (
          <div className="w-[200px] h-[240px] bg-[rgb(41_40_65)] rounded-[6px] absolute top-[10px] right-[12px] p-[10px] flex flex-col gap-[20px]">
            <div className="w-[100%] h-auto flex justify-center items-center">
              <IoClose size={30} onClick={() => setNavbar(false)} />
            </div>
            <div className="flex flex-col justify-between gap-[16px]">
              <div className="w-auto flex justify-between items-center rounded-full py-[4px] px-[6px] bg-[rgb(52_50_87)] border border-solid border-[rgb(72_70_119)] hover:border-indigo-500 hover:bg-[rgb(72_70_119)] active:scale-95 select-none">
                <img className="w-[36px] h-[36px] rounded-full" src={storiesIcon} alt="" />
                <p className="text-[18px] font-bold hover:text-indigo-500 duration-200 ml-[10px]">
                  Stories
                </p>
              </div>
              <div className="w-auto flex justify-between items-center rounded-full py-[4px] px-[6px] bg-[rgb(52_50_87)] border border-solid border-[rgb(72_70_119)] hover:border-indigo-500 hover:bg-[rgb(72_70_119)] active:scale-95 select-none">
                <img
                  className="w-[36px] h-[36px] rounded-full"
                  src={guidanceIcon}
                  alt=""
                />
                <p className="text-[18px] font-bold hover:text-indigo-500 duration-200 ml-[10px]">
                  Guidance App
                </p>
              </div>
              <div className="w-auto flex justify-between items-center rounded-full py-[4px] px-[6px] bg-[rgb(52_50_87)] border border-solid border-[rgb(72_70_119)] hover:border-indigo-500 hover:bg-[rgb(72_70_119)] active:scale-95 select-none">
                <img className="w-[36px] h-[36px] rounded-full" src={servicesIcon} alt="" />
                <p className="text-[18px] font-bold hover:text-indigo-500 duration-200 ml-[10px]">
                  Services
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
