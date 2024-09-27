import { useState } from "react"
import gudianceIcon from "../assets/guidanceIcon.webp"
const Guidance = () => {

  const [guidance, setGuidance] = useState("book")

  return (
    <section className="w-[100%] h-auto">
      <div className="w-[100%] h-auto py-[40px] px-[20px]">
        <div className="w-[85%] mx-auto text-center">
          <div className="w-[36px] h-[36px] mx-auto">
            <img className="w-[100%] h-[100%] object-cover rounded-full" src={gudianceIcon} alt="" />
          </div>
          <h2 className="text-[#4facfe] my-[6px] text-transparent text-[32px] font-bold">Guidance App</h2>
          <h4 className="text-[20px] text-[rgb(193_215_237)] font-light px-[18px]">We assist international students in gaining admission to undergraduate programs abroad</h4>
        </div>
        <div className="w-[100%] h-auto py-[36px] flex flex-wrap items-center text-center justify-evenly gap-[20px]">
          <div onClick={() => setGuidance("book")} className={`w-[35%] ${guidance === "book" ? "opacity-100" : "opacity-50"}`}>
            <b>Book</b>
            {/* <img src="" alt="" /> */}
            <p>Step-by-step guides</p>
          </div>
          <div onClick={() => setGuidance("peper")} className={`w-[35%] ${guidance === "peper" ? "opacity-100" : "opacity-50"}`}>
            <b>Paper</b>
            {/* <img src="" alt="" /> */}
            <p>College List Generator</p>
          </div>
          <div onClick={() => setGuidance("ball")} className={`w-[35%] ${guidance === "ball" ? "opacity-100" : "opacity-50"}`}>
            <b>Ball</b>
            {/* <img src="" alt="" /> */}
            <p>Activities Review</p>
          </div>
          <div onClick={() => setGuidance("rocket")} className={`w-[35%] ${guidance === "rocket" ? "opacity-100" : "opacity-50"}`}>
            <b>Rocket</b>
            {/* <img src="" alt="" /> */}
            <p>Passion Project Ideas</p>
          </div>
          <div onClick={() => setGuidance("card")} className={`w-[35%] ${guidance === "card" ? "opacity-100" : "opacity-50"}`}>
            <b>Card</b>
            {/* <img src="" alt="" /> */}
            <p>LOR Brag Sheet</p>
          </div>
          <div onClick={() => setGuidance("coin")} className={`w-[35%] ${guidance === "coin" ? "opacity-100" : "opacity-50"}`}>
            <b>Coin</b>
            {/* <img src="" alt="" /> */}
            <p>Scholarships & Fin aid</p>
          </div>
        </div>
        <div className="my-[20px] text-center">
          {/* <img src="" alt="" /> */}
          <p>{guidance}</p>
        </div>
        <div className="w-[100%] flex items-center mx-auto">
          <button className="mx-auto font-semibold py-[10px] px-[24px] rounded-[6px] bg-cover bg-[url('/src/assets/buttonBG.webp')] text-right active:scale-95 hover:opacity-80 duration-100">Use Guidance App</button>
        </div>
      </div>
    </section>
  )
}

export default Guidance