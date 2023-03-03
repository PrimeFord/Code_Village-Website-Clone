import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Program from "./components/Program";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className=" wrp1">
        <div className="log">
          <img className="logo" src="./image/cv-logo.svg" alt="" />
        </div>
        <div className="talk">
          <p className="world  text-[#18214d] font-medium leading-[5rem]">
            We build world class Tech talents
          </p>
          <p className="wrld text-[#18214d]  font-small">
            Join our next cohort to accelerate your dream of being a World Class
            Software Developer. No coding experience required.
          </p>
          <button className="btn bg-green-800 text-white  rounded-md">
            Enroll Now
          </button>
        </div>
        <div className="social flex">
          <img className="h" src="/image/fb.svg" alt="facebook" />
          <img className="h" src="/image/tw.svg" alt="twitter" />
          <img className="h" src="/image/github.svg" alt="github" />
          <img className="h" src="/image/location.svg" alt="location" />
        </div>
        <div className="bg absolute left-[29%]">
          <img src="./image/wallpaper.png" alt="" />
        </div>
      </div>
      <div className="wrp2">
        <div className="first w-[100%] flex justify-between">
          <p className="first1 text-[#18214d] font-medium">
            State of The Art Ecosystem for Creatives
          </p>
          <p className="first2 text-[#18214d] font-small">
            Be a part of an all-inclusive technology hub where you learn,
            collaborate with tech creatives and join a team of support systems
            offering you the top tools and frameworks to build solutions and
            earn big.
          </p>
        </div>
        <div className="pic w-[100%] h-[100%]">
          <img
            className="h-[100%] w-[100%]"
            src="/image/cv-office.jpg"
            alt=""
          />
        </div>
        <div className="schedule w-[100%] flex text-[#3e4462] justify-between">
          <div className="h-[100%] flex align-top w">
            <div className="w-[17%]">
              <img
                className=" w-[3rem] h-[3rem]"
                src="/image/bookmark.svg"
                alt=""
              />
            </div>
            <div className="w-[83%]">
              <p className="te font-small">Web & Mobile Development</p>
              <p className=" x font-small">
                We design and develop tech solutions for SMEs and Government
                Agency.
              </p>
            </div>
          </div>
          <div className="h-[100%] flex align-top w">
            <div className="w-[17%]">
              <img className="w-[3rem] h-[3rem]" src="/image/tent.svg" alt="" />
            </div>
            <div className="w-[83%]">
              <p className="te font-small ">Bootcamps & Trainings</p>
              <p className=" x font-small">
                We’re building the next generation of tech talents.
              </p>
            </div>
          </div>
          <div className="h-[100%] flex align-top w">
            <div className="w-[17%]">
              <img
                className="w-[3rem] h-[3rem]"
                src="/image/workspace.svg"
                alt=""
              />
            </div>
            <div className="w-[83%]">
              <p className="te font-small ">Workspaces & Tech Hub</p>
              <p className=" x font-small">
                Work and Connect with other Creatives. All in a fun and cozy
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrp3">
        <div className="sec1">
          <p className=" w-[100%] text-[#18214d] text-[3.25rem] font-medium	tracking-[0em]">
            Learn Web & Mobile Development. Access the global job market.
          </p>
          <p className=" w-[100%] text-[#18214d]  font-small  pt-5">
            The world is constantly in need of technical talent supply pool.
            Tech is needed accross every sector. Your course of study doesn’t
            matter. All you need is the skill and experience.
          </p>
          <button className="btn bg-green-800 text-white rounded-md">
            Learn more
          </button>
        </div>
        <div className="sec2 ">
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
        <div className="w-[100%] text-center ">
          <p className=" w-[100%] text-[#18214d] text-[3.25rem] leading-[3.2rem] font-bold tracking-[0em] mb-4">
            Our Expertise
          </p>
          <p className="bl  text-[#18214d] font-small  pt-5 m-[auto]">
            We have built several solutions from ground up using the following
            frameworks. Our world class expertise is enviable.
          </p>
        </div>
        <div className="lang mt-[3rem]  justify-center text-center items-center">
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
      <div className="wrp5">
        <p className="for text-[#18214d]  font-medium tracking-[0em] m-[auto] ">
          Codevillage Kids & Teens Code Classes
        </p>
        <p className=" w-[75%] text-[#18214d] text-[1.2rem] font-small leading-[1.8rem] pt-5 m-[auto] ">
          Will your kids be able to build a tech solution? Yes, It’s possible.
          <br />
          “We catch them young” by introducing these fresh minds into how
          computer works and how
          <br /> to make it do what they want.
        </p>
        <div className="w-[fit-content] text-[#18214d] text-[1.2rem] font-medium leading-[1.8rem] pt-5 m-[auto] flex gap-2">
          Secure a spot for your kid now
          <span>
            <img src="/image/arrow-right.svg" />
          </span>
        </div>
      </div>
      <footer className="wrp6">
        <div className="abt flex justify-between gap-[5rem] text-[#3e4462]">
          <div className="w-[12rem]  h-fit grid gap-4">
            <p>
              <img
                className="w-[100%] h-[100%]"
                src="./image/cv-logo.svg"
                alt=""
              />
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-small leading-[1.8rem]">
              Building the tech talents for the future of work.
            </p>
          </div>
          <div className="w-[12rem]  h-fit grid gap-4">
            <p className="w-[fit-content] text-[1.25rem] font-bold pb-4 leading-[1.8rem]">
              Our Programs
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-small leading-[1.8rem]">
              Fullstack Training
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-small leading-[1.8rem]">
              Kids & Teens Code Classes
            </p>
          </div>
          <div className="w-[12rem]  h-fit grid gap-4">
            <p className="w-[fit-content] text-[1.25rem] font-bold pb-4 leading-[1.8rem]">
              Links
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-small leading-[1.8rem]">
              Careers
              <br /> Refund Policy
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-small leading-[1.8rem]">
              Privacy Policy
            </p>
          </div>
          <div className="w-[12rem] h-fit grid gap-4">
            <p className="w-[fit-content] text-[1.25rem] font-bold pb-4 leading-[1.8rem]">
              Contacts
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-small leading-[1.8rem]">
              Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger
              Road, Ilorin, Nigeria
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-bold leading-[1.8rem]">
              08168861541 (Nigeria)
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-bold leading-[1.8rem]">
              +1 (707) 681-1531 (International)
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-bold leading-[1.8rem]">
              +1 (707) 681-1531 (Whatsapp)
            </p>
            <p className="w-[fit-content] text-[1.25rem] font-bold leading-[1.8rem]">
              hello@codevillage.ng
            </p>
          </div>
        </div>
        <div className="flex justify-between py-8 border-t border-gray-500">
          <p className="w-[fit-content] text-[#6e6e6e] text-[1.15rem] font-small leading-[1.8rem]">
            Copyright © 2020-2023 Codevillage Limited
          </p>
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
        </div>
      </footer>
    </div>
  );
}

export default App;
