import React from "react";
import LifeItem from "./LifeItem";

const Life = ({ data }) => {
  return (
    <div className="bg-white w-full my-20">
      <div
        className="p-6 md:p-12 flex items-center justify-center flex-col text-center"
        data-aos="fade-up"
      >
        <h4 className="c-h4 text-black mb-2">Life at NPBC</h4>

        <p className="text-gray-500">{data?.body}</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <LifeItem
          style={{
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg), url(/images/home/life-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          title={"Admission"}
          desc={
            <>
              Learn about admission requirements, how to apply, and the next
              steps once you’ve applied to the NPBC.
            </>
          }
        />

        <LifeItem
          style={{
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg), url(/images/home/life-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          title={"Scholarships"}
          desc={
            <>
              Every year, NPBC offers half scholarship for the first 20
              applicants in the full time diploma program.
            </>
          }
        />

        <LifeItem
          style={{
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg), url(/images/home/life-3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
          title={"Care groups"}
          desc={
            <>
              NPBC offers a caring environment for its staff and students where
              they can relate in a transformational wa
            </>
          }
        />

        <LifeItem
          style={{
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg), url(/images/home/life-4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          title={"Residence"}
          desc={
            <>
              NPBC has housing facilities which can be rented out for residence
              to the community
            </>
          }
        />
      </div>
    </div>
  );
};

export default Life;
