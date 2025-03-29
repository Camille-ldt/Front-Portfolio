import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";

interface NavigationItem {
  sectionId: string;
  name: string;
}

const navigation: NavigationItem[] = [
  { name: "À propos", sectionId: "aboutMe" },
  { name: "Projets", sectionId: "projects" },
  { name: "Contact", sectionId: "contact" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollEvent = () => {
      let currentSection = "";
      navigation.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = item.sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full p-3 bg-stone-500 shadow-xl z-50"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Button mobile menu */}
          <div className="-ml-2 mr-2 flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-2 text-black hover:bg-stone-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex items-center w-full">
            {/* Logo aligned to the left */}
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto hidden lg:block"
            />

            {/* Navigation links centered */}
            <div className="flex-grow flex justify-center">
              <nav className="hidden md:flex md:items-center md:space-x-6">
                {navigation.map((item) => (
                  <button
                    key={item.sectionId}
                    onClick={() => handleScroll(item.sectionId)}
                    className={classNames(
                      activeSection === item.sectionId
                        ? "bg-stone-800 text-white"
                        : "text-white hover:text-black",
                      "rounded-md px-2 py-1 text-md font-bold cursor-pointer"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.sectionId}
              as="button"
              onClick={() => handleScroll(item.sectionId)}
              className={classNames(
                activeSection === item.sectionId
                  ? "bg-stone-800 text-white"
                  : "text-white hover:text-black",
                "rounded-md px-2 py-1 text-sm font-bold"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
