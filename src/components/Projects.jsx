import ProjectCard from "./ProjectCard";
import { useState } from "react";

function Projects({ projects }) {
  return (
    <div>
      <h1>Project </h1>

      <div class="card-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
