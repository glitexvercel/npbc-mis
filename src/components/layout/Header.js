import React from "react";
import { Button } from "../general";
import { FiPhone } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import Link from "next/link";

const Header = ({ showModal }) => {
  return (
    <div className="bg-white md:px-10 px-3 h-[75px] flex items-center text-black">
      <Link href="/">
        <div className="flex flex-col md:flex-row gap-[0.5] md:gap-4 justify-center md:items-center ">
          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className=" h-12 md:h-[80px] w-[70px] object-contain"
            src="/images/layout/npbc-logo-2.png"
            alt="logo"
          />

          {/* title */}
          <h4 className="c-h7 text-xl font-bold text-c-blue hidden md:inline-flex">
            Nairobi Pentecostal Bible College
          </h4>
        </div>
      </Link>

      {/* buttons */}
      <div className="flex gap-3 flex-1 justify-end">
        <Button
          className={
            " bg-c-red-pale hidden md:flex items-center justify-center gap-2 c-normal py-2.5 w-[160px] text-c-red"
          }
        >
          {/* icon */}
          <FiPhone className="" />
          {/* phone */}
          <span className="text-[12px]">+254 754 569687</span>
        </Button>

        <Link href="/portal">
          <Button
            className={
              "bg-c-red flex items-center justify-center gap-2 c-normal py-2.5 w-auto px-2 md:px-0 md:w-[160px] text-white"
            }
            disabled={true}
          >
            {/* icon */}
            <MdPersonOutline className="text-lg" />
            {/* phone */}
            <span className="text-[12px]">Access Portals</span>
          </Button>
        </Link>
        <Button
          className={
            "bg-c-red hidden items-center justify-center gap-2 c-normal py-2.5 w-auto px-5 md:px-0 md:w-[160px] text-white"
          }
          onClick={showModal}
        >
          {/* phone */}
          <span className="text-[12px]">Apply Now</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
