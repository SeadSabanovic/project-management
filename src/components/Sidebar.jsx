import React from "react";
import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  onSelectProject,
  projects,
}) {
  return (
    <aside className="sticky top-6 w-1/3 md:w-72 h-full bg-stone-800 text-stone-50 rounded-r-xl px-6 py-12">
      <h2 className="mb-8 uppercase md:text-xl font-bold">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject} label="+ Add Project" />
      </div>
      <ul className="flex flex-col gap-4 mt-6">
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="rounded px-4 py-2 bg-stone-700 cursor-pointer hover:bg-stone-600 "
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
