import React, { useState } from "react";

import WorkDetail from "../../utils/WorkDetail";
import { useSpring, config } from "react-spring";

function MyProjects({ parallaxRef }) {
  const projects = [
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1693145897/portfolio/Screen_Shot_2023-08-27_at_10.16.04_AM_lu3uzo.png",
      title: "Blackjack",
      githubUrl: "https://github.com/alantothe/Blackjack_OOP",
      websiteUrl: "https://alantothe.github.io/Blackjack_OOP/",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1693146991/portfolio/68747470733a2f2f692e696d6775722e636f6d2f44516c487443422e706e67_kxske5.png",
      title: "Real Time Chat App",
      githubUrl: "https://github.com/user/project2",
      websiteUrl: "https://chatapp.alanwebdev2.com",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1693147047/portfolio/Screen_Shot_2023-08-27_at_10.37.05_AM_fs8vot.png",
      title: "Wine E-commerce",
      githubUrl: "https://github.com/user/project3",
      websiteUrl: "https://chatapp.alanwebdev3.com",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049417/portfolio/Screen_Shot_2023-06-17_at_8.49.57_PM_ljy1ap.png",
      title: "Blog Website",
      githubUrl: "https://github.com/user/project3",
      websiteUrl: "https://chatapp.alanwebdev3.com",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
  ];

  const animationProps = useSpring({
    from: { opacity: 0, marginTop: 50 },
    to: { opacity: 1, marginTop: 0 },
    reset: true,
    config: config.stiff,
  });

  const handleClick = () => {
    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(2);
    }
  };
  const handleClickTop = () => {
    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(0);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="mt-10 flex items-center justify-center"
        onClick={() => handleClickTop()}
      >
        <div className="cursor-pointer">
          <svg className="arrows w-10 h-12 absolute top-5 left-1/2 transform -translate-x-1/2 rotate-180">
            <path
              className="a1 stroke-[#FFFFE0] fill-transparent animate-arrow delay-500"
              d="M0 0 L20 20 L40 0"
            ></path>
            <path
              className="a2 stroke-[#FFFFE0] fill-transparent animate-arrow delay-1000"
              d="M0 8 L20 28 L40 8"
            ></path>
            <path
              className="a3 stroke-[#FFFFE0] fill-transparent animate-arrow delay-1500"
              d="M0 16 L20 36 L40 16"
            ></path>
          </svg>
        </div>
      </div>
      <h1 className="pt-14 text-lightyellow text-3xl font-bold uppercase">
        Web Applications
      </h1>
      <hr className="border-white w-72 m-10" />
      <WorkDetail projects={projects} />
      <div
        className="mt-8 flex items-center justify-center "
        onClick={() => handleClick()}
      >
        <div className="cursor-pointer">
          <svg className="arrows w-10 h-12 absolute bottom-5 left-1/2 transform -translate-x-1/2">
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
    </div>
  );
}

export default MyProjects;
