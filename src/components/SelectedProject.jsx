import React from "react";

export default function SelectedProject({ project, onDeleteProject }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="bg-white">
      <header>
        <div>
          <h1>{project.title}</h1>
          <button onClick={() => onDeleteProject(project.id)}>DELETE</button>
        </div>
        <p className="whitespace-pre-wrap ">{formattedDate}</p>
        <p>{project.desription}</p>
      </header>
      TASKS
    </div>
  );
}
