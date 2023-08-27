import React, { useState } from "react";

import GitHub from "../components/svg/github.js";
import WorldWideWeb from "../components/svg/WorldWideWeb.js";
import Info from "../components/svg/Info.js";

function WorkDetail({ projects }) {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredIcons, setHoveredIcons] = useState(
    Array(projects.length).fill(null)
  );

  const onMouseEnterIcon = (index, iconName) => {
    const newHoveredIcons = [...hoveredIcons];
    newHoveredIcons[index] = iconName;
    setHoveredIcons(newHoveredIcons);
  };

  const onMouseLeaveIcon = (index) => {
    const newHoveredIcons = [...hoveredIcons];
    newHoveredIcons[index] = null;
    setHoveredIcons(newHoveredIcons);
  };
  return (
    <div>
      <div className="flex uppercase text-lightyellow font-bold pt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-2 w-98 mx-12 pt-10 border-yellow-100 bg-coolgrey drop-shadow-md"
          >
            <div className=" pb-8">{project.title}</div>
            <div className="relative w-52 h-52 mx-10 rounded-full overflow-hidden">
              <img
                className="left-0 w-full h-full rounded-full drop-shadow-md"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className="flex mx-10 mt-10 flex-col items-center">
              <div className="flex ">
                <a
                  className="flex m-4 w-14 h-14 justify-center"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onMouseEnterIcon(index, "github")}
                  onMouseLeave={() => onMouseLeaveIcon(index)}
                >
                  <GitHub className="text-lightyellow" />
                </a>
                <a
                  className="flex m-4  w-14 h-14 justify-center"
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onMouseEnterIcon(index, "www")}
                  onMouseLeave={() => onMouseLeaveIcon(index)}
                >
                  <WorldWideWeb />
                </a>

                <a
                  className="flex m-4 w-14 h-14 justify-center"
                  href={project.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onMouseEnterIcon(index, "infoLink")}
                  onMouseLeave={() => onMouseLeaveIcon(index)}
                >
                  <Info />
                </a>
              </div>
              <div className="m-0 p-0 h-16">
                {hoveredIcons[index] === "github" && (
                  <h1 className="mx-2 text-center h-10">
                    {project.title} GitHub
                  </h1>
                )}
                {hoveredIcons[index] === "www" && (
                  <h1 className="mx-2 text-center">{project.title} Link</h1>
                )}
                {hoveredIcons[index] === "infoLink" && (
                  <h1 className="mx-2 text-center">{project.title} Info</h1>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkDetail;
