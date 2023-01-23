import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="wrp1">
        <div className="py-[4rem]">
          <img src="./image/cv-logo.svg" alt="" />
        </div>
        <div className="talk">
          <p className="w-[35%] text-[#18214d] text-[5rem] font-medium leading-[5rem]">
            We build world class Tech talents
          </p>
          <p className="w-[50%] mt-[1.5rem] text-[#18214d] text-[1.5rem] font-small leading-[2rem]">
            Join our next cohort to accelerate your dream of being a World Class
            Software Developer. No coding experience required.
          </p>
        </div>
        <div className="absolute left-[29%]">
          <img src="./image/wallpaper.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
