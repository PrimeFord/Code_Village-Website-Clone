import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Program from "./components/Program";
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
      <div className="wrp3">
        <div className="w-[65%]">
          <p className=" w-[100%] text-[#18214d] text-[3.25rem] font-medium leading-[3.2rem] 	tracking-[0em]">
            Learn Web & Mobile Development. Access the global job market.
          </p>
          <p className=" w-[100%] text-[#18214d] text-[1.1rem] font-small leading-[1.8rem] pt-5">
            The world is constantly in need of technical talent supply pool.
            Tech is needed accross every sector. Your course of study doesn’t
            matter. All you need is the skill and experience.
          </p>
          <button className="bg-green-800 text-white h-[3.2rem] w-[10.5rem] mt-[3rem] rounded-md">
            Learn more
          </button>
        </div>
        <div className="w-[35%] pl-[3.5rem] h-[fit-content] border-l border-gray-500 grid gap-7">
          <Program
            img="/image/mail.svg"
            header="Program Schedule"
            info="6 months training + 6months paid internship"
            para="(there is a custom schedule for students)"
          />
          <Program
            img="/image/group.svg"
            header="Our Curriculum"
            info="It covers the fundamentals and advanced concepts of web & mobile development"
          />
          <Program
            img="/image/group.svg"
            header="Experiential Learning"
            info="30+ Hands-on Projects &
            5+ Real World (Production Grade) Projects"
          />
        </div>
      </div>
      <div className="wrp4">
        <div className="w-[100%] text-center block  ">
          <p className=" w-[100%] text-[#18214d] text-[3.25rem] leading-[3.2rem] font-bold tracking-[0em]">
            Our Expertise
          </p>
          <p className=" w-[60%] text-[#18214d] text-[1.25rem] font-small leading-[1.8rem] pt-5 m-[auto]">
            We have built several solutions from ground up using the following
            frameworks. Our world class expertise is enviable.
          </p>
        </div>
        <div className="mt-[3rem] p-[2rem] flex flex-wrap gap-16 justify-center text-center items-center">
          <img src="/image/andriod.svg"></img>
          <img src="/image/bootstrap.svg"></img>
          <img src="/image/aws.svg"></img>
          <img src="/image/heroku.svg"></img>
          <img src="/image/html5.svg"></img>
          <img src="/image/node.svg"></img>
          <img src="/image/github (1).svg"></img>
          <img src="/image/css.svg"></img>
          <img src="/image/gitlab.svg"></img>
          <img src="/image/react.svg"></img>
          <img src="/image/mysql.svg"></img>
          <img src="/image/mongodb.svg"></img>
          <img src="/image/python.svg"></img>
          <img src="/image/vue.svg"></img>
          <img src="/image/postgres.svg"></img>
          <img src="/image/js.svg"></img>
          <img src="/image/firebase.svg"></img>
          <img src="/image/redux.svg"></img>
          <img src="/image/tailwind.svg"></img>
          <img src="/image/ruby.svg"></img>
          <img src="/image/figma.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
