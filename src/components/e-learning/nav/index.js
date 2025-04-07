import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NotificationBellSvg } from "@/assets/icons";
import { NavDropDown } from "..";

const Navbar = () => {
  return (
    <div
      className={
        "flex_row-center-y justify-between p-2 bg-white md:px-10 inter min-h-[80px] shadow"
      }
    >
      {/*logo*/}
      <div className={"flex_row-center-y gap-2"}>
        <Image
          src={"/images/layout/npbc-logo-2.png"}
          className={"w-16 object-contain"}
          alt={"logo"}
          height={100}
          width={100}
        />
        <h3 className={"text-xl font-semibold"}>
          Nairobi Pentecostal Bible College
        </h3>
      </div>

      <div className={"flex_row gap-5 items-center"}>
        <Button variant={"ghost"} className={"py-0 p-2 rounded-full"}>
          <NotificationBellSvg />
        </Button>

        <NavDropDown />
      </div>
    </div>
  );
};

export default Navbar;
