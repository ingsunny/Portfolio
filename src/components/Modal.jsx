import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  Fragment,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import HomeIcon from "./menuIcon/HomeIcon";
import ProjectIcon from "./menuIcon/ProjectIcon";
import TimelineIcon from "./menuIcon/TimelineIcon";
import ToolsIcon from "./menuIcon/ToolsIcon";
import AboutIcon from "./menuIcon/AboutIcon";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cancelButtonRef = useRef(null);

  // Memoize menu items to avoid redefining them on every render
  const menuItems = useMemo(
    () => ({
      Home: { name: "Home", link: "/", svg: <HomeIcon /> },
      About: { name: "About", link: "/about", svg: <AboutIcon /> },
      Projects: { name: "Projects", link: "/projects", svg: <ProjectIcon /> },
      Tools: { name: "Tools", link: "/tools", svg: <ToolsIcon /> },
      Timeline: { name: "Timeline", link: "/timeline", svg: <TimelineIcon /> },
    }),
    []
  );

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "k") {
        setOpen(true);
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Memoize the filtered items to avoid recalculating on every render
  const filteredItems = useMemo(() => {
    return Object.values(menuItems).filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.link.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [menuItems, searchTerm]);

  // Debounce the search input to minimize renders
  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setSearchTerm(value);
  }, []);

  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#0b0b0b] bg-opacity-60 backdrop-filter backdrop-blur-[2.6px] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-[#25262b] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#25262b]">
                  <div className="border-b border-gray-700">
                    <div className="flex w-full gap-3 py-3 px-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#909296"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                      </svg>
                      <input
                        type="text"
                        className="w-full bg-transparent outline-none border-none text-[#c1c2c5]"
                        value={searchTerm}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <ul className="py-[0.27rem] px-[0.24rem]">
                    {filteredItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        onClick={handleLinkClick}
                      >
                        <li
                          key={index}
                          className="flex gap-3 hover:bg-gray-400/20  py-2 px-2 rounded-md"
                        >
                          {item.svg}
                          <h3 className="text-[#c1c2c5] text-[1rem]">
                            {item.name}
                          </h3>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
