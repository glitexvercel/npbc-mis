import React from "react";
import Growth from "@/components/about/goals/icons/growth";
import Student from "@/components/about/goals/icons/student";
import Finance from "@/components/about/goals/icons/Finance";
import Service from "@/components/about/goals/icons/service";
import HumanResource from "@/components/about/goals/icons/human_resource";
import Relationship from "@/components/about/goals/icons/relationship";
import Association from "@/components/about/goals/icons/association";
import Learning from "@/components/about/goals/icons/learning";

const Index = () => {
  return (
    <section id={"goals"} className={" p-5 md:p-12 flex bg-c-blue text-white"}>
      {/*Side Menu*/}
      <div className={"hidden md:flex w-1/4"} />

      {/*    Main Body    */}
      <div className={" py-2 md:w-3/4"}>
        <h3
          className={"c-h7 font-bold text-center md:text-left"}
          data-aos="fade-up"
        >
          Our 9 Strategic Goals 2023 - 2027
        </h3>

        {/*    HStack     */}
        <div
          className={" grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 py-6"}
        >
          {goal_data?.map((item, index) => (
            <div
              key={index}
              className={
                " flex flex-col flex-1 gap-6 p-3 items-center text-center"
              }
              data-aos="fade-up"
            >
              {/*    icon     */}
              <div>{item?.icon}</div>
              {/*    Desc     */}
              <p className={"text-sm"}>{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;

/**
 *
 * @type {[{icon:JSX.Element, desc: string}]}
 */
const goal_data = [
  {
    icon: <Growth />,
    desc: "Foster spiritual formation and growth",
  },
  {
    icon: <Student />,
    desc: "Increase student enrollment and retention",
  },
  {
    icon: <Learning />,
    desc: "Enhance quality and innovation in teaching and learning",
  },
  {
    icon: <Finance />,
    desc: "Expand and efficiently manage financial resources",
  },
  {
    icon: <Service />,
    desc: "Enhance service delivery",
  },
  {
    icon: <HumanResource />,
    desc: "Enhance human resource management practices",
  },
  {
    icon: <HumanResource />,
    desc: "Expand maintain and optimize infrastructure",
  },
  {
    icon: <Relationship />,
    desc: "Enhance stakeholder relationship",
  },
  {
    icon: <Association />,
    desc: "Establish and enhance alumni association",
  },
];
