import React from "react";
import MenuItem from "@/components/about/history/MenuItem";

const SideMenu = () => {
  return (
    <div
      className={"md:w-1/4 bg-none hidden md:flex flex-col"}
      data-aos="fade-right"
    >
      <ul className={"w-9/12"}>
        {/*Menu items*/}
        <MenuItem isCurrent name={"History"} />
        <MenuItem name={"Accreditation"} />
        <MenuItem name={"Mission & Vision"} />
        <MenuItem name={"Philosophy & Core Values"} />
        <MenuItem name={"Our Goals"} />
        <MenuItem name={"Leadership"} />
        <MenuItem name={"Partners"} />
      </ul>
    </div>
  );
};

export default SideMenu;
