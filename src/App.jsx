import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      console.log(newProject);
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  }

  const selectedProject = projectState.projects.find((project) => {
    return project.id === projectState.selectedProject;
  });

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    />
  );

  if (projectState.selectedProject === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="min-h-screen py-8 bg-stone-200 flex gap-6 ">
        <Sidebar
          onSelectProject={handleSelectProject}
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
        />
        <div className="flex-1 pr-6 pt-12">{content}</div>
      </main>
    </>
  );
}

export default App;
