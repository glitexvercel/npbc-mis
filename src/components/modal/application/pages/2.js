import React, { useState } from "react";
import { Button } from "@/components";
import Uploads from "@/components/modal/application/pages/all_you_need/Uploads";
import ApplicationFee from "@/components/modal/application/pages/all_you_need/ApplicationFee";
import TermsAndCondition from "@/components/modal/application/pages/all_you_need/TermsAndCondition";
import { BsArrowLeft } from "react-icons/bs";

const AllYouNeed = ({ handleCloseModal, switchToPrevious, switchToNext }) => {
  const [hasRead, setHasRead] = useState(
    JSON.parse(localStorage.getItem("application"))?.isRead || false
  );
  return (
    <div className={"text-c-blue w-full"}>
      {/*    Details      */}
      <div className={"flex"}>
        <Button className={"md:p-3"} onClick={switchToPrevious}>
          <BsArrowLeft className={"text-2xl"} />
        </Button>
        <div className={"flex items-center flex-col flex-1 text-center"}>
          <h4 className={"text-2xl md:c-h5 font-bold md:w-2/3 mx-auto"}>
            Here is everything you need to complete your application
          </h4>

          <p className={"c-xl mt-4 font-semibold"}>
            {" "}
            We are glad to see you want to learn with us
          </p>
        </div>
        <Button className={"md:p-3"} onClick={switchToNext}>
          <BsArrowLeft className={"text-2xl rotate-180"} />
        </Button>
      </div>

      <div className={"flex flex-col md:flex-row gap-5 py-8"}>
        {/*    Application stages   */}
        <Uploads />

        {/*Complete later*/}
        <ApplicationFee />

        {/*    Need help    */}
        <TermsAndCondition
          isChecked={hasRead}
          handleCheck={(val) => {
            setHasRead(val);
            const data = JSON.parse(localStorage.getItem("application"));
            localStorage.setItem(
              "application",
              JSON.stringify({ ...data, isRead: val })
            );
          }}
        />
      </div>

      {/*    buttons  */}
      <div className={"flex"}>
        <Button className={"text-sm text-gray-500 font-bold"}>
          Need Help?
        </Button>
        <div className={"flex gap-4 justify-end flex-1"}>
          <Button
            onClick={handleCloseModal}
            className={
              "bg-c-red-pale text-c-red py-3 px-14 text-sm font-semibold"
            }
            text={"close"}
          />
          <Button
            className={`${
              hasRead
                ? "bg-c-red cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            } outline-none text-white py-3 px-12 text-sm font-semibold`}
            text={"Continue"}
            disabled={!hasRead}
            onClick={switchToNext}
          />
        </div>
      </div>
    </div>
  );
};

export default AllYouNeed;
