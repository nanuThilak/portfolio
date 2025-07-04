import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  githubLink,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center 
    justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => {
          setPreview(image);
        }}
        onMouseLeave={() => {
          setPreview(null);
        }}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => {
              return <span key={tag.id}>{tag.name}</span>;
            })}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="arrow" className="w-5" />
        </button>
        <div
          className="bg-gradient-to-r from-transparent 
        via-neutral-700 to-transparent h-[1px] w-full"
        />
      </div>
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          href={href}
          tags={tags}
          closeModel={() => setIsHidden(false)}
          githubLink={githubLink}
        />
      )}
    </>
  );
};

export default Project;
