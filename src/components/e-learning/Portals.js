import React from "react";
import Image from "next/image";
import { Button } from "@/components";
import { useRouter } from "next/router";

const Portals = () => {
  const router = useRouter();

  const handleNavigate = (screen) => {
    router.push(screen ?? "/");
  };
  return (
    <div
      className={
        " px-6 md:px-10 lg:px-14 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      }
    >
      {portals?.map((item, ind) => (
        <div
          key={ind}
          className={
            "text-black bg-slate-600 rounded-xl relative overflow-hidden"
          }
        >
          <Image
            src={item.image}
            alt={"img"}
            width={1000}
            height={900}
            className={"object-cover h-full w-full"}
          />
          <div
            className={
              "p-5 flex flex-col items-center justify-center text-center absolute inset-0 bg-[#000000B0] gap-3"
            }
          >
            <h4
              className={"font-bold text-lg sm:text-xl lg:text-2xl text-white"}
            >
              {item?.title}
            </h4>

            <p className={"text-white text-sm"}>{item.desc}</p>

            <Button
              className={" bg-white text-black text-sm font-semibold px-4"}
              text={`Login as ${item?.type}`}
              onClick={() => handleNavigate(item?.route ?? "")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portals;

/**
 *
 * @type {[{title: string, type: string, desc: string}]}
 */
const portals = [
  {
    title: "Student portal",
    desc: "Sign in to manage your account and view updates and information communicated by the administration. ",
    type: "student",
    image: "/images/e-learning/students.jpeg",
    route: "/portal/student",
  },
  {
    title: "Lecturer Portal",
    desc: "Sign in to access class schedules, manage student grades and upload learning materials",
    type: "lecturer",
    image: "/images/e-learning/lecturer.jpeg",
    route: "/portal/lecturer",
  },
  {
    title: "Center Coordinator",
    desc: "Sign in to oversee academic operations, manage course schedules, and coordinate between faculty and administration.",
    type: "coordinator",
    image: "/images/e-learning/coordinators.jpeg",
    route: "https://npbc-admin.npbc.co.ke/login",
  },
  {
    title: "Administrator Portal",
    desc: "Sign in to manage user accounts, configure system settings, and oversee platform performance.",
    type: "administrator",
    image: "/images/e-learning/admins.jpeg",
    route: "https://npbc-admin.npbc.co.ke/login",
  },
];

/**
 * typedef {{
 *     title:string
 *     desc:string
 *     type:"student"|"lecturer"|"coordinator"|"admin"
 *     image:string
 * }} Portal
 */
