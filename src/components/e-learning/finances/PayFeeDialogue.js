import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ResultInput } from "@/components/e-learning/lecturer/examinations/UploadResultsDialogue";
import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { payFeeViaMpesa } from "@/services/FeeServices";
import { CgSpinner } from "react-icons/cg";

const UploadResultsDialogue = ({ children }) => {
  const dialogRef = useRef(null);
  const [state, setState] = useState({
    phone: "",
    student_number: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const payFeeMutation = useMutation({
    mutationKey: "pay_fee",
    mutationFn: (props) => payFeeViaMpesa(props),
    onSuccess: () => {
      toast.success("Success!", { description: "Mpesa payment initiated" });
    },
    onError: (error) =>
      toast.error("Error", {
        description: "Failed to initiate Mpesa payment. Try again ",
      }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.phone || !state.student_number || !state.amount) {
      return toast.error("Error", {
        description: "Ensure all fields are filled before submitting",
      });
    }

    // validate phone number and convert it to +254 format
    const phone = state.phone;
    let validatedPhone = null;

    if (phone.startsWith("07") || phone.startsWith("01")) {
      validatedPhone = `+254${phone.slice(1)}`;
    } else if (phone.startsWith("254")) {
      validatedPhone = `+${phone}`;
    } else {
      return toast.error("Error", {
        description: "Invalid phone number.",
      });
    }

    payFeeMutation.mutate({
      phoneNumber: validatedPhone,
      reg_no: state.student_number,
      amount: state.amount,
    });
  };

  return (
    <Dialog ref={dialogRef}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form className={"flex flex-col gap-5"} onSubmit={handleSubmit}>
          <DialogHeader className={"py-3 border-b border-gray-300"}>
            <DialogTitle className={"text-c-red text-xl"}>
              Make M-pesa Payment
            </DialogTitle>
            <DialogDescription>
              Make fee payment for an amount via M-pesa. A prompt will be sent
              to your phone for you to confirm the payment, by entering your PIN
            </DialogDescription>
          </DialogHeader>

          {/*  body  */}
          <div className={"flex flex-col gap-5"}>
            <ResultInput
              id={"phone"}
              placeholder={"07********"}
              label={"Phone Number"}
              name={"phone"}
              required
              onChange={handleChange}
            />

            <div className={"flex gap-5 w-full"}>
              <ResultInput
                id={"student_number"}
                placeholder={"nnnn-nnnn-nnnn"}
                label={"Admission Number"}
                name={"student_number"}
                required
                onChange={handleChange}
              />
              <ResultInput
                id={"amount"}
                placeholder={"0"}
                label={"Payment Amount"}
                name={"amount"}
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <DialogFooter className={"flex-row justify-end gap-3 py-3"}>
            <DialogClose asChild>
              <Button
                className={
                  "text-sm text-c-blue border border-c-blue font-light"
                }
                variant={"outline"}
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              className={
                "bg-c-blue text-white flex_row text-sm px-5 items-center"
              }
              type={"submit"}
              disabled={payFeeMutation.isPending}
            >
              {payFeeMutation?.isPending
                ? `Initiating Payment...`
                : `Make Payment`}

              {payFeeMutation?.isPending ? (
                <CgSpinner
                  size={18}
                  className={"animate-spin ml-2  text-white"}
                />
              ) : (
                <HiArrowUpRight className={"ml-2 text-white"} />
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResultsDialogue;

const exams = [
  {
    value: "final",
    label: "Final Exam",
  },
];

const units = [];

const studentScores = [
  {
    accessorKey: "registrationNumber",
    header: "Registration Number",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "score",
    header: "Exam Score",
    width: "w-[100px]",
  },
];
