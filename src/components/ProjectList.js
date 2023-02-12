import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("projects prop here .....", projects);
  const projectObject = projects.map((item, index) => {
    return (
      <ProjectItem
        key={index}
        name={item.name}
        about={item.about}
        technologies={item.technologies}
      />
    );
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectObject}</div>
    </div>
  );
}

export default ProjectList;
