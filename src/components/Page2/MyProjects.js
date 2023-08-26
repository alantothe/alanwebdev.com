import React, { useState } from "react";

import GitHub from "../svg/github";
import WorldWideWeb from "../svg/WorldWideWeb";
import Info from "../svg/Info";
import WorkDetail from "../../utils/WorkDetail";

function MyProjects() {
  const projects = [
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049071/portfolio/Screen_Shot_2023-06-17_at_8.43.39_PM_fgwgod.png",
      title: "Blackjack",
      githubUrl: "https://github.com/user/project1",
      websiteUrl: "https://chatapp.alanwebdev.com",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687048654/portfolio/Screen_Shot_2023-06-17_at_8.34.41_PM_r3hjdt.png",
      title: "Chat App",
      githubUrl: "https://github.com/user/project2",
      websiteUrl: "https://chatapp.alanwebdev2.com",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049417/portfolio/Screen_Shot_2023-06-17_at_8.49.57_PM_ljy1ap.png",
      title: "CRUD Website",
      githubUrl: "https://github.com/user/project3",
      websiteUrl: "https://chatapp.alanwebdev3.com",
      infoLink: "https://chatapp.alanwebdev2.com",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-32 text-lightyellow text-3xl font-bold uppercase">
        Web Applications
      </h1>
      <hr className="border-white w-72 m-10" />
      <WorkDetail projects={projects} />
    </div>
  );
}

export default MyProjects;
