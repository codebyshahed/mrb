import { FiGithub } from "react-icons/fi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full p-4 text-center mt-1 flex items-center justify-center">
      <p className="text-neutral-900/80 text-base font-normal flex items-center gap-x-2">
        &copy; 2026 Shahed (Virevo), Inc.
        <Link to={`https://github.com/ownist/mrb`} target="_blank">
          <FiGithub className="text-neutral-900/80 text-base font-normal" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
