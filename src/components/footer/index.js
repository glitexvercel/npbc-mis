import React from "react";
import { Button } from "../general";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ showModal, hideApplication }) => {
  return (
    <div className="text-white ">
      {/* image */}
      {!hideApplication && (
        <div
          className="text-center h-48 c-h7 md:c-h3 p-3 flex flex-col gap-5 items-center justify-center"
          style={{
            background:
              " linear-gradient(0deg, rgba(9, 42, 89, 0.66), rgba(9, 42, 89, 0.66)), url(/images/footer/npbc-footer.webp)",
            backgroundSize: "contain",
            backgroundPosition: "bottom",
          }}
        >
          <p className="leading-8 md:leading-10 text-white" data-aos="fade-up">
            Become a student at <br /> NPBC
          </p>

          <Button
            onClick={showModal}
            className={"bg-white text-c-blue c-normal w-44 h-10 font-semibold"}
            data-aos="fade-left"
          >
            Apply Today
          </Button>
        </div>
      )}
      {/* links */}
      <div className="flex flex-col gap-y-5 md:flex-row bg-c-blue text-sm justify-evenly py-14 text-white">
        <div className={"flex flex-1  justify-around md:justify-around"}>
          <NPBC />

          <Explore />
        </div>

        <div className={"flex flex-1  justify-around md:justify-around"}>
          <QuickLinks />

          <Research />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const NPBC = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">NPBC</h6>
    {/* Location */}
    <div className="block leading-6">
      <p className="font-semibold">Location:</p>
      <p>Garden Estate Off Thika Road Office</p>
    </div>

    {/* Hours */}
    <div className="block leading-6">
      <p className="font-semibold">Hours:</p>
      <p>8.00am - 5:00pm</p>
    </div>

    {/* Telephone */}
    <div className="block leading-6">
      <p className="font-semibold">Telephone:</p>
      <p>0754 569 687</p>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <p className="font-semibold">Email:</p>
      <p>admin@npbc.co.ke</p>
    </div>
  </div>
);

const Explore = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">Explore</h6>
    {/* Our History */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/about#history"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Our History</p>
      </Link>
    </div>

    {/* Mission & Vision */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/about#mission"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Mission & Vision</p>
      </Link>
    </div>

    {/* How to Apply */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/admission#how-to-apply"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>How to Apply</p>
      </Link>
    </div>

    {/* Study modes */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/courses#modes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Study modes</p>
      </Link>
    </div>

    {/* Application FAQs */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/admission#faqs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Application FAQs</p>
      </Link>
    </div>

    {/* Social Media Section */}
    <div className="leading-6 flex items-center gap-4 my-2">
      <Link
        href="https://www.facebook.com/profile.php?id=100064239451496"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-white text-2xl" />
      </Link>
      <Link
        href="https://x.com/Npbc_ke"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="text-white text-2xl" />
      </Link>
      {/* linkedin: https://www.linkedin.com/company/nairobi-pentecostal-biblecollege */}
      <Link
        href="https://www.youtube.com/@NairobiPentecostalBibleCollege"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoYoutube className="text-white text-2xl" />
      </Link>
    </div>
  </div>
);

const QuickLinks = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">QUICK LINKS</h6>
    {/* Admissions */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/admission"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Admissions</p>
      </Link>
    </div>

    {/* Student Life */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/#life-at-npbc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Student Life</p>
      </Link>
    </div>

    {/* E-learning */}
    <div className="block leading-6">
      <Link
        href="https://classroom.google.com/u/0/h"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>NPBC Online</p>
      </Link>
    </div>
  </div>
);

const Research = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">COURSES</h6>
    {/* Location */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/courses#undergraduate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Undergraduate Programs</p>
      </Link>
    </div>

    {/* Hours */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/courses#diploma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Diploma Programs</p>
      </Link>
    </div>

    {/* Telephone */}
    <div className="block leading-6">
      <Link
        href="https://www.npbc.co.ke/ourses#certificate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Certificate Programs</p>
      </Link>
    </div>
  </div>
);
