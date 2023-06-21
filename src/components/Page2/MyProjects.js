import React, { useState } from 'react';

import GitHub from '../svg/github';
import WorldWideWeb from '../svg/WorldWideWeb';
import Info from '../svg/Info';

function MyProjects() {
  const projects = [
    {
      imageUrl: "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049071/portfolio/Screen_Shot_2023-06-17_at_8.43.39_PM_fgwgod.png",
      title: "Blackjack",
      githubUrl: "https://github.com/user/project1",
      websiteUrl: "https://chatapp.alanwebdev.com",
      infoLink: "https://chatapp.alanwebdev2.com"
    },
    {
      imageUrl: "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687048654/portfolio/Screen_Shot_2023-06-17_at_8.34.41_PM_r3hjdt.png",
      title: "Chat App",
      githubUrl: "https://github.com/user/project2",
      websiteUrl: "https://chatapp.alanwebdev2.com",
      infoLink: "https://chatapp.alanwebdev2.com"
    },
    {
      imageUrl: "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049417/portfolio/Screen_Shot_2023-06-17_at_8.49.57_PM_ljy1ap.png",
      title: "CRUD Website",
      githubUrl: "https://github.com/user/project3",
      websiteUrl: "https://chatapp.alanwebdev3.com",
      infoLink: "https://chatapp.alanwebdev2.com"
    },
  ];

  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredIcons, setHoveredIcons] = useState(Array(projects.length).fill(null));

  const onMouseEnterIcon = (index, iconName) => {
    const newHoveredIcons = [...hoveredIcons];
    newHoveredIcons[index] = iconName;
    setHoveredIcons(newHoveredIcons);
  }

  const onMouseLeaveIcon = (index) => {
    const newHoveredIcons = [...hoveredIcons];
    newHoveredIcons[index] = null;
    setHoveredIcons(newHoveredIcons);
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='pt-32 text-lightyellow text-3xl font-bold uppercase'>Web Applications</h1>
      <hr className='border-white w-72 m-10' />
      <div className='flex uppercase text-lightyellow font-bold'>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='relative w-52 h-52 mx-10 rounded-full overflow-hidden'
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                className='absolute top-0 left-0 w-full h-full rounded-full'
                src={project.imageUrl}
                alt={project.title}
                style={{
                  filter: hoveredImage === index ? 'none' : 'blur(4px)',
                  transition: 'filter 0.3s'
                }}
              />
              <div className='absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center text-center text-white bg-black bg-opacity-50'>
                <span style={{ opacity: hoveredImage === index ? 0 : 0.5, transition: 'opacity 0.3s' }}>{project.title}</span>
              </div>
            </div>
            <div className='flex m-10 flex-col items-center'>
              <div className='flex '>
                <a className='flex m-4 w-14 h-14 justify-center' href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  onMouseEnter={() => onMouseEnterIcon(index, 'github')}
                  onMouseLeave={() => onMouseLeaveIcon(index)}
                >
                  <GitHub />
                </a>
                <a className="flex m-4  w-14 h-14 justify-center" href={project.websiteUrl} target="_blank" rel="noopener noreferrer"
                  onMouseEnter={() => onMouseEnterIcon(index, 'www')}
                  onMouseLeave={() => onMouseLeaveIcon(index)}
                >
                  <WorldWideWeb />
                </a>

                <a className="flex m-4 w-14 h-14 justify-center" href={project.infoLink} target="_blank" rel="noopener noreferrer"
                  onMouseEnter={() => onMouseEnterIcon(index, 'infoLink')}
                  onMouseLeave={() => onMouseLeaveIcon(index)}
                >
                  <Info />
                </a>

              </div>
              {hoveredIcons[index] === 'github' && <h1 className='mx-2 text-center'>{project.title} GitHub</h1>}
              {hoveredIcons[index] === 'www' && <h1 className='mx-2 text-center'>{project.title} Link</h1>}
              {hoveredIcons[index] === 'infoLink' && <h1 className='mx-2 text-center'>{project.title} Info</h1>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
