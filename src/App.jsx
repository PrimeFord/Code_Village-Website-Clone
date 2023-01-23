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
          <button className="bg-green-800 text-white h-[3rem] w-[10rem] mt-[3rem] rounded-md">
            Enroll Now
          </button>
        </div>
        <div className=" flex gap-5 #">
          <img
            className="h-[2rem] w-[2rem]"
            src="/image/fb.svg"
            alt="facebook"
          />
          <img
            className="h-[2rem] w-[2rem]"
            src="/image/tw.svg"
            alt="twitter"
          />
          <img
            className="h-[2rem] w-[2rem]"
            src="/image/github.svg"
            alt="github"
          />
          <img
            className="h-[2rem] w-[2rem]"
            src="/image/location.svg"
            alt="location"
          />
        </div>
        <div className="absolute left-[29%]">
          <img src="./image/wallpaper.png" alt="" />
        </div>
      </div>
      <div className="wrp2">
        <div className="w-[100%] flex justify-between">
          <p className=" w-[50%] text-[#18214d] text-[3rem] font-medium leading-[3rem]">
            State of The Art Ecosystem for Creatives
          </p>
          <p className=" w-[39%] text-[#18214d] text-[1.1rem] font-small leading-[1.8rem]">
            Be a part of an all-inclusive technology hub where you learn,
            collaborate with tech creatives and join a team of support systems
            offering you the top tools and frameworks to build solutions and
            earn big.
          </p>
        </div>
        <div className="rounded-2xl w-[100%] h-[100%]">
          <img
            className="h-[100%] w-[100%]"
            src="/image/cv-office.jpg"
            alt=""
          />
        </div>
        <div className="w-[100%] h-[10rem] flex justify-between">
          <div className="h-[100%] flex align-top w-[30%]">
            <div className="w-[20%]">
              <img
                className="w-[3rem] h-[3rem]"
                src="/image/bookmark.svg"
                alt=""
              />
            </div>
            <div className="w-[80%]">
              <p className="text-[2rem] font-small leading-9">
                Web & Mobile Development
              </p>
              <p className="mt-[.5rem] text-[1.1rem] font-small">
                We design and develop tech solutions for SMEs and Government
                Agency.
              </p>
            </div>
          </div>
          <div className="h-[100%] flex align-top w-[30%]">
            <div className="w-[20%]">
              <img className="w-[3rem] h-[3rem]" src="/image/tent.svg" alt="" />
            </div>
            <div className="w-[80%]">
              <p className="text-[2rem] font-small leading-9">
                Bootcamps & Trainings
              </p>
              <p className="mt-[.5rem] text-[1.1rem] font-small">
                We’re building the next generation of tech talents.
              </p>
            </div>
          </div>
          <div className="h-[100%] flex align-top w-[30%]">
            <div className="w-[20%]">
              <img
                className="w-[3rem] h-[3rem]"
                src="/image/workspace.svg"
                alt=""
              />
            </div>
            <div className="w-[80%]">
              <p className="text-[2rem] font-small leading-9">
                Workspaces & Tech Hub
              </p>
              <p className="mt-[.5rem] text-[1.1rem] font-small">
                Work and Connect with other Creatives. All in a fun and cozy
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
