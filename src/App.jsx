import { useState } from "react";
import AddProject from "./components/AddProject";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "This is a brief description of Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a brief description of Project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a brief description of Project 3.",
    },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProject = {
      id: projects.length + 1,
      title: formData.get("projectName"),
      description: formData.get("projectDescription"),
    };
    setProjects([...projects, newProject]);
    event.target.reset();
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Header />
      <AddProject handleSubmit={handleSubmit} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />

      <Projects projects={filteredProjects} />
    </>
  );
}

export default App;
