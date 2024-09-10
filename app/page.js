// app/page.js
import Project from "../components/Project";
import styles from "./page.module.css";

export default function HomePage() {
  const projects = [
    { number: 1, title: "Project 01", image: "/images/project01.jpg" },
    { number: 2, title: "Project 02", image: "/images/project02.jpg" },
    { number: 3, title: "Project 03", image: "/images/project03.jpg" },
    { number: 4, title: "Project 04", image: "/images/project04.jpg" },
  ];

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Project
          key={project.number}
          projectNumber={project.number}
          title={project.title}
          image={project.image}
        />
      ))}
    </div>
  );
}
