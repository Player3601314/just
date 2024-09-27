import Nav from "./Nav"
import historyBG from "../assets/historyBGPhone.webp"
import { useLayoutEffect, useRef, useState } from "react"

const Header = () => {
  const container = useRef(null)
  const [containerWidth, setContainerWidth] = useState("")

  useLayoutEffect(() => {
    let currentWidth = container.current.offsetWidth
    setContainerWidth(currentWidth)
    console.log(currentWidth);
  }, [containerWidth])

  return (
    <header className="w-[100%] h-auto">
      <Nav />

      <div className="w-[100%] h-auto py-[60px] px-[10px]">
        <div>
          <div className="w-[88%] mx-auto my-[40px] flex flex-col justify-between gap-[10px]">
            <h1 className="text-[24px] font-semibold">Borderless | Study Abroad</h1>
            <h3 className="text-lg font-normal text-indigo-300 lg:text-xl">Read <strong className="text-indigo-300">Stories</strong> of successful applicants. Get into your dream university abroad with <strong className="text-indigo-300">Guidance App</strong>.</h3>
            <div className="w-[100%] flex justify-between text-base select-none">
              <button className="font-semibold py-[10px] px-[24px] rounded-[6px] bg-cover bg-[url('/src/assets/buttonBG.webp')] text-right active:scale-95 hover:opacity-80 duration-100">Use <br /> Guidance App</button>
              <button className="font-semibold py-[10px] px-[24px] rounded-[6px] active:scale-95 bg-indigo-400/5 duration-100 border border-solid border-[rgb(76_100_244)] text-indigo-400">Read <br /> Stories</button>
            </div>
          </div>
          <div id="container" ref={container} className="w-[100%] h-[480px] flex justify-around">
            <img className={`w-[${containerWidth}px] h-auto left-0 object-cover absolute z-0`} src={historyBG} alt="" />
            <div className="w-[100%] h-[80%] py-[80px] mx-auto relative z-[10] text-center flex flex-col justify-between">
              <div>
                <p className="uppercase text-[16px] text-blue-300">COUNTRY → COUNTRY_NAME</p>
              </div>
              <div className="w-[60%] h-auto mx-auto rounded-full border border-solid border-[rgb(214_78_248)]">
                <div className="w-[100%]">IMG</div>
                {/* <img className="w-[100%] h-[100%]" src="https://borderless.so/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fborderless-so.appspot.com%2Fposts%252Ffrom-syria-to-constructor-university-germanys-most-international-university%252Fsquare.jpeg&w=384&q=75" alt="" /> */}
              </div>
              <div>
                <p>USER_NAME</p>
                <p>from COUNTRY_NAME</p>
                <p>studies STUDY_PLACE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header