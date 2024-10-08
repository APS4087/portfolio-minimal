import React from "react";
import { projects } from "./data";
import Rounded from "./RoundedButton";

export default function Project({ setActiveMenu }) {
  return (
    <div className="relative mix-blend-difference z-10 text-white h-screen w-full flex flex-col justify-center items-center">
      {/* Projects List */}
      <ul
        onMouseLeave={() => {
          setActiveMenu(null);
        }}
        className="border-b w-full max-w-4xl mb-12"
      >
        {projects.map((project, i) => {
          return (
            <li
              onMouseOver={() => {
                setActiveMenu(i);
              }}
              key={project.title}
              className="flex justify-between items-center p-12 border-t border-gray-300 cursor-pointer transition-all duration-200 hover:opacity-50"
            >
              <a href={`/projects/${project.id}`} className="block w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-6xl m-0 font-light transition-all duration-400 transform hover:-translate-x-2">
                    {project.title}
                  </h2>
                  <p className="font-light transition-all duration-400 transform hover:translate-x-2">
                    {project.role}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {/* More Work Button */}
      <Rounded>
        <p>More work</p>
      </Rounded>
    </div>
  );
}
