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
      <div className="flex uppercase text-lightyellow font-bold">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="relative w-52 h-52 mx-10 rounded-full overflow-hidden"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                className="absolute top-0 left-0 w-full h-full rounded-full"
                src={project.imageUrl}
                alt={project.title}
                style={{
                  filter: hoveredImage === index ? "none" : "blur(4px)",
                  transition: "filter 0.3s",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center text-center text-white bg-black bg-opacity-50">
                <span
                  style={{
                    opacity: hoveredImage === index ? 0 : 0.5,
                    transition: "opacity 0.3s",
                  }}
                >
                  {project.title}
                </span>
              </div>
            </div>
            <div className="flex m-10 flex-col items-center">
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
              {hoveredIcons[index] === "github" && (
                <h1 className="mx-2 text-center">{project.title} GitHub</h1>
              )}
              {hoveredIcons[index] === "www" && (
                <h1 className="mx-2 text-center">{project.title} Link</h1>
              )}
              {hoveredIcons[index] === "infoLink" && (
                <h1 className="mx-2 text-center">{project.title} Info</h1>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkDetail;
