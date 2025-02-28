import React from "react";
import { BookSvg, DashboardSvg, ProfileSvg, ReceiptSvg } from "@/assets/icons";
import SideNav from "@/components/e-learning/sidenav";
import Navbar from "@/components/e-learning/nav";

const LecturerPortalLayout = ({ children, className }) => {
  return (
    <div className={"max-h-screen overflow-y-hidden"}>
      {/*navbar */}
      <Navbar />

      <div className={"flex max-h-screen"}>
        {/*side nav */}
        <SideNav navList={navList} />

        <div
          className={`w-full min-h-[calc(100vh-80px)] p-5 overflow-y-scroll pb-28 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default LecturerPortalLayout;

const navList = [
  {
    icon: <DashboardSvg />,
    name: "Dashboard",
    path: "/portal/lecturer",
  },
  {
    icon: <BookSvg />,
    name: "Academics",
    path: "/portal/lecturer/academics",
  },
  {
    icon: <ReceiptSvg />,
    name: "Examinations",
    path: "/portal/lecturer/examinations",
  },
  {
    icon: <ProfileSvg />,
    name: "My Profile",
    path: "/portal/lecturer/profile",
  },
];
