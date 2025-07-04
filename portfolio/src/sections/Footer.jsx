import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-5
    pb-3 text-sm text-neutral-400 c-space mt-20"
    >
      <div
        className="bg-gradient-to-r from-transparent via-neutral-700
      to-transparent h-[1px] w-full"
      />

      <div className="flex gap-2">
        <p>My Portfolio</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} target="blank" key={index} className="flex gap-2">
            <p>{social.name}</p>
            <img
              src={social.icon}
              alt={social.name}
              className="w-5 h-5 border border-white"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
