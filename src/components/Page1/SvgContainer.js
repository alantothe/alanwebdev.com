import React from 'react';

import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
import GitHub from "../svg/github";
import Twitter from "../svg/Twitter";
import Projects from "../svg/Projects";
import Resume from "../svg/Resume";
import Email from "../svg/Email";
import { useNavigate } from 'react-router-dom';


function SvgContainer({parallaxRef}) {

    const navigate = useNavigate();




  const [currentTitle, setCurrentTitle] = useState("");
  const [key, setKey] = useState(0);

  const animationProps = useSpring({
    from: { opacity: 0, marginTop: 50 },
    to: { opacity: 1, marginTop: 0 },
    reset: true,
    reverse: !currentTitle,
    key: key,
    config: config.stiff,
  });

  const handleMouseEnter = (title) => {
    setCurrentTitle(title);
    setKey(prevKey => prevKey + 1);
  };
  const handleMouseLeave = () => {
    setCurrentTitle("");
    setKey(prevKey => prevKey + 1);
  };

  const handleClick = (title) => {
    if (title === 'Projects' && parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(1);
    } else if (title === 'GitHub') {
      window.open('https://github.com/alantothe', '_blank');
    } else if (title === 'Twitter') {
      window.open('https://twitter.com/alanmalpartida_', '_blank');
    } else if (title === 'Resume') {
      window.open('https://alantothe.github.io/personal_website/resume/resume.html', '_blank');
    }
     else if (title === 'Email') {
      window.open('mailto:rubenamalpartida@gmail.com')
    }




  };


  const svgs = [
    { id: 1, title: "GitHub", Component: GitHub },
    { id: 2, title: "Twitter", Component: Twitter },
    { id: 3, title: "Projects", Component: Projects },
    { id: 4, title: "Resume", Component: Resume },
    { id: 5, title: "Email", Component: Email },
  ];

  return (
    <div>
    <div className="flex justify-center p-2" id="icon-container">
      {svgs.map(({ id, title, Component }) => (
        <div
          key={id}
          className="w-16 h-16"
          onMouseEnter={() => handleMouseEnter(title)}
          onMouseLeave={handleMouseLeave}
          // You added an onClick handler here that calls handleClick with the title
          onClick={() => handleClick(title)}
        >
          <div className="p-2">
            <Component />
          </div>
        </div>
      ))}
    </div>
    <div className='h-10'>
      {currentTitle && (
        <animated.h1 style={animationProps} className="flex justify-center text-white text-lg font-mono font-thin transition-opacity duration-500 ease-in-out opacity-100">
          {currentTitle}
        </animated.h1>
      )}
    </div>
  </div>
  );
}

export default SvgContainer;

