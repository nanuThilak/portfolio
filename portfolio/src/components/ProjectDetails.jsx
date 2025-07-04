import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModel,
  githubLink,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
    w-full h-full overflow-hidden backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-w-2xl border shadow-sm 
      rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
      >
        <button
          onClick={closeModel}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" alt="closeIcon" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDes, index) => (
            <p className="mb-3 font-normal text-neutral-400" key={index}>
              {subDes}
            </p>
          ))}
          <div>
            <a href={githubLink} className="mb-3 font-normal text-white">
              <img
                src="assets/logos/github.svg"
                className="size-5 rounded-full"
                alt="github"
              />
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-between  mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => {
                return (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                );
              })}
            </div>
            <a
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              href={href}
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
