import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.svg";
import { JSX } from "react/jsx-runtime";

interface FooterItem {
  name: string;
  href: string;
  icon: (props: { className?: string }) => JSX.Element;
}

interface Footer {
  social: FooterItem[];
}

const footer: Footer = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/camille-laidet/",
      icon: ({ className }) => (
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className={`${className} text-gray-900`}
        />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Camille-ldt",
      icon: ({ className }) => (
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className={`${className} text-gray-900`}
        />
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-stone-500 shadow-xl my-0">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-4 sm:py-4 lg:px-8">
        {/* Section title */}
        <div className="flex items-center mt-5 mb-10">
          <div className="flex-grow border-t border-black" />
          <img src={Logo} alt="Logo" className="h-12 w-auto mx-auto" />
          <div className="flex-grow border-t border-black" />
        </div>

        {/* Social media icons */}
        <div className="mt-5 mb-5 flex justify-center gap-x-10">
          {footer.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-150 text-dark"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon({ className: "h-9 w-9" })}{" "}
            </a>
          ))}
        </div>

        <p className="mb-2 mt-5 text-center text-sm/6 text-gray-300">
          Copyright &copy; 2025 Camille Laidet - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
