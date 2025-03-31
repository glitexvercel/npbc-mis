import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useRouter as useNavigate } from "next/navigation";
import { useRouter } from "next/router";
import { Button } from "@/components";
import { HiViewList } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState("home");
  const [currentCollapsibleTab, setCurrentCollapsibleTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (nav) => {
    setIsOpen(false);
    setCurrentTab(nav?.path);
    navigate.push(nav?.path);
  };

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  const handleOpenNav = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const location = router.pathname.split("/")[1];

    if (location === "") {
      setCurrentTab("home");
    } else {
      setCurrentTab(location);
    }
  }, [router.pathname]);

  return (
    <>
      <div className="bg-c-blue-dark h-14 md:px-10 ">
        {/* Nav Items */}
        <div
          className={
            "hidden md:flex flex-1 h-full justify-between items-center"
          }
        >
          {nav_list?.map((item, key) => {
            return (
              <NavItem
                key={key}
                title={item?.name}
                path={item?.path}
                subMenu={item?.subnavs}
                hasSubmenu={item?.subnavs && item?.subnavs?.length > 0}
                isCurrent={currentTab?.toLocaleLowerCase() === item?.key}
                isCurrentCollapsibleTab={
                  currentCollapsibleTab?.toLocaleLowerCase() ===
                  item?.name?.toLocaleLowerCase()
                }
                setCurrentCollapsibleTab={setCurrentCollapsibleTab}
                handleClick={() => handleNavigate(item)}
              />
            );
          })}
        </div>

        <div
          className={
            "flex-1 flex md:hidden h-full px-4 justify-between text-white"
          }
        >
          <h4 className={"font-semibold my-auto "}>
            Nairobi Pentecostal College
          </h4>

          <Button
            className={"p-2 rounded-md focus:bg-[#ffffff20] my-auto"}
            onClick={handleOpenNav}
          >
            <HiViewList className={"text-3xl  "} />
          </Button>
        </div>
      </div>

      <div
        className={`z-[80] top-0 fixed right-0 bottom-0 h-screen bg-[#00000050]  ${
          isOpen ? " w-screen " : "w-0"
        } transition-all duration-500 ease-in-out overflow-hidden`}
        onClick={handleCloseNav}
      >
        <div
          className={`float-right h-full bg-c-blue-dark z-50 ${
            isOpen ? " w-screen sm:w-[70vw]" : "w-0"
          } transition-all duration-700 ease-in-out overflow-hidden`}
          onClick={() => {}}
        >
          <div className={`block`}>
            <div className="flex justify-end p-5">
              <button className="" onClick={() => {}}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.02136 28.9813L15.0027 15M28.984 1.01868L15 15M15 15L1.02136 1.01868M15.0027 15L28.984 28.9813"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 py-16 ">
              {nav_list?.map((item, key) => (
                <button
                  key={key}
                  className="h-full"
                  onClick={() => handleNavigate(item)}
                >
                  <div
                    className={`c-normal h-full flex items-center px-6 text-lg font-semibold text-white hover:bg-c-red ease-in duration-300`}
                  >
                    {item.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const nav_list = [
  {
    name: "Home",
    path: "/",
    key: "home",
  },
  {
    name: "Admissions",
    path: "/admission",
    key: "admission",
    subnavs: [
      {
        name: "How to Apply",
        path: "/admission#how-to-apply",
      },
      {
        name: "Course Qualifications",
        path: "/admission#qualifications",
      },
      {
        name: "Our Intakes",
        path: "/admission#intakes",
      },
      {
        name: "Application FAQs",
        path: "/admission#faqs",
      },
      {
        name: "Resume Application",
        path: "/admission#how-to-apply",
      },
    ],
  },
  {
    name: "Courses",
    path: "/courses",
    key: "courses",
    subnavs: [
      {
        name: "Postgraduate Programs",
        path: "/courses#undergraduate",
      },
      {
        name: "Undergraduate Programs",
        path: "/courses#undergraduate",
      },
      {
        name: "Diploma Programs",
        path: "/courses#diploma",
      },
      {
        name: "Certificate Programs",
        path: "/courses#certificate",
      },
      {
        name: "Study Modes",
        path: "/courses#modes",
      },
    ],
  },
  {
    name: "E-Learning",
    path: "https://classroom.google.com",
    target: "_blank",
    key: "e-learning",
  },
  {
    name: "Downloads",
    path: "/downloads",
    key: "downloads",
  },
  {
    name: "Contact Us",
    path: "/contacts",
    key: "contacts",
  },
  {
    name: "About Us",
    path: "/about",
    key: "about",
    subnavs: [
      {
        name: "Our History",
        path: "/about#history",
      },
      {
        name: "News and Articles",
        path: "/about#",
      },
      {
        name: "Mission, Vision and Core values",
        path: "/about#mission",
      },
      {
        name: "Strategic Goals",
        path: "/about#goals",
      },
      {
        name: "NPBC Leadership",
        path: "/about#leadership",
      },
      {
        name: "Partners",
        path: "/about#partners",
      },
    ],
  },
];
