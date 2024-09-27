import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import bashIcon from "../assets/bash.svg"
import bootstraptIcon from "../assets/bootstarp.svg"
import cssIcon from "../assets/css3.svg"
import figmaIcon from "../assets/figma.svg"
import gitIcon from "../assets/git.svg"
import githubIcon from "../assets/github.svg"
import htmlIcon from "../assets/html.svg"
import jsIcon from "../assets/js.svg"
import nodejsIcon from "../assets/nodejs.svg"
import npmIcon from "../assets/npm.svg"
import reactIcon from "../assets/react.svg"
import reduxIcon from "../assets/redux.svg"
import sassIcon from "../assets/sass.svg"
import tailwindcssIcon from "../assets/tailwindcss.svg"
import vscodeIcon from "../assets/vscode.svg"
import yarnIcon from "../assets/yarn.svg"

const Resurces = () => {
  const icons = [
    {
      id: 1,
      img: htmlIcon
    },
    {
      id: 2,
      img: cssIcon
    },
    {
      id: 3,
      img: sassIcon
    },
    {
      id: 4,
      img: tailwindcssIcon
    },
    {
      id: 5,
      img: bootstraptIcon
    },
    {
      id: 6,
      img: jsIcon
    },
    {
      id: 7,
      img: reactIcon
    },
    {
      id: 8,
      img: reduxIcon
    },
    {
      id: 9,
      img: nodejsIcon
    },
    {
      id: 10,
      img: npmIcon
    },
    {
      id: 11,
      img: yarnIcon
    },
    {
      id: 12,
      img: bashIcon
    },
    {
      id: 13,
      img: gitIcon
    },
    {
      id: 14,
      img: githubIcon
    },
    {
      id: 15,
      img: figmaIcon
    },
    {
      id: 16,
      img: vscodeIcon
    }
  ]

  return (
    <section className="w-[100%] h-auto" data-carousel="slide">
      <div className="w-[100%] h-auto flex flex-col gap-[20px]">
        <div>
          <p>Our resources have already helped students get into</p>
        </div>
        <Marquee
          autoFill={true}
          pauseOnClick={true}
          speed={18}
          gradient={true}
          gradientColor={"rgba(36,35,56,1)"}
          gradientWidth={"50%"}
        >
          {icons.map((item, index) => (
            <Fragment key={index}>
              <div className="w-[64px] h-[64px] bg-[#fff] rounded-[16px] mx-[12px] p-[6px] shadow-[1px_1px_1px_1px_rgb(255,255,255)]">
                <img className="w-[100%] h-[100%]" src={item.img} alt="" />
              </div>
            </Fragment>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Resurces;
