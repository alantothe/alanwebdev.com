import React from "react";
import aboutme from "../svg/aboutme.svg";
import { useSpring, config } from "react-spring";

function AboutMe({ parallaxRef }) {
  const animationProps = useSpring({
    from: { opacity: 0, marginTop: 50 },
    to: { opacity: 1, marginTop: 0 },
    reset: true,
    config: config.stiff,
  });

  const handleClick = () => {
    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(1);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className="mt-10 flex items-center justify-center"
        onClick={() => handleClick()}
      >
        <div className="cursor-pointer">
          <svg className="arrows w-10 h-12 absolute bottom-5 left-1/2 transform -translate-x-1/2 rotate-180">
            <path
              className="a1 stroke-[#FFFFE0] fill-transparent animate-arrow delay-1000"
              d="M0 0 L20 20 L40 0"
            ></path>
            <path
              className="a2 stroke-[#FFFFE0] fill-transparent animate-arrow delay-250"
              d="M0 8 L20 28 L40 8"
            ></path>
            <path
              className="a3 stroke-[#FFFFE0] fill-transparent animate-arrow"
              d="M0 16 L20 36 L40 16"
            ></path>
          </svg>
        </div>
      </div>

      <h1 className="pt-5 text-lightyellow text-3xl font-bold uppercase">
        About Me
      </h1>
      <hr className="border-white w-72 m-10" />
      <div className="flex flex-row items-center justify-center px-36 border-2 mx-32 pt-10 border-yellow-100 bg-coolgrey drop-shadow-md">
        <img className="" src={aboutme} />
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-lightyellow text-2xl font-extrabold pb-8   ">
            My Journey to Web Development
          </h1>
          <p className="text-white text-xl font-extrabold leading-relaxed pl-0 pr-0 shadow-lg text-justify">
            Transitioning from a background in Procurement Management, including
            a pivotal role in the Air Force ICBM program, to the dynamic world
            of Full-Stack Web Development, I seamlessly blend strategic insight
            with my growing technical skills. My expanding portfolio stands as a
            testament to my determination, swift learning curve, and
            versatility. Drawing upon my rich logistics and defense experience,
            I am poised to craft tech solutions that not only resonate with user
            requirements but also dovetail with business objectives. I am eager
            to carve a distinctive niche in the tech arena. If you wish to
            contact me, please view my Resume for my contact information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
