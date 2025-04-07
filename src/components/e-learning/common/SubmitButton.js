import { Button } from "@/components/ui/button";
import React from "react";
import { ButtonSpinner } from ".";

const SubmitButton = ({
  isLoading = false,
  text = null,
  children,
  ...rest
}) => {
  return (
    <Button
      type={"submit"}
      className={`bg-c-red text-white rounded-xl h-12 gap-10 ${
        isLoading ? "opacity-60 pointer-events-none" : ""
      }`}
      {...rest}
    >
      {text ? text : children}
      {isLoading && <ButtonSpinner />}
    </Button>
  );
};

export default SubmitButton;
