import React from "react";
import Button from "./Button";
import img from "../assets/select.svg";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="no project selected" className="max-w-xs " />
      <h2 className="text-xl font-semibold">No Project Selected</h2>
      <p className="mt-2">Select a project or get started with a new one.</p>
      <p className="mt-6">
        <Button onClick={onStartAddProject} label="Create New Project" />
      </p>
    </div>
  );
}
