import React from "react";
import { Button } from "@/components";
import { HiArrowUpRight } from "react-icons/hi2";
import PayFeeDialogue from "@/components/e-learning/finances/PayFeeDialogue";

const Banner = () => {
  return (
    <div className={"finance-gradient p-6 rounded-xl my-5"}>
      <h6 className={"font-medium text-[17px] mb-3 text-c-red"}>
        Meet Fee Payment Timelines
      </h6>

      <div className={"flex_row justify-between"}>
        <p className={"w-3/4 text-sm"}>
          Students are encouraged to settle their fees before the semester is
          much advanced to avoid the delays and inconveniences of last minute
          rushing when exam period approaches. Payments can be made via M-pesa
          or over the institutions bank accounts found in the fee structure
          document below.
        </p>

        <PayFeeDialogue>
          <Button
            className={
              "bg-c-blue text-white flex_row text-sm px-5 items-center"
            }
          >
            Pay your Fees
            <HiArrowUpRight className={"ml-2 text-white"} />
          </Button>
        </PayFeeDialogue>
      </div>
    </div>
  );
};

export default Banner;
