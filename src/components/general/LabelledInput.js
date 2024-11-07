import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

const LabelledInput = ({
  containerClassName,
  inputClassName,
  labelClassName,
  title,
  placeholder,
  id,
  type = "text",
  required,
  ...rest
}) => {
  return (
    <div
      className={`grid w-full max-w-xl items-center gap-1.5 ${containerClassName}`}
    >
      <Label className={`text-c-blue ${labelClassName}`} htmlFor={id}>
        {title} {required && <span className={"text-red-600"}>*</span>}
      </Label>
      <Input
        className={`w-full ${inputClassName}`}
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </div>
  );
};

/**
 * return a controlled labelled input
 * @returns {JSX.Element}
 */
export const ControlledLabelledInput = ({
  control,
  rules = null,
  name,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => <LabelledInput {...field} {...rest} />}
    />
  );
};

export const VerificationCodeInput = ({
  noOfInputs = 5,
  containerClassName,
  inputClassName,
  labelClassName,
  title,
  id,
  type = "text",
  required,
  ...rest
}) => {
  return (
    <div
      className={`grid w-full max-w-xl items-center gap-1.5 ${containerClassName}`}
    >
      <Label className={`text-c-blue ${labelClassName}`} htmlFor={id}>
        {title} {required && <span className={"text-red-600"}>*</span>}
      </Label>

      <div className={"flex gap-4"}>
        {new Array(noOfInputs).fill("")?.map((inp, ind) => (
          <Input
            key={ind}
            className={`text-center ${inputClassName}`}
            type={type}
            id={id}
            required={required}
            maxLength={1}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
};

export default LabelledInput;
