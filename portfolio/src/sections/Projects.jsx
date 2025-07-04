import { myProjects } from "../constants";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
    id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div
        className="bg-gradient-to-r from-transparent 
      via-neutral-700 to-transparent mt-12 h-[1px] w-full"
      />
      <div>
        {myProjects.map((project) => (
          <Project
            key={project?.id}
            title={project?.title}
            description={project?.description}
            subDescription={project?.subDescription}
            href={project?.href}
            image={project?.image}
            tags={project?.tags}
            setPreview={setPreview}
            githubLink={project?.githubLink}
          />
        ))}
        {preview && (
          <motion.img
            src={preview}
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
            alt=""
            style={{ x: springX, y: springY }}
          />
        )}
      </div>{" "}
    </section>
  );
};

export default Projects;
